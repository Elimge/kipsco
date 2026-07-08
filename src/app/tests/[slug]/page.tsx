import { TestPageClient } from "./test-page-client";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const titles: Record<string, string> = {
    "test-personalidad-laboral": "Test de Personalidad Laboral",
    "test-aptitud-cognitiva": "Test de Aptitud Cognitiva",
  };

  const descriptions: Record<string, string> = {
    "test-personalidad-laboral":
      "Evalúa tus cinco grandes dimensiones de personalidad en el contexto profesional. Descubre tu estilo de trabajo y compatibilidad con perfiles laborales colombianos.",
    "test-aptitud-cognitiva":
      "Mide tu razonamiento lógico, numérico y verbal con 20 ejercicios diseñados para entornos profesionales reales.",
  };

  return {
    title: titles[slug] ?? "Evaluación",
    description: descriptions[slug] ?? "Evaluación psicométrica profesional.",
    alternates: {
      canonical: `https://kipsco.com/tests/${slug}`,
    },
  };
}

export function generateStaticParams() {
  return [
    { slug: "test-personalidad-laboral" },
    { slug: "test-aptitud-cognitiva" },
  ];
}

export default async function TestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <TestPageClient slug={slug} />;
}