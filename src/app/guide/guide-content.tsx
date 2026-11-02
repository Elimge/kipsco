"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart3,
  ClipboardList,
  Info,
  PlayCircle,
  Share2,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "@/components/language-toggle";
import { OPEN_TOUR_EVENT } from "@/components/onboarding-tour";
import { Button } from "@/components/ui/button";

const sections = [
  { key: "test", icon: ClipboardList },
  { key: "results", icon: BarChart3 },
  { key: "share", icon: Share2 },
  { key: "recruiter", icon: Users },
  { key: "privacy", icon: ShieldCheck },
  { key: "limits", icon: Info },
] as const;

export function GuideContent() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:py-16">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("guide.back")}
          </Link>
          <LanguageToggle />
        </div>

        <h1 className="mb-3 text-3xl font-bold tracking-tight">
          {t("guide.title")}
        </h1>
        <p className="mb-6 text-lg text-muted-foreground">{t("guide.subtitle")}</p>

        <Button
          variant="outline"
          size="sm"
          className="mb-10 cursor-pointer gap-2"
          onClick={() => window.dispatchEvent(new Event(OPEN_TOUR_EVENT))}
        >
          <PlayCircle size={14} />
          {t("guide.replayTour")}
        </Button>

        <div className="flex flex-col gap-4">
          {sections.map(({ key, icon: Icon }, index) => (
            <motion.section
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Icon size={20} className="text-primary" />
              </div>
              <div>
                <h2 className="mb-2 font-semibold">{t(`guide.${key}.title`)}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`guide.${key}.body`)}
                </p>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  );
}
