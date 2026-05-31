"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AssessmentResult } from "@/types/assessment";
import { Sparkles } from "lucide-react";

interface Props {
  result: AssessmentResult;
}

export function OverallProfile({ result }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <Card className="bg-zinc-900 text-white border-0">
        <CardContent className="py-6 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
            <Sparkles size={20} className="text-white" />
          </div>
          <div>
            <p className="text-xs text-white/60 mb-1 uppercase tracking-wider">
              Perfil general
            </p>
            <p className="text-base font-medium leading-relaxed">
              {result.overallProfile}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}