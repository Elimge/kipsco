import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, ArrowRight, Brain, Zap } from "lucide-react";
import Link from "next/link";

const tests = [
  {
    id: "test-personalidad-laboral",
    title: "Test de Personalidad Laboral",
    description:
      "Evalúa tus cinco grandes dimensiones de personalidad en el contexto profesional. Descubre tu estilo de trabajo, fortalezas y compatibilidad con roles laborales.",
    duration: "10-15 min",
    questions: 20,
    category: "Personalidad",
    icon: Brain,
    available: true,
  },
  {
    id: "test-aptitud-cognitiva",
    title: "Test de Aptitud Cognitiva",
    description:
      "Mide tu razonamiento lógico, numérico y verbal con ejercicios diseñados para entornos profesionales reales.",
    duration: "15-20 min",
    questions: 25,
    category: "Cognitivo",
    icon: Zap,
    available: false,
  },
];

export default function TestsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block"
          >
            ← Volver al inicio
          </Link>
          <h1 className="text-3xl font-bold tracking-tight mb-3">
            Evaluaciones disponibles
          </h1>
          <p className="text-muted-foreground text-lg">
            Selecciona la evaluación que deseas realizar.
          </p>
        </div>

        {/* Tests grid */}
        <div className="flex flex-col gap-4">
          {tests.map((test) => (
            <Card
              key={test.id}
              className={`transition-shadow ${
                test.available ? "hover:shadow-md" : "opacity-60"
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <test.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-lg">{test.title}</CardTitle>
                        {!test.available && (
                          <Badge variant="secondary">Próximamente</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {test.duration}
                        </span>
                        <span>{test.questions} preguntas</span>
                        <Badge variant="outline" className="text-xs">
                          {test.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {test.description}
                </p>
                {test.available ? (
                  <Link href={`/tests/${test.id}`}>
                    <Button className="gap-2">
                      Comenzar test
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                ) : (
                  <Button disabled variant="outline">
                    No disponible aún
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}