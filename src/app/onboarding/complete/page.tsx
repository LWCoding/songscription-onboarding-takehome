import Link from "next/link";

export default function OnboardingCompletePage() {
  return (
    <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900">
        You&apos;re all set!
      </h1>
      <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-500">
        Your Maestra account is ready. This is a demo — nothing was saved.
      </p>
      <Link
        href="/"
        className="mt-8 text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
      >
        Return to start
      </Link>
    </div>
  );
}
