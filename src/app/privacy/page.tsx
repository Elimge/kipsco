import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Información sobre el tratamiento local de datos en Kipsco.",
};

export default function PrivacyPage() {
  return <LegalPage kind="privacy" />;
}
