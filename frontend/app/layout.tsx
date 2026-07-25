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
        <header className="border-b border-border bg-surface px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold text-sm">
              V
            </span>
            <Link href="/erp" className="font-semibold tracking-tight">
              Vetic Voice Agent Dashboard
            </Link>
          </div>
        </header>
        <main className="flex-1 px-6 py-6 max-w-6xl w-full mx-auto">{children}</main>
      </body>
    </html>
  );
}
