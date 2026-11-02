"use client";

import "@/i18n/config";
import { ReactNode, useEffect } from "react";
import i18n from "@/i18n/config";
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
  useEffect(() => {
    let storedLanguage: string | null = null;

    try {
      storedLanguage = window.localStorage.getItem("kipsco_lang");
    } catch (error) {
      console.warn("Kipsco language preference could not be read.", error);
    }

    const browserLanguage =
      storedLanguage ??
      navigator.languages.find((language) => language.startsWith("es") || language.startsWith("en")) ??
      navigator.language;
    const language = browserLanguage.startsWith("es") ? "es" : "en";

    if (i18n.language !== language) {
      void i18n.changeLanguage(language);
    }
  }, []);

  return (
    <>
      <I18nDocumentSync />
      {children}
    </>
  );
}