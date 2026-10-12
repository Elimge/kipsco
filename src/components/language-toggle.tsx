"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { i18n } = useTranslation();

  function toggle() {
    const next = i18n.language.startsWith("es") ? "en" : "es";
    i18n.changeLanguage(next);
  }

  const isEs = i18n.language.startsWith("es");

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      className="w-8 h-8 p-0 text-xs font-bold"
      title={isEs ? "Switch to English" : "Cambiar a Español"}
    >
      {isEs ? "EN" : "ES"}
    </Button>
  );
}