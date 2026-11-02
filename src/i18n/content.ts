import { AssessmentResult, Question, Test } from "@/types/assessment";

const questionTexts: Record<string, string> = {
  q1: "I am enthusiastic about exploring new ideas and unconventional approaches at work.",
  q2: "I prefer proven methods over experimenting with new ways of doing things.",
  q3: "I enjoy learning completely new skills, even when they are outside my area.",
  q4: "Before delivering work, I review it carefully to avoid errors.",
  q5: "I find it difficult to stay organized and meet deadlines when I have multiple tasks.",
  q6: "My professional goals are clear, and I work systematically toward them.",
  q7: "I find it easy to start conversations with people I do not know.",
  q8: "I prefer working alone rather than in a team when I have an important task.",
  q9: "In team meetings, I usually take the initiative to propose ideas.",
  q10: "I care deeply about the well-being of my coworkers.",
  q11: "In conflict situations, I tend to give in to preserve team harmony.",
  q12: "I can be direct and firm in my opinions even when it causes discomfort.",
  q13: "Negative comments about my work affect me emotionally.",
  q14: "I stay calm and focused even under pressure or tight deadlines.",
  q15: "I often worry about things that could go wrong at work.",
  q16: "When your team faces a complex problem, what is your most natural reaction?",
  q17: "How do you prefer to receive feedback about your performance?",
  q18: "You have a week off with no work obligations. What do you do?",
  q19: "In a project with impossible deadlines, which best describes your behavior?",
  q20: "Which of these work environments best describes your ideal?",
  cq1: "What is the next number in the sequence? 2, 4, 8, 16, ___",
  cq2: "What is the next number in the sequence? 1, 4, 9, 16, ___",
  cq3: "Four workers complete a task in 12 days. How many days would six workers need?",
  cq4: "What is 15% of 240?",
  cq5: "What is the next number in the sequence? 100, 90, 81, 73, ___",
  cq6: "All managers are professionals. Carlos is a manager. What can we conclude?",
  cq7: "If it rains, the meeting is canceled. The meeting was NOT canceled. What can we conclude?",
  cq8: "Ana is taller than Maria. Maria is taller than Lucia. Who is the shortest?",
  cq9: "What is the next number in the sequence? 3, 6, 12, 24, ___",
  cq10: "If A is greater than B, and B is greater than C, what can we conclude?",
  cq11: "One out of every five items sold is returned. If 75 items were sold, how many were returned?",
  cq12: "Book is to Library as Painting is to...",
  cq13: "Doctor is to Patient as Teacher is to...",
  cq14: "Which of the following words does NOT belong in the group?",
  cq15: "Car is to Road as Boat is to...",
  cq16: "What is the antonym of the word 'Scarcity'?",
  cq17: "How many times does the letter 'E' appear in the phrase: EMPLOYEE BENEFITS PLAN?",
  cq18: "Which number does NOT belong in the sequence? 4, 9, 16, 25, 35, 49",
  cq19: "Which of the following sequences is DIFFERENT from the others? AAB, AAB, ABA, AAB",
  cq20: "Department A has 12 employees, B has 8, and C has 15. How many employees do the three departments have in total?",
};

const optionLabels: Record<string, string> = {
  q1_1: "Strongly disagree", q1_2: "Disagree", q1_3: "Neutral", q1_4: "Agree", q1_5: "Strongly agree",
  q2_1: "Strongly disagree", q2_2: "Disagree", q2_3: "Neutral", q2_4: "Agree", q2_5: "Strongly agree",
  q3_1: "Strongly disagree", q3_2: "Disagree", q3_3: "Neutral", q3_4: "Agree", q3_5: "Strongly agree",
  q4_1: "Strongly disagree", q4_2: "Disagree", q4_3: "Neutral", q4_4: "Agree", q4_5: "Strongly agree",
  q5_1: "Strongly disagree", q5_2: "Disagree", q5_3: "Neutral", q5_4: "Agree", q5_5: "Strongly agree",
  q6_1: "Strongly disagree", q6_2: "Disagree", q6_3: "Neutral", q6_4: "Agree", q6_5: "Strongly agree",
  q7_1: "Strongly disagree", q7_2: "Disagree", q7_3: "Neutral", q7_4: "Agree", q7_5: "Strongly agree",
  q8_1: "Strongly disagree", q8_2: "Disagree", q8_3: "Neutral", q8_4: "Agree", q8_5: "Strongly agree",
  q9_1: "Strongly disagree", q9_2: "Disagree", q9_3: "Neutral", q9_4: "Agree", q9_5: "Strongly agree",
  q10_1: "Strongly disagree", q10_2: "Disagree", q10_3: "Neutral", q10_4: "Agree", q10_5: "Strongly agree",
  q11_1: "Strongly disagree", q11_2: "Disagree", q11_3: "Neutral", q11_4: "Agree", q11_5: "Strongly agree",
  q12_1: "Strongly disagree", q12_2: "Disagree", q12_3: "Neutral", q12_4: "Agree", q12_5: "Strongly agree",
  q13_1: "Strongly disagree", q13_2: "Disagree", q13_3: "Neutral", q13_4: "Agree", q13_5: "Strongly agree",
  q14_1: "Strongly disagree", q14_2: "Disagree", q14_3: "Neutral", q14_4: "Agree", q14_5: "Strongly agree",
  q15_1: "Strongly disagree", q15_2: "Disagree", q15_3: "Neutral", q15_4: "Agree", q15_5: "Strongly agree",
  q16_1: "I propose creative ideas, even if they are risky", q16_2: "I analyze the problem in detail before acting",
  q16_3: "I seek team consensus so we can decide together", q16_4: "I take the initiative and lead the solution",
  q17_1: "Directly and without filters, even if it is tough", q17_2: "With concrete examples and an improvement plan",
  q17_3: "Privately and with emotional tact", q17_4: "In a group so the team can learn too",
  q18_1: "I learn something completely new that I have always wanted to learn", q18_2: "I organize pending personal projects",
  q18_3: "I socialize and connect with friends and family", q18_4: "I rest and recharge my energy alone",
  q19_1: "I get stressed but find creative solutions", q19_2: "I prioritize tasks and work methodically",
  q19_3: "I ask the team for help and delegate", q19_4: "I get blocked and find it hard to get started",
  q20_1: "A dynamic startup with lots of autonomy and constant change",
  q20_2: "A structured company with clear processes and stability",
  q20_3: "A small team with strong collaboration and closeness",
  q20_4: "Remote work with complete independence",
  cq3_1: "10 days", cq3_2: "8 days", cq3_3: "6 days", cq3_4: "9 days",
  cq1_1: "24", cq1_2: "32", cq1_3: "28", cq1_4: "20",
  cq2_1: "20", cq2_2: "22", cq2_3: "25", cq2_4: "18",
  cq4_1: "36", cq4_2: "24", cq4_3: "48", cq4_4: "30",
  cq5_1: "68", cq5_2: "64", cq5_3: "66", cq5_4: "70",
  cq9_1: "36", cq9_2: "30", cq9_3: "40", cq9_4: "48",
  cq11_1: "10", cq11_2: "15", cq11_3: "20", cq11_4: "25",
  cq6_1: "Carlos is a professional", cq6_2: "Carlos is not a professional", cq6_3: "All professionals are managers", cq6_4: "Nothing can be concluded",
  cq7_1: "It rained and the meeting took place", cq7_2: "It did not rain", cq7_3: "It always rains when there is a meeting", cq7_4: "Nothing can be concluded",
  cq8_1: "Ana", cq8_2: "Maria", cq8_3: "Lucia", cq8_4: "Cannot be determined",
  cq10_1: "A is greater than C", cq10_2: "C is greater than A", cq10_3: "B is the greatest of all", cq10_4: "Cannot be determined",
  cq12_1: "Painter", cq12_2: "Gallery", cq12_3: "Museum", cq12_4: "Frame",
  cq13_1: "School", cq13_2: "Subject", cq13_3: "Class", cq13_4: "Student",
  cq14_1: "Happy", cq14_2: "Sad", cq14_3: "Glad", cq14_4: "Joyful",
  cq15_1: "Sea", cq15_2: "Port", cq15_3: "Anchor", cq15_4: "Captain",
  cq16_1: "Poverty", cq16_2: "Lack", cq16_3: "Abundance", cq16_4: "Need",
  cq17_1: "4", cq17_2: "5", cq17_3: "3", cq17_4: "6",
  cq18_1: "9", cq18_2: "25", cq18_3: "35", cq18_4: "49",
  cq19_1: "The first — AAB", cq19_2: "The second — AAB", cq19_3: "The third — ABA", cq19_4: "The fourth — AAB",
  cq20_1: "33", cq20_2: "30", cq20_3: "32", cq20_4: "35",
};

function validateEnglishQuestionCoverage(test: Test) {
  const missingQuestions = test.questions
    .filter((question) => !(question.id in questionTexts))
    .map((question) => question.id);
  const missingOptions = test.questions.flatMap((question) =>
    question.options
      .filter((option) => !(option.id in optionLabels))
      .map((option) => option.id)
  );
  const invalidCorrectOptions = test.questions
    .filter((question) => question.correctOptionId)
    .filter((question) =>
      !question.options.some((option) => option.id === question.correctOptionId)
    )
    .map((question) => question.id);

  const cq17 = test.questions.find((question) => question.id === "cq17");
  const cq17Text = questionTexts.cq17;
  const cq17CorrectLabel = cq17
    ? optionLabels[cq17.correctOptionId ?? ""]
    : undefined;
  const cq17Phrase = cq17Text.split("phrase: ")[1] ?? "";
  const cq17LetterCount = (cq17Phrase.match(/E/g) ?? []).length;
  const invalidLetterQuestion =
    cq17 &&
    (cq17CorrectLabel !== String(cq17LetterCount) ||
      cq17CorrectLabel !== "5");

  if (
    missingQuestions.length ||
    missingOptions.length ||
    invalidCorrectOptions.length ||
    invalidLetterQuestion
  ) {
    throw new Error(
      `Incomplete English test localization. Questions: ${missingQuestions.join(", ")}; ` +
      `options: ${missingOptions.join(", ")}; correct options: ${invalidCorrectOptions.join(", ")}; ` +
      `letter-count question: ${invalidLetterQuestion ? "invalid" : "valid"}`
    );
  }
}

export function localizeQuestion(question: Question, language: string): Question {
  if (!language.startsWith("en")) return question;
  return {
    ...question,
    text: questionTexts[question.id] ?? question.text,
    options: question.options.map((option) => ({
      ...option,
      label: optionLabels[option.id] ?? option.label,
    })),
  };
}

export function localizeTest(test: Test, language: string): Test {
  if (!language.startsWith("en")) return test;
  validateEnglishQuestionCoverage(test);
  return {
    ...test,
    title: test.slug === "test-personalidad-laboral" ? "Work Personality Test" : "Cognitive Aptitude Test",
    description: test.slug === "test-personalidad-laboral"
      ? "Evaluate your five major personality dimensions in a professional context."
      : "Measure your logical, numerical and verbal reasoning with exercises designed for real professional environments.",
    questions: test.questions.map((question) => localizeQuestion(question, language)),
  };
}

const dimensionLabels: Record<string, [string, string]> = {
  openness: ["Openness", "Intellectual curiosity, creativity and openness to change."],
  conscientiousness: ["Conscientiousness", "Organization, discipline and goal orientation."],
  extraversion: ["Extraversion", "Sociability, assertiveness and energy in social settings."],
  agreeableness: ["Agreeableness", "Cooperation, empathy and consideration for others."],
  neuroticism: ["Emotional Stability", "Ability to manage stress and emotions under pressure."],
  logical: ["Logical Reasoning", "Ability to identify patterns and solve problems."],
  numerical: ["Numerical Aptitude", "Ability to work with data and calculations."],
  verbal: ["Verbal Reasoning", "Comprehension and analysis of textual information."],
  attention: ["Attention to Detail", "Accuracy and focus on specific tasks."],
};

const roleLabels: Record<string, string> = {
  "Asesor Comercial": "Sales Representative",
  "Coordinador de RRHH": "HR Coordinator",
  "Auxiliar Administrativo": "Administrative Assistant",
  "Analista Financiero": "Financial Analyst",
  "Jefe de Operaciones": "Operations Manager",
  "Líder de Proyecto": "Project Manager",
  "Atención al Cliente": "Customer Service",
  "Supervisor de Producción": "Production Supervisor",
  "Ejecutivo de Cuenta": "Account Executive",
  "Profesional de Marketing": "Marketing Specialist",
};

const spanishDimensionLabels: Record<string, string> = {
  Apertura: "Openness",
  Responsabilidad: "Conscientiousness",
  Extraversión: "Extraversion",
  Amabilidad: "Agreeableness",
  "Estabilidad Emocional": "Emotional Stability",
  "Razonamiento Lógico": "Logical Reasoning",
  "Aptitud Numérica": "Numerical Aptitude",
  "Razonamiento Verbal": "Verbal Reasoning",
  "Atención al Detalle": "Attention to Detail",
};

export function localizeResult(result: AssessmentResult, language: string): AssessmentResult {
  if (!language.startsWith("en")) return result;
  const missingDimensions = result.dimensions
    .filter((dimension) => !(dimension.dimension in dimensionLabels))
    .map((dimension) => dimension.dimension);
  const missingRoles = result.roleCompatibility
    .filter((role) => !(role.role in roleLabels))
    .map((role) => role.role);
  if (missingDimensions.length || missingRoles.length) {
    throw new Error(
      `Incomplete English result localization. Dimensions: ${missingDimensions.join(", ")}; ` +
      `roles: ${missingRoles.join(", ")}`
    );
  }
  const dimensions = result.dimensions.map((dimension) => {
    const meta = dimensionLabels[dimension.dimension];
    return meta ? { ...dimension, label: meta[0], description: meta[1] } : dimension;
  });
  const top = dimensions[0];
  return {
    ...result,
    dimensions,
    topStrengths: result.topStrengths.map((label) => {
      return spanishDimensionLabels[label] ?? label;
    }),
    areasToGrow: result.areasToGrow.map((label) => {
      return spanishDimensionLabels[label] ?? label;
    }),
    roleCompatibility: result.roleCompatibility.map((role) => ({
      ...role,
      role: roleLabels[role.role] ?? role.role,
    })),
    overallProfile: top
      ? `A profile with high ${top.label.toLowerCase()} — oriented toward ${
          top.percentage > 75 ? "exceptional results" : "strong performance"
        } in professional environments.`
      : "A balanced profile with distributed strengths.",
  };
}
