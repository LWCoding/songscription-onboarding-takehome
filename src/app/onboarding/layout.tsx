"use client";

import { usePathname } from "next/navigation";
import ProgressBar from "@/components/ProgressBar";

const STEP_BY_SEGMENT: Record<string, number> = {
  mastery: 0,
  goals: 1,
  taste: 2,
  notation: 3,
};

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const segment = pathname.split("/").filter(Boolean)[1];
  const isComplete = segment === "complete";
  const step =
    segment && segment in STEP_BY_SEGMENT ? STEP_BY_SEGMENT[segment]! : 0;

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {!isComplete && (
        <div className="shrink-0">
          <ProgressBar step={step} total={4} />
        </div>
      )}
      <div
        className={`flex min-h-0 flex-1 flex-col ${isComplete ? "" : "overflow-y-auto"}`}
      >
        {children}
      </div>
    </div>
  );
}
