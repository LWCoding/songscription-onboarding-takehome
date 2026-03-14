"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "@/components/ProgressBar";

const options = [
  {
    id: "sheet",
    label: "Sheet Music",
    description: "Traditional notation with staffs, clefs, and note values",
  },
  {
    id: "piano-roll",
    label: "Piano Roll",
    description: "Visual bars showing timing and pitch — no music reading needed",
  },
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
    <div className="flex flex-col min-h-[80vh]">
      <ProgressBar step={3} total={4} />

      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Sheet Music or Piano Roll?
      </h1>
      <p className="text-base text-gray-500 mb-8">
        How do you prefer to read music?
      </p>

      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelected(option.id)}
            className="rounded-2xl px-5 py-4 border-2 text-left transition-colors cursor-pointer"
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

      <div className="flex-1" />
      <button
        onClick={() => router.push("/signup")}
        disabled={!selected}
        className="bg-primary rounded-2xl py-4 text-center text-white font-semibold text-lg mt-8 transition-opacity cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90"
      >
        Create my account
      </button>
    </div>
  );
}
