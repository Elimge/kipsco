"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ClipboardList, BarChart3, Download } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Elige tu evaluación",
    description:
      "Selecciona entre tests de personalidad, aptitud cognitiva o perfil profesional según tu objetivo.",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Responde y obtén resultados",
    description:
      "Completa la evaluación a tu ritmo. El análisis ocurre automáticamente en tiempo real.",
  },
  {
    number: "03",
    icon: Download,
    title: "Descarga tu reporte",
    description:
      "Obtén un PDF profesional con tus dimensiones, fortalezas y compatibilidad con perfiles laborales.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4">Proceso simple</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Tres pasos para conocer tu perfil
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sin registros obligatorios. Sin configuración compleja.
            Resultados en minutos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="flex flex-col items-center text-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <step.icon size={28} className="text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 text-xs font-bold bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}