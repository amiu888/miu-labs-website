import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "SnaptabAI — Scan Receipts & Split Bills Instantly",
  description:
    "SnaptabAI uses AI to scan receipts, extract line items, and split bills with friends — all on your device. By Miu Labs.",
  keywords: ["receipt scanner", "bill splitter", "expense tracker", "AI", "iOS app"],
  authors: [{ name: "Miu Labs" }],
  openGraph: {
    title: "SnaptabAI — Scan Receipts & Split Bills Instantly",
    description:
      "AI-powered receipt scanning and bill splitting for iOS. Snap a photo, split the bill.",
    type: "website",
    siteName: "SnaptabAI by Miu Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnaptabAI — Scan Receipts & Split Bills Instantly",
    description: "AI-powered receipt scanning and bill splitting for iOS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
