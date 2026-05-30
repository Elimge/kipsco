"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { personalityTest } from "@/data/personality-test";
import { useAssessment } from "@/hooks/useAssessment";
import { calculateScores } from "@/lib/scoring";
import { QuestionCard } from "@/components/question-card";
import { ProgressHeader } from "@/components/progress-header";
import { Test } from "@/types/assessment";

const TESTS: Record<string, Test> = {
  "test-personalidad-laboral": personalityTest,
};

export default function TestPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const test = TESTS[slug];

  const {
    currentQuestion,
    currentIndex,
    answers,
    progress,
    isLastQuestion,
    isCompleted,
    currentAnswer,
    answeredCount,
    selectAnswer,
    goNext,
    goPrev,
  } = useAssessment(test?.questions ?? []);

  useEffect(() => {
    if (isCompleted) {
      const result = calculateScores(test.questions, answers);
      localStorage.setItem("kipsco_result", JSON.stringify(result));
      router.push("/results");
    }
  }, [isCompleted, answers, test, router]);

  if (!test) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Test no encontrado.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <ProgressHeader
        title={test.title}
        currentIndex={currentIndex}
        total={test.questions.length}
        progress={progress}
        answeredCount={answeredCount}
      />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <QuestionCard
          question={currentQuestion}
          selectedOptionId={currentAnswer}
          onSelect={(optionId) => selectAnswer(currentQuestion.id, optionId)}
          onNext={goNext}
          onPrev={goPrev}
          isFirst={currentIndex === 0}
          isLast={isLastQuestion}
        />
      </div>
    </main>
  );
}