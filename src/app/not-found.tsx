"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-7xl font-bold text-muted-foreground/20 mb-6">404</p>
        <h1 className="text-2xl font-bold mb-3">{t("notFound.title")}</h1>
        <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
          {t("notFound.description")}
        </p>
        <Link href="/">
          <Button className="gap-2">
            <ArrowLeft size={16} />
            {t("notFound.backToHome")}
          </Button>
        </Link>
      </div>
    </main>
  );
}