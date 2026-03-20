"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import OnboardingBackLink from "@/components/OnboardingBackLink";

const primaryOptions = [
  {
    id: "sheet",
    emoji: "🎼",
    label: "Sheet Music",
    description: "Traditional notation with staffs, clefs, and note values",
  },
  {
    id: "piano-roll",
    emoji: "🎹",
    label: "Piano Roll",
    description: "Visual bars showing timing and pitch, no reading needed",
  },
];

const secondaryOptions = [
  {
    id: "both",
    label: "Both",
    description: "I'd like to use either depending on the situation",
  },
  {
    id: "unsure",
    label: "Not sure yet",
    description: "I'll decide later",
  },
];

export default function OnboardingNotationPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Sheet Music or Piano Roll?
      </h1>
      <p className="text-base text-gray-500 mb-5">
        How do you prefer to read music?
      </p>

      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-2">
          {primaryOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setSelected(option.id)}
              className="min-w-0 rounded-2xl px-3 py-3 sm:px-4 border-2 text-center transition-colors cursor-pointer h-full"
              style={{
                borderColor: selected === option.id ? "#218579" : "#e5e7eb",
                backgroundColor: selected === option.id ? "#e6f5f3" : "#fff",
              }}
            >
              <span
                className="text-3xl leading-none mb-2 block"
                aria-hidden
              >
                {option.emoji}
              </span>
              <span className="text-lg font-semibold text-gray-900 block">
                {option.label}
              </span>
              <span className="text-sm text-gray-500 mt-0.5 block">
                {option.description}
              </span>
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          {secondaryOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setSelected(option.id)}
              className="w-full rounded-xl px-4 py-2 border-2 text-left transition-colors cursor-pointer"
              style={{
                borderColor: selected === option.id ? "#218579" : "#e5e7eb",
                backgroundColor: selected === option.id ? "#e6f5f3" : "#fff",
              }}
            >
              <span className="text-lg font-semibold text-gray-900 block">
                {option.label}
              </span>
              <span className="text-sm text-gray-500 mt-0.5 block">
                {option.description}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1" />
      <div className="mt-7 flex shrink-0 flex-col gap-5">
        <button
          onClick={() => router.push("/onboarding/finishing")}
          disabled={!selected}
          className="w-full bg-primary rounded-2xl py-1.5 text-center text-white font-semibold text-base transition-opacity cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90"
        >
          Create my account
        </button>
        <OnboardingBackLink href="/onboarding/taste" />
      </div>
    </div>
  );
}
