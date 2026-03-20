"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import OnboardingBackLink from "@/components/OnboardingBackLink";

const genres = [
  { id: "classical", label: "Classical" },
  { id: "pop", label: "Pop" },
  { id: "jazz", label: "Jazz" },
  { id: "rock", label: "Rock" },
  { id: "rnb", label: "R&B / Soul" },
  { id: "film", label: "Film / TV Scores" },
  { id: "anime", label: "Anime" },
  { id: "lofi", label: "Lo-fi / Chill" },
  { id: "hiphop", label: "Hip Hop" },
  { id: "kpop", label: "K-Pop" },
  { id: "latin", label: "Latin" },
  { id: "other", label: "Other" },
];

export default function OnboardingTastePage() {
  const router = useRouter();
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        What music do you love?
      </h1>
      <p className="text-base text-gray-500 mb-5">
        Pick your favorite genres
      </p>

      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => toggle(genre.id)}
            className="rounded-full px-5 py-2 border-2 transition-colors cursor-pointer"
            style={{
              borderColor: selected.has(genre.id) ? "#218579" : "#e5e7eb",
              backgroundColor: selected.has(genre.id) ? "#e6f5f3" : "#fff",
            }}
          >
            <span className="text-base text-gray-900">{genre.label}</span>
          </button>
        ))}
      </div>

      <div className="flex-1" />
      <div className="mt-7 flex shrink-0 flex-col gap-5">
        <button
          onClick={() => router.push("/onboarding/notation")}
          disabled={selected.size === 0}
          className="w-full bg-primary rounded-2xl py-1.5 text-center text-white font-semibold text-base transition-opacity cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90"
        >
          Continue
        </button>
        <OnboardingBackLink href="/onboarding/goals" />
      </div>
    </div>
  );
}
