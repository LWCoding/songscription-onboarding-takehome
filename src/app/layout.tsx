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
