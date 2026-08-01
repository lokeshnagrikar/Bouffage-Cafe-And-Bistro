"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MapPin, Coffee, UtensilsCrossed, ArrowRight, Sparkles, Calendar, Pizza, Flame, Cake } from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
  onReserveClick?: () => void;
  onExploreMenuClick?: () => void;
}

export default function HeroSection({ onReserveClick, onExploreMenuClick }: HeroSectionProps) {
  const [activeCategory, setActiveCategory] = useState(0);

  const heroCategoryShowcase = [
    {
      label: "Coffee",
      icon: Coffee,
      headline: "Brewed Fresh,",
      headlineAccent: "Served Warm.",
      name: "Artisan Cappuccino & Latte",
      tag: "Barista Signature Roast",
      price: "₹200 - ₹600",
      description: "Freshly roasted arabica specialty coffee brewed to order in Shankar Nagar, Nagpur.",
      image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=2400&q=90",
    },
    {
      label: "Pizza",
      icon: Pizza,
      headline: "Hand-Stretched,",
      headlineAccent: "Stone Baked.",
      name: "Siciliana Italianita Pizza",
      tag: "Italian Signature",
      price: "₹200 - ₹600",
      description: "Artisanal crust with rich tomato passata, melted mozzarella, black olives & fresh basil.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=2400&q=90",
    },
    {
      label: "Curry",
      icon: Flame,
      headline: "Aromatic Spice,",
      headlineAccent: "Sizzling Hot.",
      name: "Red Thai Curry & Butter Rice",
      tag: "Bistro Crowd Favorite",
      price: "₹200 - ₹600",
      description: "Fragrant Thai red curry cooked in coconut milk paired with butter-infused aromatic rice.",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=2400&q=90",
    },
    {
      label: "Starters",
      icon: UtensilsCrossed,
      headline: "Golden Crispy,",
      headlineAccent: "Fiery Peri Peri.",
      name: "Peri Peri Fries",
      tag: "Crispy House Starter",
      price: "₹200 - ₹600",
      description: "Double-fried golden potato fries tossed in fiery house peri peri seasoning with garlic aioli.",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=2400&q=90",
    },
    {
      label: "Desserts",
      icon: Cake,
      headline: "Decadent Fudge,",
      headlineAccent: "Sweet Confection.",
      name: "Warm Chocolate Fudge Brownie",
      tag: "Sweet Dessert Finish",
      price: "₹200 - ₹600",
      description: "Decadent dark chocolate brownie served warm with gooey center & vanilla bean ice cream.",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=2400&q=90",
    },
  ];

  // Automatic Background & Menu Slideshow Timer (Every 4.5 Seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % heroCategoryShowcase.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [heroCategoryShowcase.length]);

  const currentItem = heroCategoryShowcase[activeCategory];

  return (
    <section id="hero" className="relative min-h-screen pt-28 sm:pt-36 pb-16 sm:pb-24 flex items-center justify-center overflow-hidden bg-[#f4efea] dark:bg-[#0d0e11] text-[#2b1b17] dark:text-[#f4efea] transition-colors duration-300">
      
      {/* Edge-to-Edge Full-Bleed Dynamic Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentItem.name}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={currentItem.image}
            alt={`${currentItem.name} - Bouffage Cafe Shankar Nagar`}
            fill
            className="object-cover object-center opacity-85 dark:opacity-75"
            priority
          />

          {/* Left-to-Right & Top-to-Bottom Mobile Gradient Vignette Mask */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f4efea] via-[#f4efea]/90 lg:via-[#f4efea]/85 to-[#f4efea]/40 dark:from-[#0d0e11] dark:via-[#0d0e11]/90 dark:lg:via-[#0d0e11]/85 dark:to-[#0d0e11]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f4efea] via-transparent to-[#f4efea]/70 dark:from-[#0d0e11] dark:via-transparent dark:to-[#0d0e11]/70" />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Editorial Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Live Ambiance Status Tag */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#efe8df]/90 dark:bg-white/10 backdrop-blur-md border border-[#2b1b17]/10 dark:border-white/20 text-[#2b1b17] dark:text-[#f4efea] text-[11px] sm:text-xs font-mono mb-4 sm:mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-bold tracking-wide uppercase">Bistro & Cafe Sanctuary</span>
              <span className="opacity-30">•</span>
              <span className="opacity-80">Nagpur</span>
            </div>

            {/* Dynamic Mobile Responsive Headline */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.headline}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#2b1b17] dark:text-[#f4efea] leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-6">
                  {currentItem.headline} <br />
                  <span className="italic animate-gradient-text font-serif">
                    {currentItem.headlineAccent}
                  </span>
                </h1>
              </motion.div>
            </AnimatePresence>

            {/* Sub-headline */}
            <p className="text-sm sm:text-lg text-[#2b1b17]/80 dark:text-[#f4efea]/80 max-w-xl mb-6 sm:mb-8 leading-relaxed font-light">
              {currentItem.description}
            </p>

            {/* Compact Category Touch Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 p-1.5 rounded-2xl sm:rounded-full bg-[#efe8df]/90 dark:bg-black/50 backdrop-blur-md border border-[#2b1b17]/10 dark:border-white/15 shadow-sm max-w-full">
              {heroCategoryShowcase.map((cat, idx) => {
                const Icon = cat.icon;
                const isActive = activeCategory === idx;
                return (
                  <button
                    key={cat.label}
                    onClick={() => setActiveCategory(idx)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-mono font-bold transition-all duration-300 border-none ${
                      isActive
                        ? "bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] shadow-md scale-105"
                        : "text-[#2b1b17]/70 dark:text-[#f4efea]/70 hover:bg-white/60 dark:hover:bg-white/20"
                    }`}
                  >
                    <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Action Buttons (Stacked Full-Width on Mobile) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8 w-full sm:w-auto">
              <button
                onClick={onExploreMenuClick}
                className="espresso-pill px-8 py-3.5 sm:py-4 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-4 h-4 text-amber-400 dark:text-[#0d0e11]" />
              </button>

              <button
                onClick={onReserveClick}
                className="px-8 py-3.5 sm:py-4 rounded-full bg-[#efe8df]/90 dark:bg-white/10 backdrop-blur-md border border-[#2b1b17]/15 dark:border-white/20 text-[#2b1b17] dark:text-[#f4efea] font-mono font-bold text-xs uppercase tracking-wider hover:bg-white dark:hover:bg-white/20 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                <span>Reserve Table</span>
              </button>
            </div>

            {/* Verified Metrics Strip */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-[#2b1b17]/15 dark:border-white/15 pt-5 text-[11px] sm:text-xs font-mono text-[#2b1b17]/80 dark:text-[#f4efea]/80 w-full max-w-lg">
              <div>
                <span className="text-[9px] sm:text-[10px] opacity-60 uppercase block mb-0.5 font-bold">Google Rating</span>
                <strong className="text-[#2b1b17] dark:text-[#f4efea] text-xs sm:text-sm flex items-center gap-1 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  4.2 Stars
                </strong>
                <span className="text-[9px] sm:text-[10px] text-amber-800 dark:text-amber-400 font-bold block">3,244 Reviews</span>
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] opacity-60 uppercase block mb-0.5 font-bold">Average Spend</span>
                <strong className="text-[#2b1b17] dark:text-[#f4efea] text-xs sm:text-sm font-bold block">₹200 - ₹600</strong>
                <span className="text-[9px] sm:text-[10px] opacity-70">per person</span>
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] opacity-60 uppercase block mb-0.5 font-bold">Services</span>
                <strong className="text-[#2b1b17] dark:text-[#f4efea] text-[11px] sm:text-xs font-bold block">Dine In • Takeaway</strong>
                <span className="text-[9px] sm:text-[10px] opacity-70">Delivery Available</span>
              </div>
            </div>
          </motion.div>

          {/* Right Floating Badge Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.3 }}
            className="lg:col-span-5 hidden lg:flex flex-col items-end justify-end h-full pt-32"
          >
            <div className="bg-[#efe8df]/85 dark:bg-black/60 backdrop-blur-xl border border-[#2b1b17]/10 dark:border-white/20 p-6 rounded-3xl max-w-xs shadow-2xl text-left space-y-3">
              <span className="text-[10px] font-mono text-amber-800 dark:text-amber-400 font-bold uppercase tracking-widest block">
                {currentItem.tag}
              </span>
              <h3 className="font-serif text-xl font-bold text-[#2b1b17] dark:text-white">
                {currentItem.name}
              </h3>
              <p className="text-xs text-[#2b1b17]/70 dark:text-white/70 font-light leading-relaxed">
                {currentItem.description}
              </p>
              <div className="pt-2 border-t border-[#2b1b17]/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-amber-800 dark:text-amber-400 font-bold">{currentItem.price}</span>
                <span className="text-[#2b1b17]/60 dark:text-white/60">Shankar Nagar, Nagpur</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
