"use client";

import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, ArrowRight, Brain, Zap } from "lucide-react";
import Link from "next/link";

export function TestsContent() {
  const { t } = useTranslation();

  const tests = [
    {
      id: "test-personalidad-laboral",
      title: t("tests.personalityTitle") || "Test de Personalidad Laboral",
      description: t("tests.personalityDesc") || "Evalúa tus cinco grandes dimensiones de personalidad en el contexto profesional.",
      duration: "10-15",
      questions: 20,
      category: t("tests.personality"),
      icon: Brain,
      available: true,
    },
    {
      id: "test-aptitud-cognitiva",
      title: t("tests.cognitiveTitle") || "Test de Aptitud Cognitiva",
      description: t("tests.cognitiveDesc") || "Mide tu razonamiento lógico, numérico y verbal.",
      duration: "15-20",
      questions: 20,
      category: t("tests.cognitive"),
      icon: Zap,
      available: true,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block">
            {t("tests.back")}
          </Link>
          <h1 className="text-3xl font-bold tracking-tight mb-3">{t("tests.title")}</h1>
          <p className="text-muted-foreground text-lg">{t("tests.subtitle")}</p>
        </div>
        <div className="flex flex-col gap-4">
          {tests.map((test) => (
            <Card key={test.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <test.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-1">{test.title}</CardTitle>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {test.duration} min
                        </span>
                        <span>{test.questions} {t("tests.questions") || "preguntas"}</span>
                        <Badge variant="outline" className="text-xs">{test.category}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{test.description}</p>
                <Link href={`/tests/${test.id}`}>
                  <Button className="gap-2 cursor-pointer">
                    {t("tests.start")}
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}