"use client";

import { useState, useEffect } from "react";
import { Star, MapPin, Menu as MenuIcon, X, Calendar, Coffee, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface NavbarProps {
  onReserveClick?: () => void;
}

export default function Navbar({ onReserveClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMood = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navLinks = [
    { label: "Overview", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Ambiance", href: "/experience" },
    { label: "Events", href: "/private-dining" },
    { label: "Story", href: "/story" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#f4efea]/90 dark:bg-[#0d0e11]/90 backdrop-blur-md py-3 border-b border-[#2b1b17]/10 dark:border-white/10 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Anchor */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] flex items-center justify-center font-serif font-bold text-xl group-hover:scale-105 transition-transform shadow-md">
            <Coffee className="w-5 h-5 text-amber-400 dark:text-[#0d0e11]" />
          </div>
          <div>
            <span className="font-serif font-bold text-xl text-[#2b1b17] dark:text-[#f4efea] tracking-tight block">
              Bouffage
            </span>
            <span className="font-mono text-[10px] text-[#2b1b17]/70 dark:text-[#f4efea]/70 uppercase tracking-widest block -mt-1 font-bold">
              Cafe & Bistro • Nagpur
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 bg-[#efe8df] dark:bg-[#16181d] border border-[#2b1b17]/10 dark:border-white/10 px-6 py-2.5 rounded-full shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-mono font-medium text-[#2b1b17]/80 dark:text-[#f4efea]/80 hover:text-amber-800 dark:hover:text-amber-400 transition-colors uppercase tracking-wider whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Utility & Actions Cluster */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Rating Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#efe8df] dark:bg-[#16181d] border border-[#2b1b17]/10 dark:border-white/10 text-xs font-mono">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span className="font-bold text-[#2b1b17] dark:text-[#f4efea]">4.2 ★</span>
          </div>

          {/* Theme Mood Toggle Icon Button */}
          <button
            type="button"
            onClick={toggleMood}
            className="w-9 h-9 rounded-full bg-[#efe8df] dark:bg-[#16181d] border border-[#2b1b17]/10 dark:border-white/10 flex items-center justify-center text-[#2b1b17] dark:text-[#f4efea] hover:scale-105 transition-transform"
            title="Toggle Ambiance Lighting Mode"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-[#2b1b17]" />
            )}
          </button>

          {/* Reserve CTA Button */}
          <button
            onClick={onReserveClick}
            className="espresso-pill px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-400 dark:text-[#0d0e11]" />
            <span>Book Table</span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleMood}
            className="w-9 h-9 rounded-full bg-[#efe8df] dark:bg-[#16181d] border border-[#2b1b17]/10 dark:border-white/10 flex items-center justify-center text-[#2b1b17] dark:text-[#f4efea]"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#2b1b17]" />}
          </button>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#efe8df] dark:bg-[#16181d] border-t border-[#2b1b17]/10 dark:border-white/10 px-6 py-6 mt-3 shadow-xl text-[#2b1b17] dark:text-[#f4efea]"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#2b1b17]/10 dark:border-white/10">
                <div className="flex items-center gap-1.5 text-xs font-mono">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>Shankar Nagar, Nagpur</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-mono">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  <span>4.2 ★ (3,244)</span>
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-serif font-bold text-[#2b1b17] dark:text-[#f4efea] hover:text-amber-600 py-1 transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onReserveClick) onReserveClick();
                }}
                className="mt-2 w-full py-3.5 rounded-full bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-400 dark:text-[#0d0e11]" />
                <span>Reserve Table</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
