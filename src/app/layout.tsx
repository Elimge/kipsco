import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SchemaOrg } from "@/components/schema-org";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/components/i18n-provider";

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
    default: "Kipsco — Modern Talent Assessment",
    template: "%s | Kipsco",
  },
  description:
    "Modern psychometric and cognitive assessment platform for recruitment, human resources and talent evaluation.",
  keywords: [
    "psychometric tests",
    "talent assessment",
    "work assessments",
    "recruitment",
    "human resources",
    "work personality test",
    "cognitive assessment",
    "Big Five personality",
    "job compatibility",
  ],
  authors: [{ name: "Kipsco" }],
  creator: "Kipsco",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kipsco.com",
    siteName: "Kipsco",
    title: "Kipsco — Modern Talent Assessment",
    description:
      "Psychometric and cognitive assessments for recruiters and HR teams.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kipsco — Modern Talent Assessment",
    description:
      "Psychometric and cognitive assessments for recruiters and HR teams.",
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
        <I18nProvider>
          <ThemeProvider>
            <SchemaOrg />
            {children}
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}