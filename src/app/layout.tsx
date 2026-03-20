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
        {/* Wide screens: piano + dark overlay behind the white strip */}
        <div
          className="pointer-events-none fixed inset-0 z-0 hidden md:block"
          aria-hidden
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/img/piano-bg.jpg)" }}
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 flex min-h-dvh justify-center bg-background md:bg-transparent">
          <main className="flex min-h-dvh w-full max-w-md min-w-0 flex-col bg-background md:border-x md:border-gray-200/90 md:shadow-[0_25px_80px_-20px_rgba(0,0,0,0.35)]">
            <div className="mx-auto flex min-h-0 w-full flex-1 flex-col overflow-y-auto px-9 pt-10 pb-4 md:px-11">
              <div className="my-auto flex w-full min-h-0 flex-col">{children}</div>
            </div>
            <footer className="shrink-0 px-9 pb-6 pt-2 text-center text-xs text-gray-400 md:px-11">
              <Link href="#" className="hover:text-gray-600 hover:underline">
                Terms of Service
              </Link>
              {" and "}
              <Link href="#" className="hover:text-gray-600 hover:underline">
                Privacy Policy
              </Link>
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}
