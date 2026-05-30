"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Question } from "@/types/assessment";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  selectedOptionId?: string;
  onSelect: (optionId: string) => void;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export function QuestionCard({
  question,
  selectedOptionId,
  onSelect,
  onNext,
  onPrev,
  isFirst,
  isLast,
}: QuestionCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col gap-6"
      >
        {/* Question text */}
        <div className="bg-card rounded-2xl border border-border p-6">
          <p className="text-lg font-medium leading-relaxed">{question.text}</p>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {question.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            return (
              <button
                key={option.id}
                onClick={() => onSelect(option.id)}
                className={cn(
                  "w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-150 flex items-center justify-between gap-4 cursor-pointer",
                  isSelected
                    ? "border-primary bg-primary/5 text-foreground"
                    : "border-border bg-card hover:border-primary/50 hover:bg-muted/50"
                )}
              >
                <span className="text-sm leading-relaxed">{option.label}</span>
                {isSelected && (
                  <CheckCircle2 size={18} className="text-primary shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-2">
          <Button
            variant="ghost"
            onClick={onPrev}
            disabled={isFirst}
            className="gap-2"
          >
            <ArrowLeft size={16} />
            Anterior
          </Button>
          <Button
            onClick={onNext}
            disabled={!selectedOptionId}
            className="gap-2"
          >
            {isLast ? "Ver resultados" : "Siguiente"}
            <ArrowRight size={16} />
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}