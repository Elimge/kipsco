"use client";

import { useState } from "react";
import { useCandidates } from "@/hooks/useCandidates";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Plus,
  Trash2,
  ArrowLeft,
  BarChart3,
  UserX,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import { AddCandidateModal } from "@/components/recruiter/add-candidate-modal";
import { CandidateComparison } from "@/components/recruiter/candidate-comparison";
import { Candidate } from "@/types/assessment";

export default function RecruiterPage() {
  const { candidates, addCandidate, removeCandidate, clearAll } = useCandidates();
  const [showModal, setShowModal] = useState(false);
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  function toggleSelect(id: string) {
    setSelectedCandidates((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  }

  const selectedData = candidates.filter((c) =>
    selectedCandidates.includes(c.id)
  );

  return (
    <main className="min-h-screen bg-muted/20">
      {/* Nav */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Inicio
          </Link>
          <div className="flex items-center gap-2">
            <Users size={16} className="text-muted-foreground" />
            <span className="text-sm font-medium">Recruiter Mode</span>
            <Badge variant="secondary" className="text-xs">Beta</Badge>
          </div>
          <Button size="sm" className="gap-2" onClick={() => setShowModal(true)}>
            <Plus size={14} />
            Agregar candidato
          </Button>
          <p className="text-xs text-muted-foreground max-w-xs text-center mt-3">
            Pide al candidato que complete un test en Kipsco y comparta su URL de perfil contigo.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col gap-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-2xl font-bold tracking-tight mb-1">
            Panel de candidatos
          </h1>
          <p className="text-muted-foreground text-sm">
            Agrega candidatos pegando su URL de perfil Kipsco. Compáralos lado a lado.
          </p>
        </motion.div>

        {/* Stats */}
        {candidates.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="grid grid-cols-3 gap-4"
          >
            {[
              {
                label: "Candidatos",
                value: candidates.length,
                icon: Users,
              },
              {
                label: "Seleccionados",
                value: selectedCandidates.length,
                icon: BarChart3,
              },
              {
                label: "Mejor perfil",
                value: candidates.reduce((best, c) => {
                  const top = c.result.roleCompatibility[0]?.percentage ?? 0;
                  return top > best ? top : best;
                }, 0) + "%",
                icon: Trophy,
              },
            ].map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="bg-background rounded-xl border border-border p-4 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-xl font-bold">{value}</p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Actions bar */}
        {selectedCandidates.length >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-primary text-primary-foreground rounded-xl px-5 py-3 flex items-center justify-between"
          >
            <p className="text-sm font-medium">
              {selectedCandidates.length} candidatos seleccionados
            </p>
            <Button
              size="sm"
              variant="secondary"
              className="gap-2"
              onClick={() => setShowComparison(true)}
            >
              <BarChart3 size={14} />
              Comparar
            </Button>
          </motion.div>
        )}

        {/* Candidates list */}
        {candidates.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-24 gap-4"
          >
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
              <UserX size={28} className="text-muted-foreground" />
            </div>
            <div className="text-center">
              <p className="font-medium mb-1">Sin candidatos aún</p>
              <p className="text-sm text-muted-foreground max-w-xs">
                Agrega candidatos pegando la URL de su perfil Kipsco.
              </p>
            </div>
            <Button className="gap-2 mt-2" onClick={() => setShowModal(true)}>
              <Plus size={16} />
              Agregar primer candidato
            </Button>
          </motion.div>
        ) : (
          <div className="flex flex-col gap-3">
            <AnimatePresence>
              {candidates.map((candidate, index) => (
                <CandidateCard
                  key={candidate.id}
                  candidate={candidate}
                  index={index}
                  isSelected={selectedCandidates.includes(candidate.id)}
                  onToggle={() => toggleSelect(candidate.id)}
                  onRemove={() => removeCandidate(candidate.id)}
                />
              ))}
            </AnimatePresence>

            {candidates.length > 1 && (
              <div className="flex justify-end pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 text-muted-foreground hover:text-destructive"
                  onClick={clearAll}
                >
                  <Trash2 size={14} />
                  Limpiar todos
                </Button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal */}
      <AddCandidateModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onAdd={addCandidate}
      />

      {/* Comparison */}
      {showComparison && (
        <CandidateComparison
          candidates={selectedData}
          onClose={() => setShowComparison(false)}
        />
      )}
    </main>
  );
}

function CandidateCard({
  candidate,
  index,
  isSelected,
  onToggle,
  onRemove,
}: {
  candidate: Candidate;
  index: number;
  isSelected: boolean;
  onToggle: () => void;
  onRemove: () => void;
}) {
  const topRole = candidate.result.roleCompatibility[0];
  const topDim = candidate.result.dimensions[0];
  const date = new Date(candidate.addedAt).toLocaleDateString("es-CO", {
    month: "short",
    day: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`bg-background rounded-xl border-2 transition-all ${
        isSelected ? "border-primary" : "border-border"
      }`}
    >
      <div className="p-5 flex items-start gap-4">
        {/* Checkbox */}
        <button
          onClick={onToggle}
          className={`w-5 h-5 rounded border-2 shrink-0 mt-0.5 flex items-center justify-center transition-colors cursor-pointer ${
            isSelected
              ? "bg-primary border-primary text-primary-foreground"
              : "border-border hover:border-primary"
          }`}
        >
          {isSelected && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path
                d="M1 4L3.5 6.5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>

        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">
          {candidate.name.charAt(0).toUpperCase()}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-sm">{candidate.name}</h3>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>

          {topDim && (
            <p className="text-xs text-muted-foreground mb-3">
              Alta {topDim.label} ({topDim.percentage}%)
            </p>
          )}

          {/* Top dimensions */}
          <div className="flex flex-col gap-1.5">
            {candidate.result.dimensions.slice(0, 3).map((dim) => (
              <div key={dim.dimension} className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground w-24 shrink-0">
                  {dim.label}
                </span>
                <Progress value={dim.percentage} className="h-1.5 flex-1" />
                <span className="text-xs font-medium w-8 text-right">
                  {dim.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Role + actions */}
        <div className="flex flex-col items-end gap-3 shrink-0">
          {topRole && (
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Mejor rol</p>
              <p className="text-xs font-semibold">{topRole.role}</p>
              <p
                className={`text-sm font-bold ${
                  topRole.percentage >= 75
                    ? "text-green-600"
                    : "text-amber-600"
                }`}
              >
                {topRole.percentage}%
              </p>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-destructive h-7 w-7 p-0"
            onClick={onRemove}
          >
            <Trash2 size={14} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}