import type { Metadata } from "next";
import Link from "next/link";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maestra",
  description: "Sign in and onboarding for Maestra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {/* Full-page chrome: silver base + washes from theme tokens */}
        <div
          className="pointer-events-none fixed inset-0 z-0"
          aria-hidden
          style={{
            background: `
              radial-gradient(ellipse 110% 65% at 50% -8%, rgba(255, 255, 255, 0.5), transparent 52%),
              radial-gradient(ellipse 85% 55% at 100% 8%, color-mix(in srgb, var(--primary) 11%, transparent), transparent 58%),
              radial-gradient(ellipse 75% 60% at 0% 100%, color-mix(in srgb, var(--primary-light) 82%, transparent), transparent 55%),
              linear-gradient(
                145deg,
                #b8c2bf 0%,
                #d5dfdc 18%,
                #eef3f2 38%,
                #c9d5d1 56%,
                #e8f0ee 74%,
                #9eaaa6 100%
              )
            `,
          }}
        />
        <div className="relative z-10 flex min-h-dvh justify-center bg-transparent">
          <main className="flex min-h-dvh w-full max-w-xl min-w-0 flex-col bg-background md:border-x md:border-gray-200/90 md:shadow-[0_25px_80px_-20px_rgba(0,0,0,0.35)]">
            <div className="flex min-h-0 w-full flex-1 flex-col overflow-y-auto px-9 pb-4 pt-8 md:px-11">
              <div className="mx-auto flex w-full max-w-md min-h-0 flex-1 flex-col">
                <div className="my-auto flex min-h-0 w-full flex-col">
                  {children}
                </div>
              </div>
            </div>
            <footer className="shrink-0 px-9 pb-6 pt-2 md:px-11">
              <div className="mx-auto max-w-md text-center text-xs text-gray-400">
                <Link href="#" className="hover:text-gray-600 hover:underline">
                  Terms of Service
                </Link>
                {" and "}
                <Link href="#" className="hover:text-gray-600 hover:underline">
                  Privacy Policy
                </Link>
              </div>
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}
