import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SchemaOrg } from "@/components/schema-org";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kipsco.com"),
  title: {
    default: "Kipsco — Evaluación de Talento Moderna",
    template: "%s | Kipsco",
  },
  description:
    "Plataforma moderna de evaluación psicométrica y psicotécnica para reclutamiento, recursos humanos y evaluación de talento en Colombia.",
  keywords: [
    "pruebas psicométricas",
    "evaluación de talento",
    "test laborales",
    "reclutamiento",
    "recursos humanos",
    "RRHH Colombia",
    "test de personalidad laboral",
    "evaluación psicotécnica",
    "Big Five personalidad",
    "compatibilidad laboral",
  ],
  authors: [{ name: "Kipsco" }],
  creator: "Kipsco",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://kipsco.com",
    siteName: "Kipsco",
    title: "Kipsco — Evaluación de Talento Moderna",
    description:
      "Evaluaciones psicométricas y cognitivas para reclutadores y equipos de RRHH.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kipsco — Evaluación de Talento Moderna",
    description:
      "Evaluaciones psicométricas y cognitivas para reclutadores y equipos de RRHH.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://kipsco.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SchemaOrg />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}