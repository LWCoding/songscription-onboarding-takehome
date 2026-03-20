import Link from "next/link";

export default function OnboardingBackLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="block text-center text-sm font-medium text-gray-500 transition-colors hover:text-primary"
    >
      Back
    </Link>
  );
}
