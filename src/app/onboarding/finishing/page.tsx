"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import PianoRollLoader from "@/components/PianoRollLoader";

const DISPLAY_MS = 5000;

export default function OnboardingFinishingPage() {
  const router = useRouter();

  useEffect(() => {
    const id = window.setTimeout(() => {
      router.replace("/onboarding/complete");
    }, DISPLAY_MS);
    return () => window.clearTimeout(id);
  }, [router]);

  return (
    <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center">
        <div className="piano-loader-pulse inline-flex shrink-0">
          <PianoRollLoader />
        </div>
        <p className="mt-2 max-w-[18rem] text-center text-sm leading-relaxed text-gray-600">
          Setting up your account... Exciting!
        </p>
      </div>
    </div>
  );
}
