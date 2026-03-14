"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "@/components/ProgressBar";

const goals = [
  { id: "fun", label: "Play for fun", icon: "🎵" },
  { id: "songs", label: "Learn specific songs", icon: "🎶" },
  { id: "technique", label: "Improve my technique", icon: "🎹" },
  { id: "theory", label: "Understand music theory", icon: "📖" },
  { id: "perform", label: "Prepare for performances", icon: "🎤" },
  { id: "daily", label: "Build a daily practice habit", icon: "📅" },
];

export default function OnboardingGoalsPage() {
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
    <div className="flex flex-col min-h-[80vh]">
      <ProgressBar step={1} total={4} />

      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        What are your practice goals?
      </h1>
      <p className="text-base text-gray-500 mb-8">Select all that apply</p>

      <div className="flex flex-wrap gap-3">
        {goals.map((goal) => (
          <button
            key={goal.id}
            onClick={() => toggle(goal.id)}
            className="rounded-2xl px-5 py-3 border-2 transition-colors cursor-pointer"
            style={{
              borderColor: selected.has(goal.id) ? "#218579" : "#e5e7eb",
              backgroundColor: selected.has(goal.id) ? "#e6f5f3" : "#fff",
            }}
          >
            <span className="text-base text-gray-900">
              {goal.icon}&nbsp;&nbsp;{goal.label}
            </span>
          </button>
        ))}
      </div>

      <div className="flex-1" />
      <button
        onClick={() => router.push("/onboarding/taste")}
        disabled={selected.size === 0}
        className="bg-primary rounded-2xl py-4 text-center text-white font-semibold text-lg mt-8 transition-opacity cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90"
      >
        Continue
      </button>
    </div>
  );
}
