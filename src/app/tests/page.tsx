import type { Metadata } from "next";
import { TestsContent } from "./tests-content";

export const metadata: Metadata = {
  title: "Tests disponibles",
  description: "Explore our psychometric and cognitive assessments.",
  alternates: { canonical: "https://kipsco.com/tests" },
};

export default function TestsPage() {
  return <TestsContent />;
}