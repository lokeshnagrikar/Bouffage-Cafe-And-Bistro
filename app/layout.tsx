import type { Metadata } from "next";
import { Inter, Outfit, Cinzel, Space_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bouffage Cafe & Bistro — Shankar Nagar, Nagpur",
  description:
    "Premium concept website for Bouffage Cafe & Bistro, Shankar Nagar, Nagpur. 4.2 Stars (3,244 Reviews). Dine In, Takeaway & Delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} ${cinzel.variable} ${spaceMono.variable} bg-[#f4efea] text-[#2b1b17] antialiased selection:bg-amber-500 selection:text-obsidian`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
