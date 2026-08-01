"use client";

import { useState, useEffect } from "react";
import { Star, MapPin, Menu as MenuIcon, X, Calendar, Coffee } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onReserveClick?: () => void;
}

export default function Navbar({ onReserveClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#hero" },
    { label: "Ambiance", href: "#ambiance" },
    { label: "Signatures", href: "#signatures" },
    { label: "Menu", href: "#menu" },
    { label: "Services", href: "#services" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#f4efea]/90 backdrop-blur-md py-3 border-b border-[#2b1b17]/10 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Anchor */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-espresso text-cream flex items-center justify-center font-serif font-bold text-xl group-hover:scale-105 transition-transform shadow-md">
            <Coffee className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <span className="font-serif font-bold text-xl text-espresso tracking-tight block">
              Bouffage
            </span>
            <span className="font-mono text-[10px] text-espresso/70 uppercase tracking-widest block -mt-1">
              Cafe & Bistro • Nagpur
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 bg-[#efe8df] border border-[#2b1b17]/10 px-8 py-2.5 rounded-full shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono font-medium text-espresso/80 hover:text-espresso transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Utility & Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Rating Badge */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#efe8df] border border-[#2b1b17]/10 text-xs font-mono">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span className="font-bold text-espresso">4.2</span>
            <span className="text-espresso/60">(3,244 Reviews)</span>
          </div>

          {/* Dark Espresso Reserve CTA Pill Button */}
          <button
            onClick={onReserveClick}
            className="espresso-pill px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Book Table</span>
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-espresso text-cream"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#efe8df] border-t border-[#2b1b17]/10 px-6 py-6 mt-3 shadow-xl"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#2b1b17]/10">
                <div className="flex items-center gap-1.5 text-xs text-espresso font-mono">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>Shankar Nagar, Nagpur</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-espresso font-mono">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  <span>4.2 ★ (3,244)</span>
                </div>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-serif font-bold text-espresso hover:text-amber-600 py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onReserveClick) onReserveClick();
                }}
                className="mt-2 w-full py-3.5 rounded-full bg-espresso text-cream font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Reserve Table</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
