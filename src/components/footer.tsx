"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="py-12 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg font-bold">Kipsco</span>
              <Badge variant="secondary" className="text-xs">Beta</Badge>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-4">
              {t("footer.description")}
            </p>
            <a
              href="mailto:elimge@outlook.com"
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              elimge@outlook.com
            </a>
          </div>

          {/* Producto */}
          <div>
            <h4 className="font-semibold text-sm mb-3">{t("footer.product")}</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/tests" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.tests")}
                </Link>
              </li>
              <li>
                <Link href="/recruiter" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.recruiter")}
                </Link>
              </li>
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.features")}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.howItWorks")}
                </a>
              </li>
            </ul>
          </div>

          {/* Proyecto */}
          <div>
            <h4 className="font-semibold text-sm mb-3">{t("footer.project")}</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="https://github.com/elimge/kipsco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.github")}
                </a>
              </li>
              <li>
                <a
                  href="mailto:elimge@outlook.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.contact")}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.faq")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            {t("footer.copyright")}
          </p>
          <a
            href="mailto:elimge@outlook.com"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            elimge@outlook.com
          </a>
        </div>
      </div>
    </footer>
  );
}