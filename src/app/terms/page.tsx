import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Términos de uso",
  description: "Términos de uso y límites de las evaluaciones de Kipsco.",
};

export default function TermsPage() {
  return <LegalPage kind="terms" />;
}
