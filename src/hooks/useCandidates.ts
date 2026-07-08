"use client";

import { useState, useEffect } from "react";
import { Candidate } from "@/types/assessment";

const STORAGE_KEY = "kipsco_candidates";

export function useCandidates() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setCandidates(JSON.parse(stored));
  }, []);

  function save(updated: Candidate[]) {
    setCandidates(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  function addCandidate(name: string, encodedData: string): boolean {
    try {
      const json = decodeURIComponent(atob(encodedData));
      const result = JSON.parse(json);
      const candidate: Candidate = {
        id: crypto.randomUUID(),
        name,
        addedAt: new Date().toISOString(),
        result,
      };
      save([...candidates, candidate]);
      return true;
    } catch {
      return false;
    }
  }

  function removeCandidate(id: string) {
    save(candidates.filter((c) => c.id !== id));
  }

  function clearAll() {
    save([]);
  }

  return { candidates, addCandidate, removeCandidate, clearAll };
}