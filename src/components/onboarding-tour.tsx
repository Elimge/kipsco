"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Brain, BarChart3, ClipboardList, Users, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "kipsco_onboarded";
export const OPEN_TOUR_EVENT = "kipsco:open-tour";

const steps = [
  { key: "s1", icon: Brain },
  { key: "s2", icon: ClipboardList },
  { key: "s3", icon: BarChart3 },
  { key: "s4", icon: Users },
] as const;

export function OnboardingTour() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setOpen(true);
      }
    } catch (error) {
      console.warn("Kipsco onboarding preference could not be read.", error);
    }
  }, []);

  useEffect(() => {
    function handleOpen() {
      setIndex(0);
      setOpen(true);
    }

    window.addEventListener(OPEN_TOUR_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_TOUR_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function close() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch (error) {
      console.warn("Kipsco onboarding preference could not be saved.", error);
    }
    setOpen(false);
  }

  if (!open) {
    return null;
  }

  const step = steps[index];
  const Icon = step.icon;
  const isLast = index === steps.length - 1;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 px-4 backdrop-blur-md"
        onClick={close}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="onboarding-title"
          className="w-full max-w-md rounded-2xl border border-border bg-background p-6 text-foreground shadow-[0_25px_60px_rgba(0,0,0,0.3)]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {t("onboarding.step")} {index + 1} {t("onboarding.of")} {steps.length}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label={t("onboarding.skip")}
              className="cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
            >
              <X size={18} />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step.key}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex min-h-[180px] flex-col items-center gap-4 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Icon size={28} className="text-primary" />
              </div>
              <h2 id="onboarding-title" className="text-xl font-bold">
                {t(`onboarding.${step.key}.title`)}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t(`onboarding.${step.key}.description`)}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="my-5 flex justify-center gap-1.5" aria-hidden="true">
            {steps.map((currentStep, currentIndex) => (
              <span
                key={currentStep.key}
                className={`h-1.5 rounded-full transition-all ${
                  currentIndex === index
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              className="cursor-pointer"
              onClick={index === 0 ? close : () => setIndex(index - 1)}
            >
              {index === 0 ? t("onboarding.skip") : t("onboarding.prev")}
            </Button>
            <Button
              size="sm"
              className="cursor-pointer"
              onClick={isLast ? close : () => setIndex(index + 1)}
            >
              {isLast ? t("onboarding.finish") : t("onboarding.next")}
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
