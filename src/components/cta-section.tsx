"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 px-4 bg-zinc-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            ¿Listo para evaluar tu talento?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Comienza gratis hoy. Sin tarjeta de crédito, sin configuración
            compleja. Resultados en menos de 15 minutos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2"
            >
              Comenzar evaluación gratis
              <ArrowRight size={16} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent border-white/30 text-white hover:bg-white/10"
            >
              <Building2 size={16} />
              Demo para empresas
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}