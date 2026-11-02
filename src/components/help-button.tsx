"use client";

import { HelpCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { OPEN_TOUR_EVENT } from "@/components/onboarding-tour";
import { Button } from "@/components/ui/button";

export function HelpButton() {
  const { t } = useTranslation();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-8 w-8 cursor-pointer p-0"
      title={t("onboarding.help")}
      aria-label={t("onboarding.help")}
      onClick={() => window.dispatchEvent(new Event(OPEN_TOUR_EVENT))}
    >
      <HelpCircle size={16} />
    </Button>
  );
}
