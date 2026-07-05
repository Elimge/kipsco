"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "¿Qué es una prueba psicométrica?",
    answer:
      "Una prueba psicométrica es una evaluación científica que mide características psicológicas como personalidad, aptitudes cognitivas y comportamiento laboral. Son ampliamente usadas en procesos de reclutamiento y desarrollo de talento.",
  },
  {
    question: "¿Cuánto tiempo toma el test de personalidad?",
    answer:
      "El test de personalidad laboral de Kipsco toma entre 10 y 15 minutos. Está diseñado para ser ágil sin sacrificar profundidad en los resultados.",
  },
  {
    question: "¿Mis datos son privados?",
    answer:
      "Sí, completamente. Todo el procesamiento ocurre en tu navegador. Ningún dato personal se envía a servidores externos. Kipsco es 100% privado por diseño.",
  },
  {
    question: "¿Puedo descargar mis resultados?",
    answer:
      "Sí. Al finalizar obtienes un reporte profesional en PDF con tus dimensiones de personalidad, fortalezas, áreas de mejora y compatibilidad con perfiles laborales.",
  },
  {
    question: "¿Para quién está diseñado Kipsco?",
    answer:
      "Kipsco está diseñado para reclutadores, equipos de RRHH, psicólogos organizacionales y profesionales que quieren conocer su perfil laboral. También es útil para candidatos que quieren prepararse para procesos de selección.",
  },
  {
    question: "¿Los tests tienen validez científica?",
    answer:
      "Los tests de Kipsco están inspirados en modelos ampliamente validados como el Big Five (OCEAN), adaptados al contexto laboral colombiano. Son herramientas orientativas de alta calidad diseñadas para apoyar decisiones, no reemplazar el juicio profesional.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-sm sm:text-base">{question}</span>
        {isOpen ? (
          <Minus size={16} className="text-muted-foreground shrink-0" />
        ) : (
          <Plus size={16} className="text-muted-foreground shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground text-sm leading-relaxed pb-5">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-muted-foreground">
            Todo lo que necesitas saber sobre Kipsco y nuestras evaluaciones.
          </p>
        </div>
        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}