"use client";

import { useEffect } from "react";
import { Candidate } from "@/types/assessment";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  candidates: Candidate[];
  onClose: () => void;
}

const ALL_DIMENSIONS = [
  "openness",
  "conscientiousness",
  "extraversion",
  "agreeableness",
  "neuroticism",
  "logical",
  "numerical",
  "verbal",
  "attention",
] as const;

const DIMENSION_LABELS: Record<string, string> = {
  openness: "Apertura",
  conscientiousness: "Responsabilidad",
  extraversion: "Extraversión",
  agreeableness: "Amabilidad",
  neuroticism: "Estabilidad Emocional",
  logical: "Razonamiento Lógico",
  numerical: "Aptitud Numérica",
  verbal: "Razonamiento Verbal",
  attention: "Atención al Detalle",
};

const COLORS = [
  "text-blue-600",
  "text-purple-600",
  "text-green-600",
  "text-amber-600",
];

const BAR_COLORS = [
  "bg-blue-500",
  "bg-purple-500",
  "bg-green-500",
  "bg-amber-500",
];

export function CandidateComparison({ candidates, onClose }: Props) {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  function getScore(candidate: Candidate, dimension: string): number {
    return (
      candidate.result.dimensions.find((d) => d.dimension === dimension)
        ?.percentage ?? 0
    );
  }

  const availableDims = ALL_DIMENSIONS.filter((dim) =>
    candidates.some((c) => getScore(c, dim) > 0)
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-start justify-center overflow-y-auto py-8 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-background text-foreground rounded-2xl border border-border shadow-[0_25px_60px_rgba(0,0,0,0.3)] w-full max-w-4xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="text-lg font-bold">Comparación de candidatos</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-8">
          {/* Candidate headers */}
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: `200px repeat(${candidates.length}, 1fr)`,
            }}
          >
            <div />
            {candidates.map((c, i) => (
              <div key={c.id} className="text-center">
                <div
                  className={`w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 text-sm font-bold ${COLORS[i]}`}
                >
                  {c.name.charAt(0).toUpperCase()}
                </div>
                <p className="text-sm font-semibold">{c.name}</p>
                <p className={`text-xs font-bold ${COLORS[i]}`}>
                  {c.result.dimensions[0]?.label ?? ""}
                </p>
              </div>
            ))}
          </div>

          {/* Dimensions comparison */}
          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
              Dimensiones
            </h3>
            {availableDims.map((dim) => {
              const scores = candidates.map((c) => getScore(c, dim));
              const maxScore = Math.max(...scores);

              return (
                <div
                  key={dim}
                  className="grid gap-4 items-center"
                  style={{
                    gridTemplateColumns: `200px repeat(${candidates.length}, 1fr)`,
                  }}
                >
                  <span className="text-sm font-medium">
                    {DIMENSION_LABELS[dim]}
                  </span>
                  {candidates.map((c, i) => {
                    const score = getScore(c, dim);
                    const isTop = score === maxScore && score > 0;
                    return (
                      <div key={c.id}>
                        <div className="flex justify-between mb-1">
                          <span
                            className={`text-xs font-bold ${
                              isTop ? COLORS[i] : "text-muted-foreground"
                            }`}
                          >
                            {score}%
                            {isTop && " ★"}
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all ${
                              isTop ? BAR_COLORS[i] : "bg-muted-foreground/30"
                            }`}
                            style={{ width: `${score}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/* Role compatibility */}
          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
              Compatibilidad laboral — Top 5 roles
            </h3>
            {candidates[0]?.result.roleCompatibility
              .slice(0, 5)
              .map((role) => {
                const scores = candidates.map(
                  (c) =>
                    c.result.roleCompatibility.find(
                      (r) => r.role === role.role
                    )?.percentage ?? 0
                );
                const maxScore = Math.max(...scores);

                return (
                  <div
                    key={role.role}
                    className="grid gap-4 items-center"
                    style={{
                      gridTemplateColumns: `200px repeat(${candidates.length}, 1fr)`,
                    }}
                  >
                    <span className="text-sm font-medium">{role.role}</span>
                    {candidates.map((c, i) => {
                      const score =
                        c.result.roleCompatibility.find(
                          (r) => r.role === role.role
                        )?.percentage ?? 0;
                      const isTop = score === maxScore && score > 0;
                      return (
                        <div key={c.id}>
                          <div className="flex justify-between mb-1">
                            <span
                              className={`text-xs font-bold ${
                                isTop ? COLORS[i] : "text-muted-foreground"
                              }`}
                            >
                              {score}%
                              {isTop && " ★"}
                            </span>
                          </div>
                          <Progress value={score} className="h-2" />
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </div>

          {/* Winner summary */}
          <div className="bg-muted/40 rounded-xl p-5">
            <h3 className="text-sm font-bold mb-3">Resumen</h3>
            <div className="flex flex-col gap-2">
              {candidates.map((c, i) => {
                const wins = availableDims.filter((dim) => {
                  const scores = candidates.map((cc) => getScore(cc, dim));
                  return getScore(c, dim) === Math.max(...scores);
                }).length;
                return (
                  <div key={c.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm font-semibold ${COLORS[i]}`}
                      >
                        {c.name}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Lidera en{" "}
                      <span className={`font-bold ${COLORS[i]}`}>
                        {wins}
                      </span>{" "}
                      de {availableDims.length} dimensiones
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <Button variant="outline" onClick={onClose}>
            Cerrar comparación
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}