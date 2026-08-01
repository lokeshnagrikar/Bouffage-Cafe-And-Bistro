import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Playfair_Display, Space_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
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
        className={`${cormorant.variable} ${playfair.variable} ${jakarta.variable} ${spaceMono.variable} font-sans bg-[#f4efea] text-[#2b1b17] antialiased selection:bg-amber-500 selection:text-obsidian`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
