"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Building2 } from "lucide-react";

const contactOptions = [
  {
    icon: Building2,
    title: "Implementación empresarial",
    description:
      "¿Tu empresa necesita una plataforma de evaluación de talento personalizada? Puedo construirla.",
    cta: "Escribir al developer",
    href: "mailto:elimge@outlook.com?subject=Implementación empresarial Kipsco",
  },
  {
    icon: MessageSquare,
    title: "Freelance / Consultoría",
    description:
      "¿Tienes un proyecto de software o data engineering? Hablemos sobre cómo puedo ayudarte.",
    cta: "Contactar",
    href: "mailto:elimge@outlook.com?subject=Consultoría freelance",
  },
  {
    icon: Mail,
    title: "Otras consultas",
    description:
      "Sugerencias, bugs, colaboraciones open source o cualquier otra consulta sobre Kipsco.",
    cta: "Enviar mensaje",
    href: "mailto:elimge@outlook.com?subject=Consulta Kipsco",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            ¿Hablamos?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ya sea para implementar Kipsco en tu empresa, contratar al developer
            o simplemente preguntar algo, estoy disponible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-background rounded-2xl border border-border p-6 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <option.icon size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{option.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {option.description}
                </p>
              </div>
              <a href={option.href} className="mt-auto">
                <Button variant="outline" className="w-full gap-2 cursor-pointer">
                  <Mail size={14} />
                  {option.cta}
                </Button>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Email directo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-muted-foreground">
            O escríbeme directamente a{" "}
            <a
              href="mailto:elimge@outlook.com"
              className="font-semibold text-foreground hover:underline"
            >
              elimge@outlook.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}