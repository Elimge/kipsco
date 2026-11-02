"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "@/components/language-toggle";

type LegalPageProps = {
  kind: "privacy" | "terms";
};

const sectionKeys = [
  "purpose",
  "data",
  "storage",
  "sharing",
  "retention",
  "rights",
  "contact",
] as const;

export function LegalPage({ kind }: LegalPageProps) {
  const { t } = useTranslation();
  const base = `legal.${kind}`;

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t(`${base}.back`)}
          </Link>
          <LanguageToggle />
        </div>
        <article className="mt-8">
          <p className="text-sm text-muted-foreground mb-2">
            {t(`${base}.updated`)}
          </p>
          <h1 className="text-3xl font-bold tracking-tight mb-4">
            {t(`${base}.title`)}
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-10">
            {t(`${base}.intro`)}
          </p>
          <div className="flex flex-col gap-8">
            {sectionKeys.map((sectionKey) => (
              <section key={sectionKey}>
                <h2 className="text-xl font-semibold mb-2">
                  {t(`${base}.sections.${sectionKey}.title`)}
                </h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {t(`${base}.sections.${sectionKey}.body`)}
                </p>
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
