import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kipsco — Evaluación de Talento Moderna",
  description:
    "Plataforma moderna de evaluación psicométrica y psicotécnica para reclutamiento, recursos humanos y evaluación de talento.",
  keywords: [
    "pruebas psicométricas",
    "evaluación de talento",
    "test laborales",
    "reclutamiento",
    "recursos humanos",
    "RRHH",
  ],
  openGraph: {
    title: "Kipsco — Evaluación de Talento Moderna",
    description:
      "Plataforma moderna de evaluación psicométrica y psicotécnica.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}