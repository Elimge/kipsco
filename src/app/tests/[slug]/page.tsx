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
  };

  const descriptions: Record<string, string> = {
    "test-personalidad-laboral":
      "Evalúa tus cinco grandes dimensiones de personalidad en el contexto profesional. Descubre tu estilo de trabajo y compatibilidad con perfiles laborales colombianos.",
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
  return [{ slug: "test-personalidad-laboral" }];
}

export default async function TestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <TestPageClient slug={slug} />;
}