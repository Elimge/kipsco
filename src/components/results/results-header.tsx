"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { AssessmentResult } from "@/types/assessment";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Props {
  result: AssessmentResult;
}

export function ResultsHeader({ result }: Props) {
  const { t, i18n } = useTranslation();
  const date = new Date(result.completedAt).toLocaleDateString(i18n.language, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-center"
    >
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
      </div>
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        {t("results.title")}
      </h1>
      <p className="text-muted-foreground mb-4">
        {t("results.completedOn")} {date}
      </p>
      <div className="flex justify-center gap-2 flex-wrap">
        {result.topStrengths.map((s) => (
          <Badge key={s} variant="secondary">
            {s}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}