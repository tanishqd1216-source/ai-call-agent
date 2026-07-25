import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vetic Voice Agent Dashboard",
  description: "Call history and observability for the Vetic Voice Agent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b border-black/10 dark:border-white/15 px-6 py-4">
          <Link href="/" className="font-semibold">
            Vetic Voice Agent Dashboard
          </Link>
        </header>
        <main className="flex-1 px-6 py-6 max-w-6xl w-full mx-auto">{children}</main>
      </body>
    </html>
  );
}
