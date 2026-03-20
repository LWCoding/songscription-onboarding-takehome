"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MaestraMark from "@/components/MaestraMark";

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/onboarding/mastery");
  };

  return (
    <div className="flex min-h-0 w-full flex-1 flex-col items-center">
      <div className="w-full max-w-sm">
        <div className="mb-6 flex flex-col items-center gap-4">
          <MaestraMark className="h-10 w-10" />
          <h1 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Create your Maestra account
          </h1>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white px-5 py-5 shadow-sm">
          <form onSubmit={handleSignUp} className="flex flex-col gap-3">
            <div>
              <label
                htmlFor="signup-email"
                className="mb-1 block text-xs font-semibold text-gray-600"
              >
                Email
              </label>
              <input
                id="signup-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="signup-password"
                className="mb-1 block text-xs font-semibold text-gray-600"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="signup-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  placeholder="Choose a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-10 text-base text-gray-900 placeholder:text-gray-400 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded p-1 text-gray-400 hover:text-gray-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {showPassword ? (
                      <>
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </>
                    ) : (
                      <>
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 mb-3 w-full cursor-pointer rounded-lg bg-primary py-1.5 text-center text-base font-semibold text-white transition-opacity hover:opacity-90"
            >
              Continue
            </button>
          </form>

          <div className="relative my-3">
            <div className="absolute inset-0 flex items-center" aria-hidden>
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs font-medium uppercase tracking-wide text-gray-400">
              <span className="bg-white px-3">Or</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => router.push("/onboarding/mastery")}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white py-1.5 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-gray-900"
              aria-hidden
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Continue with Apple
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have a Maestra account?{" "}
          <Link
            href="/"
            className="font-medium text-blue-600 hover:text-blue-700 hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
