"use client";

import "@/i18n/config";
import { ReactNode, useEffect } from "react";
import { useTranslation } from "react-i18next";

function I18nDocumentSync() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const updateDocument = (language: string) => {
      const shortLanguage = language.startsWith("es") ? "es" : "en";
      document.documentElement.lang = shortLanguage;
      document.title = i18n.getFixedT(language)("metadata.title");

      const description = document.querySelector<HTMLMetaElement>(
        'meta[name="description"]'
      );
      if (description) {
        description.content = i18n.getFixedT(language)("metadata.description");
      }
    };

    updateDocument(i18n.language);
    i18n.on("languageChanged", updateDocument);
    return () => i18n.off("languageChanged", updateDocument);
  }, [i18n]);

  return null;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <I18nDocumentSync />
      {children}
    </>
  );
}