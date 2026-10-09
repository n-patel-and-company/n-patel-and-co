import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "N. Patel & Co. — Plywood, Veneer, Laminate & Timber",
  description:
    "N. Patel & Co. has supplied furniture material — plywood, veneer, laminate and timber — to carpenters, contractors and interior studios since 2000. Twenty-five years of consistent grades and dependable supply.",
  keywords: [
    "plywood",
    "veneer",
    "laminate",
    "timber",
    "furniture material",
    "N. Patel and Company",
    "Ahmedabad",
  ],
  openGraph: {
    title: "N. Patel & Co. — Plywood, Veneer, Laminate & Timber",
    description:
      "Furniture material supplied with consistent grades and dependable service since 2000.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fdfcfa",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
