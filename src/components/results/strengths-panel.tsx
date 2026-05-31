"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AssessmentResult } from "@/types/assessment";
import { TrendingUp, TrendingDown } from "lucide-react";

interface Props {
  result: AssessmentResult;
}

export function StrengthsPanel({ result }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-lg">Fortalezas y áreas de mejora</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          {/* Strengths */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp size={16} className="text-green-600" />
              <span className="text-sm font-medium text-green-700">
                Principales fortalezas
              </span>
            </div>
            {result.topStrengths.length > 0 ? (
              <ul className="flex flex-col gap-2">
                {result.topStrengths.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-2 text-sm bg-green-50 text-green-800 rounded-lg px-3 py-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">
                Perfil equilibrado sin fortalezas destacadas.
              </p>
            )}
          </div>

          {/* Areas to grow */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingDown size={16} className="text-amber-600" />
              <span className="text-sm font-medium text-amber-700">
                Áreas de desarrollo
              </span>
            </div>
            {result.areasToGrow.length > 0 ? (
              <ul className="flex flex-col gap-2">
                {result.areasToGrow.map((a) => (
                  <li
                    key={a}
                    className="flex items-center gap-2 text-sm bg-amber-50 text-amber-800 rounded-lg px-3 py-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">
                Sin áreas críticas de mejora identificadas.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}