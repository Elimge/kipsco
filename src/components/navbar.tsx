"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { LanguageToggle } from "@/components/language-toggle";
import { useTranslation } from "react-i18next";

export function Navbar() {

  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">Kipsco</span>
            <Badge variant="secondary" className="text-xs">
              Beta
            </Badge>
          </Link>

          {/* Desktop nav */}
          <a
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.features")}
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.howItWorks")}
          </a>
          <Link
            href="/tests"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.tests")}
          </Link>
          <Link
            href="/recruiter"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.recruiters")}
          </Link>
          <a
            href="#about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.about")}
          </a>
          <a
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.contact")}
          </a>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
            <Link href="/tests">
              <Button size="sm">{t("nav.startFree")}</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              className="p-2 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 flex flex-col gap-4 border-t border-border">
            <a href="#features" className="text-sm text-muted-foreground">
              Características
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground">
              Cómo funciona
            </a>
            <a href="#about" className="text-sm text-muted-foreground">
              Acerca de
            </a>
            <a href="#contact" className="text-sm text-muted-foreground">
              Contacto
            </a>
            <Link href="/tests" className="text-sm text-muted-foreground">
              Tests
            </Link>
            <Link href="/recruiter" className="text-sm text-muted-foreground">
              Reclutadores
            </Link>
            <Link href="/tests">
              <Button size="sm" className="w-full">
                Comenzar gratis
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
