import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Songscription Onboarding",
  description: "Onboarding flow for Songscription",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <main className="min-h-screen flex items-center justify-center bg-background">
          <div className="w-full max-w-md mx-auto px-6 py-12">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
