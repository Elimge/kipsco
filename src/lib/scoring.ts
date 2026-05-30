import {
  AssessmentResult,
  Dimension,
  DimensionScore,
  Question,
  RoleCompatibility,
} from "@/types/assessment";

const DIMENSION_META: Record<Dimension, { label: string; description: string }> = {

  openness: {
    label: "Apertura",
    description:
      "Curiosidad intelectual, creatividad y disposición al cambio.",
  },
  conscientiousness: {
    label: "Responsabilidad",
    description:
      "Organización, disciplina y orientación al logro de objetivos.",
  },
  extraversion: {
    label: "Extraversión",
    description:
      "Sociabilidad, asertividad y energía en entornos sociales.",
  },
  agreeableness: {
    label: "Amabilidad",
    description:
      "Cooperación, empatía y orientación hacia los demás.",
  },
  neuroticism: {
    label: "Estabilidad Emocional",
    description:
      "Capacidad de manejar el estrés y las emociones bajo presión.",
  },
  logical: {
    label: "Razonamiento Lógico",
    description: "Capacidad de identificar patrones y resolver problemas.",
  },
  numerical: {
    label: "Aptitud Numérica",
    description: "Habilidad para trabajar con datos y cálculos.",
  },
  verbal: {
    label: "Razonamiento Verbal",
    description: "Comprensión y análisis de información textual.",
  },
  attention: {
    label: "Atención al Detalle",
    description: "Precisión y concentración en tareas específicas.",
  },
} as const satisfies Record<Dimension, { label: string; description: string }>;

const ROLE_PROFILES: Record<string, Partial<Record<Dimension, number>>> = {
  "Frontend Developer": {
    openness: 4,
    conscientiousness: 4,
    extraversion: 2,
    logical: 4,
  },
  "Product Manager": {
    extraversion: 4,
    agreeableness: 4,
    conscientiousness: 4,
    openness: 3,
  },
  "UX Designer": {
    openness: 5,
    agreeableness: 4,
    extraversion: 3,
  },
  "Data Analyst": {
    conscientiousness: 5,
    logical: 5,
    numerical: 5,
    neuroticism: 2,
  },
  "Tech Lead": {
    extraversion: 4,
    conscientiousness: 4,
    openness: 4,
    logical: 4,
  },
  "Scrum Master": {
    agreeableness: 5,
    extraversion: 4,
    conscientiousness: 4,
  },
};

export function calculateScores(
  questions: Question[],
  answers: Record<string, string>
): AssessmentResult {
  const raw: Partial<Record<Dimension, number[]>> = {};

  for (const question of questions) {
    const selectedOptionId = answers[question.id];
    if (!selectedOptionId) continue;

    const option = question.options.find((o) => o.id === selectedOptionId);
    if (!option) continue;

    for (const [dim, score] of Object.entries(option.scores) as [
      Dimension,
      number
    ][]) {
      if (!raw[dim]) raw[dim] = [];
      raw[dim]!.push(score);
    }
  }

  const dimensions: DimensionScore[] = (
    Object.keys(DIMENSION_META) as Dimension[]
  )
    .filter((dim) => raw[dim] && raw[dim]!.length > 0)
    .map((dim) => {
      const scores = raw[dim]!;
      const total = scores.reduce((a, b) => a + b, 0);
      const max = scores.length * 5;
      const percentage = Math.round((total / max) * 100);

      return {
        dimension: dim,
        score: total,
        max,
        percentage,
        label: DIMENSION_META[dim].label,
        description: DIMENSION_META[dim].description,
      };
    })
    .sort((a, b) => b.percentage - a.percentage);

  const topStrengths = dimensions
    .filter((d) => d.percentage >= 70)
    .slice(0, 3)
    .map((d) => d.label);

  const areasToGrow = dimensions
    .filter((d) => d.percentage < 50)
    .slice(0, 2)
    .map((d) => d.label);

  const roleCompatibility: RoleCompatibility[] = Object.entries(
    ROLE_PROFILES
  ).map(([role, profile]) => {
    const dimScores = dimensions.reduce(
      (acc, d) => ({ ...acc, [d.dimension]: d.percentage }),
      {} as Record<Dimension, number>
    );

    const profileDims = Object.entries(profile) as [Dimension, number][];
    let match = 0;
    let total = 0;

    for (const [dim, weight] of profileDims) {
      const userScore = dimScores[dim] ?? 50;
      const idealScore = weight * 20;
      const diff = Math.abs(userScore - idealScore);
      match += Math.max(0, 100 - diff) * weight;
      total += 100 * weight;
    }

    return {
      role,
      percentage: Math.round((match / total) * 100),
      icon: "💼",
    };
  }).sort((a, b) => b.percentage - a.percentage);

  const top = dimensions[0];
  const overallProfile = top
    ? `Perfil con alta ${top.label.toLowerCase()} — orientado a ${
        top.percentage > 75 ? "resultados excepcionales" : "desempeño sólido"
      } en entornos profesionales.`
    : "Perfil equilibrado con fortalezas distribuidas.";

  return {
    testId: "big5-laboral",
    completedAt: new Date().toISOString(),
    dimensions,
    topStrengths,
    areasToGrow,
    roleCompatibility,
    overallProfile,
  };
}