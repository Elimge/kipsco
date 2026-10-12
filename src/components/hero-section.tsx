"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, Brain, Users } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();

  const stats = [
    { icon: Brain, label: t("hero.stats.tests"), value: "2+" },
    { icon: BarChart3, label: t("hero.stats.dimensions"), value: "12+" },
    { icon: Users, label: t("hero.stats.profiles"), value: "20+" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-6">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-pink-100">
              <Brain className="h-3.5 w-3.5 text-pink-600" />
            </span>
            {t("hero.badge")}
          </Badge>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
          className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/tests">
            <Button size="lg" className="gap-2 cursor-pointer">
              {t("hero.startCta")}
              <ArrowRight size={16} />
            </Button>
          </Link>
          <Link href="/recruiter">
            <Button size="lg" variant="outline" className="gap-2 cursor-pointer bg-transparent border-white/30 text-white hover:bg-white/10">
              <Users size={16} />
              {t("hero.recruiterCta")}
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <Icon size={20} className="text-muted-foreground" />
              <span className="text-2xl font-bold">{value}</span>
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
