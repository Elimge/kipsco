import { AssessmentResult } from "@/types/assessment";

export function encodeResult(result: AssessmentResult): string {
  const json = JSON.stringify(result);
  return btoa(encodeURIComponent(json));
}

export function decodeResult(encoded: string): AssessmentResult | null {
  try {
    const json = decodeURIComponent(atob(encoded));
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export function buildShareUrl(result: AssessmentResult): string {
  const encoded = encodeResult(result);
  return `${window.location.origin}/profile#data=${encoded}`;
}