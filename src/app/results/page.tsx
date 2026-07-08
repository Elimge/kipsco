"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AssessmentResult } from "@/types/assessment";
import { DimensionsChart } from "@/components/results/dimensions-chart";
import { StrengthsPanel } from "@/components/results/strengths-panel";
import { RoleCompatibilityPanel } from "@/components/results/role-compatibility-panel";
import { ResultsHeader } from "@/components/results/results-header";
import { OverallProfile } from "@/components/results/overall-profile";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw } from "lucide-react";
import Link from "next/link";
import { PDFReport } from "@/components/results/pdf-report";
import { exportResultsToPDF } from "@/services/pdf-export";
import { Download } from "lucide-react";
import { User } from "lucide-react";

export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  async function handleExport() {
    setIsExporting(true);
    await exportResultsToPDF("pdf-report", "kipsco-reporte-personalidad.pdf");
    setIsExporting(false);
  }

  useEffect(() => {
    const stored = localStorage.getItem("kipsco_result");
    if (!stored) {
      router.push("/tests");
      return;
    }
    setResult(JSON.parse(stored));
  }, [router]);

  if (!result) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Cargando resultados...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-muted/20">
      {/* Top nav */}
      <div className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/tests"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Volver a tests
          </Link>
          <span className="text-sm font-medium">
            Resultados — Test de Personalidad Laboral
          </span>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground"
              onClick={() => {
                localStorage.removeItem("kipsco_result");
                router.push("/tests");
              }}
            >
              <RotateCcw size={14} />
              Repetir
            </Button>
            <Link href="/profile">
              <Button variant="outline" size="sm" className="gap-2">
                <User size={14} />
                Ver perfil
              </Button>
            </Link>
            <Button
              size="sm"
              className="gap-2"
              onClick={handleExport}
              disabled={isExporting}
            >
              <Download size={14} />
              {isExporting ? "Generando..." : "Descargar PDF"}
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col gap-8">
        <ResultsHeader result={result} />
        <OverallProfile result={result} />
        <DimensionsChart result={result} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StrengthsPanel result={result} />
          <RoleCompatibilityPanel result={result} />
        </div>
      </div>

      {/* PDF oculto para exportación */}
      <div className="absolute -left-[9999px] -top-[9999px] overflow-hidden">
        <PDFReport result={result} />
      </div>
    </main>
  );
}
