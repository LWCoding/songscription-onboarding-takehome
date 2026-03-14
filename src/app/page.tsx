"use client";

import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center">
      {/* Logo & branding */}
      <div className="flex flex-col items-center mb-12">
        <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mt-6">Maestra</h1>
        <p className="text-base text-gray-500 mt-2 text-center">
          Learn to play your favorite songs
        </p>
      </div>

      {/* CTAs */}
      <div className="w-full flex flex-col gap-4">
        <Link
          href="/onboarding/mastery"
          className="bg-primary rounded-2xl py-4 text-center text-white font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          Create Account
        </Link>

        <Link
          href="/signup"
          className="bg-black rounded-2xl py-4 text-center text-white font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Continue with Apple
        </Link>

        <Link
          href="/signup"
          className="py-3 text-center text-primary font-medium text-base hover:opacity-80 transition-opacity"
        >
          I already have an account
        </Link>
      </div>
    </div>
  );
}
