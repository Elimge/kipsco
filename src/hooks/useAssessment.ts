"use client";

import { useState } from "react";
import { Question } from "@/types/assessment";

export function useAssessment(questions: Question[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = Math.round((Object.keys(answers).length / questions.length) * 100);
  const isLastQuestion = currentIndex === questions.length - 1;
  const currentAnswer = answers[currentQuestion?.id];
  const answeredCount = Object.keys(answers).length;

  function selectAnswer(questionId: string, optionId: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  }

  function goNext() {
    if (isLastQuestion) {
      setIsCompleted(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }

  function goPrev() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  function goToQuestion(index: number) {
    if (index >= 0 && index < questions.length) {
      setCurrentIndex(index);
    }
  }

  return {
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
    goToQuestion,
  };
}