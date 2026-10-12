"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export function CTASection() {
  const { t } = useTranslation();
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
            {t("cta.title")}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tests">
              <Button size="lg" variant="secondary" className="gap-2 cursor-pointer">
                {t("cta.startBtn")}
                <ArrowRight size={16} />
              </Button>
            </Link>
            <Link href="/recruiter">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 cursor-pointer bg-transparent border-white/30 text-white hover:bg-white/10"
              >
                <Building2 size={16} />
                {t("cta.recruiterBtn")}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
