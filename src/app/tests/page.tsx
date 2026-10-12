import type { Metadata } from "next";
import { TestsContent } from "./tests-content";

export const metadata: Metadata = {
  title: "Tests disponibles",
  description: "Explora nuestras evaluaciones psicométricas y cognitivas.",
  alternates: { canonical: "https://kipsco.com/tests" },
};

export default function TestsPage() {
  return <TestsContent />;
}