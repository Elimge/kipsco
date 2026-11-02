import type { Metadata } from "next";
import { GuideContent } from "./guide-content";

export const metadata: Metadata = {
  title: "User guide",
  description:
    "Learn how to take Kipsco assessments, understand your results, share your profile and use recruiter mode.",
  alternates: { canonical: "https://kipsco.com/guide" },
};

export default function GuidePage() {
  return <GuideContent />;
}
