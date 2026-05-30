export type QuestionType = "likert" | "choice" | "sequence";

export type Dimension =
  | "openness"
  | "conscientiousness"
  | "extraversion"
  | "agreeableness"
  | "neuroticism"
  | "logical"
  | "numerical"
  | "verbal"
  | "attention";

export interface Option {
  id: string;
  label: string;
  scores: Partial<Record<Dimension, number>>;
}

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  dimension?: Dimension;
  options: Option[];
}

export interface Test {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: string;
  questionCount: number;
  category: "personality" | "cognitive" | "professional";
  questions: Question[];
}

export interface DimensionScore {
  dimension: Dimension;
  score: number;
  max: number;
  percentage: number;
  label: string;
  description: string;
}

export interface RoleCompatibility {
  role: string;
  percentage: number;
  icon: string;
}

export interface AssessmentResult {
  testId: string;
  completedAt: string;
  dimensions: DimensionScore[];
  topStrengths: string[];
  areasToGrow: string[];
  roleCompatibility: RoleCompatibility[];
  overallProfile: string;
}