import { TestPageClient } from "./test-page-client";

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