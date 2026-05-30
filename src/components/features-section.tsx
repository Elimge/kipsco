"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BarChart3, FileText, Users, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Tests Psicométricos",
    description:
      "Evalúa personalidad laboral, estilo de trabajo y compatibilidad de equipo con modelos basados en Big Five y DISC.",
  },
  {
    icon: Zap,
    title: "Aptitud Cognitiva",
    description:
      "Mide razonamiento lógico, numérico y verbal con ejercicios diseñados para entornos profesionales reales.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Visual",
    description:
      "Resultados claros con gráficos de radar, barras de progreso y matrices de fortalezas listas para compartir.",
  },
  {
    icon: FileText,
    title: "Exportación PDF",
    description:
      "Genera reportes profesionales en PDF para compartir con reclutadores, managers o guardar en tu portfolio.",
  },
  {
    icon: Users,
    title: "Perfiles Laborales",
    description:
      "Compatibilidad automática con más de 20 perfiles profesionales: Developer, PM, Designer, Líder y más.",
  },
  {
    icon: Shield,
    title: "100% Privado",
    description:
      "Todo el procesamiento ocurre en tu navegador. Ningún dato personal se envía a servidores externos.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Todo lo que necesitas para evaluar talento
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Una plataforma completa que combina ciencia del comportamiento
            con experiencia de usuario moderna.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <feature.icon size={20} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}