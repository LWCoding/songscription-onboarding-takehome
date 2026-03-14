"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "@/components/ProgressBar";

const levels = [
  { id: "beginner", label: "Beginner", description: "I'm just getting started" },
  { id: "intermediate", label: "Intermediate", description: "I can play some songs" },
  { id: "advanced", label: "Advanced", description: "I'm comfortable with most pieces" },
  { id: "expert", label: "Expert", description: "I play at a professional level" },
];

export default function OnboardingMasteryPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-[80vh]">
      <ProgressBar step={0} total={4} />

      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        What&apos;s your skill level?
      </h1>
      <p className="text-base text-gray-500 mb-8">
        This helps us personalize your experience
      </p>

      <div className="flex flex-col gap-3">
        {levels.map((level) => (
          <button
            key={level.id}
            onClick={() => setSelected(level.id)}
            className="rounded-2xl px-5 py-4 border-2 text-left transition-colors cursor-pointer"
            style={{
              borderColor: selected === level.id ? "#218579" : "#e5e7eb",
              backgroundColor: selected === level.id ? "#e6f5f3" : "#fff",
            }}
          >
            <span className="text-lg font-semibold text-gray-900 block">
              {level.label}
            </span>
            <span className="text-sm text-gray-500 mt-0.5 block">
              {level.description}
            </span>
          </button>
        ))}
      </div>

      <div className="flex-1" />
      <button
        onClick={() => router.push("/onboarding/goals")}
        disabled={!selected}
        className="bg-primary rounded-2xl py-4 text-center text-white font-semibold text-lg mt-8 transition-opacity cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90"
      >
        Continue
      </button>
    </div>
  );
}
