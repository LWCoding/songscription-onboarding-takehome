"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MaestraMark from "@/components/MaestraMark";
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
  const isFinishing = segment === "finishing";
  const isComplete = segment === "complete" || isFinishing;
  const step =
    segment && segment in STEP_BY_SEGMENT ? STEP_BY_SEGMENT[segment]! : 0;

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {!isFinishing && (
        <header className="flex w-full shrink-0 justify-center pb-5">
          <Link
            href="/"
            aria-label="Maestra — return to start"
            className="rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <MaestraMark className="h-10 w-10" />
          </Link>
        </header>
      )}
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
