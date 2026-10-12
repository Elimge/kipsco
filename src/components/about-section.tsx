"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Code2, Database, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4">{t("about.badge")}</Badge>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              {t("about.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t("about.description1")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("about.description2")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="mailto:elimge@outlook.com">
                <Button className="gap-2 cursor-pointer w-full sm:w-auto">
                  <Mail size={16} />
                  {t("about.contactBtn")}
                </Button>
              </a>
              <a
                href="https://github.com/elimge/kipsco"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2 cursor-pointer w-full sm:w-auto">
                  <ExternalLink size={16} />
                  {t("about.codeBtn")}
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Skills cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {[
              {
                icon: Code2,
                title: t("about.fullstackTitle"),
                description: t("about.fullstackDesc"),
              },
              {
                icon: Database,
                title: t("about.dataTitle"),
                description: t("about.dataDesc"),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-muted/40 rounded-2xl p-5 border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Open source badge */}
            <div className="bg-zinc-900 dark:bg-zinc-800 text-white rounded-2xl p-5">
              <p className="text-sm font-medium">
                {t("about.openSource")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}