"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AssessmentResult } from "@/types/assessment";
import { decodeResult, buildShareUrl } from "@/utils/share";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Share2,
  Check,
  TrendingUp,
  TrendingDown,
  Briefcase,
  Download,
} from "lucide-react";
import Link from "next/link";
import { exportResultsToPDF } from "@/services/pdf-export";
import { PDFReport } from "@/components/results/pdf-report";

export default function ProfilePage() {
  const router = useRouter();
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    // Primero intenta leer del hash (URL compartida)
    const hash = window.location.hash;
    if (hash.startsWith("#data=")) {
      const encoded = hash.replace("#data=", "");
      const decoded = decodeResult(encoded);
      if (decoded) {
        setResult(decoded);
        return;
      }
    }
    // Si no hay hash, lee de localStorage
    const stored = localStorage.getItem("kipsco_result");
    if (!stored) {
      router.push("/tests");
      return;
    }
    setResult(JSON.parse(stored));
  }, [router]);

  async function handleShare() {
    if (!result) return;
    const url = buildShareUrl(result);
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  async function handleExport() {
    setIsExporting(true);
    await exportResultsToPDF("pdf-report", "kipsco-perfil-profesional.pdf");
    setIsExporting(false);
  }

  if (!result) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Cargando perfil...</p>
      </main>
    );
  }

  const date = new Date(result.completedAt).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const topRole = result.roleCompatibility[0];
  const topDimension = result.dimensions[0];

  return (
    <main className="min-h-screen bg-muted/20">
      {/* Nav */}
      <div className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/results"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Volver a resultados
          </Link>
          <span className="text-sm font-medium">Perfil Profesional</span>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={handleShare}
            >
              {copied ? (
                <>
                  <Check size={14} className="text-green-600" />
                  ¡Copiado!
                </>
              ) : (
                <>
                  <Share2 size={14} />
                  Compartir
                </>
              )}
            </Button>
            <Button
              size="sm"
              className="gap-2"
              onClick={handleExport}
              disabled={isExporting}
            >
              <Download size={14} />
              {isExporting ? "Generando..." : "PDF"}
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 flex flex-col gap-6">

        {/* Hero card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-zinc-900 text-white rounded-2xl p-8"
        >
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <p className="text-zinc-400 text-sm mb-1">Perfil Psicométrico Laboral</p>
              <h1 className="text-2xl font-bold mb-2">
                Alta {topDimension?.label ?? "Personalidad"}
              </h1>
              <p className="text-zinc-300 text-sm max-w-md">
                {result.overallProfile}
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-zinc-500 text-xs">Evaluado el</p>
              <p className="text-zinc-300 text-xs font-medium">{date}</p>
            </div>
          </div>

          {/* Top strengths badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {result.topStrengths.map((s) => (
              <Badge
                key={s}
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                {s}
              </Badge>
            ))}
            {result.topStrengths.length === 0 && (
              <Badge className="bg-white/10 text-white border-white/20">
                Perfil equilibrado
              </Badge>
            )}
          </div>

          {/* Top role */}
          {topRole && (
            <div className="bg-white/10 rounded-xl px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Briefcase size={18} className="text-zinc-300" />
                <div>
                  <p className="text-xs text-zinc-400">Mejor compatibilidad</p>
                  <p className="text-sm font-semibold">{topRole.role}</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-green-400">
                {topRole.percentage}%
              </span>
            </div>
          )}
        </motion.div>

        {/* Dimensions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-background rounded-2xl border border-border p-6"
        >
          <h2 className="text-lg font-bold mb-5">Dimensiones de personalidad</h2>
          <div className="flex flex-col gap-5">
            {result.dimensions.map((dim, index) => (
              <motion.div
                key={dim.dimension}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
              >
                <div className="flex justify-between items-center mb-1.5">
                  <div>
                    <span className="text-sm font-semibold">{dim.label}</span>
                    <span className="text-xs text-muted-foreground ml-2">
                      {dim.description}
                    </span>
                  </div>
                  <span
                    className={`text-sm font-bold ${
                      dim.percentage >= 70
                        ? "text-green-600"
                        : dim.percentage >= 45
                        ? "text-foreground"
                        : "text-amber-600"
                    }`}
                  >
                    {dim.percentage}%
                  </span>
                </div>
                <Progress value={dim.percentage} className="h-2" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strengths and areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-background rounded-2xl border border-border p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={16} className="text-green-600" />
              <h2 className="text-sm font-bold text-green-700">Fortalezas</h2>
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
              <p className="text-sm text-muted-foreground">Perfil equilibrado.</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="bg-background rounded-2xl border border-border p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <TrendingDown size={16} className="text-amber-600" />
              <h2 className="text-sm font-bold text-amber-700">Áreas de desarrollo</h2>
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
              <p className="text-sm text-muted-foreground">Sin áreas críticas.</p>
            )}
          </motion.div>
        </div>

        {/* Role compatibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-background rounded-2xl border border-border p-6"
        >
          <h2 className="text-lg font-bold mb-5">
            Compatibilidad con perfiles laborales
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {result.roleCompatibility.map((role, index) => (
              <motion.div
                key={role.role}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.04 }}
                className="flex items-center justify-between bg-muted/40 rounded-xl px-4 py-3"
              >
                <span className="text-sm font-medium">{role.role}</span>
                <span
                  className={`text-sm font-bold ${
                    role.percentage >= 75
                      ? "text-green-600"
                      : role.percentage >= 55
                      ? "text-amber-600"
                      : "text-muted-foreground"
                  }`}
                >
                  {role.percentage}%
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Powered by */}
        <div className="text-center py-4">
          <p className="text-xs text-muted-foreground">
            Perfil generado por{" "}
            <Link href="/" className="font-semibold hover:text-foreground transition-colors">
              Kipsco
            </Link>{" "}
            — Plataforma de evaluación de talento
          </p>
        </div>
      </div>

      {/* PDF oculto */}
      <div className="absolute -left-[9999px] -top-[9999px] overflow-hidden">
        <PDFReport result={result} />
      </div>
    </main>
  );
}