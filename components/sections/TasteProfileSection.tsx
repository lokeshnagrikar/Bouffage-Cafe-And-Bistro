"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Sparkles, Sliders, Utensils, Heart } from "lucide-react";
import Image from "next/image";

export default function TasteProfileSection() {
  const popularDishes = [
    {
      id: "pizza-siciliana",
      name: "Siciliana Italianita Pizza",
      cuisine: "Italian",
      flavorProfile: { spice: 35, richness: 85, aroma: 90, crunch: 95 },
      description: "Stone-baked Italian crust with garlic, melted mozzarella, black olives, and fresh oregano aroma.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "red-thai-curry",
      name: "Red Thai Curry & Butter Rice",
      cuisine: "Continental",
      flavorProfile: { spice: 75, richness: 90, aroma: 95, crunch: 40 },
      description: "Fragrant coconut red curry with sweet Thai basil, paired alongside butter-rich aromatic rice.",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "sizzler-special",
      name: "Bouffage Signature Sizzlers",
      cuisine: "Continental",
      flavorProfile: { spice: 60, richness: 80, aroma: 98, crunch: 75 },
      description: "Tabletop sizzler with brown garlic glaze, steamed rice, crisp fries, and grilled herb veggies.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "peri-peri-fries",
      name: "Peri Peri Fries",
      cuisine: "Cafe",
      flavorProfile: { spice: 85, richness: 65, aroma: 70, crunch: 98 },
      description: "Fiery peri peri spice dust over golden double-fried potato fries with cool garlic aioli.",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const [activeDish, setActiveDish] = useState(popularDishes[0]);

  return (
    <section id="flavor-profile" className="py-24 relative overflow-hidden bg-[#f4efea] dark:bg-[#0d0e11] border-t border-[#2b1b17]/10 dark:border-white/10 transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#dfd5c6]/40 dark:bg-amber-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#efe8df] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/20 text-[#2b1b17] dark:text-[#f4efea] text-xs font-mono uppercase tracking-widest mb-4 shadow-xs">
            <Sliders className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
            <span>Interactive Gastronomy Experience</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b1b17] dark:text-[#f4efea] tracking-tight mb-4">
            Sensory <span className="italic text-amber-800 dark:text-amber-400">Taste Profile Radar</span>
          </h2>

          <p className="text-base text-[#2b1b17]/70 dark:text-[#f4efea]/70 font-light leading-relaxed">
            Select a signature dish to visualize its flavor composition across spice intensity, creaminess, aroma depth, and texture.
          </p>
        </div>

        {/* Dish Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {popularDishes.map((dish) => (
            <button
              key={dish.id}
              onClick={() => setActiveDish(dish)}
              className={`px-5 py-3 rounded-full text-xs sm:text-sm font-mono font-medium transition-all ${
                activeDish.id === dish.id
                  ? "bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] font-bold shadow-md"
                  : "bg-[#efe8df] dark:bg-white/10 text-[#2b1b17]/80 dark:text-[#f4efea]/80 border border-[#2b1b17]/10 dark:border-white/10 hover:bg-white dark:hover:bg-white/20"
              }`}
            >
              {dish.name}
            </button>
          ))}
        </div>

        {/* Sensory Display Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDish.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#efe8df] dark:bg-[#16181d] border border-[#2b1b17]/12 dark:border-white/10 rounded-[2rem] p-6 sm:p-10 shadow-espresso"
          >
            {/* Left Image & Dish Info */}
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden mb-4 shadow-card">
                <Image
                  src={activeDish.image}
                  alt={`${activeDish.name} Taste Profile`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] px-3 py-1 rounded-full text-[10px] font-mono font-bold">
                  {activeDish.cuisine}
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#2b1b17] dark:text-[#f4efea] mb-2">
                {activeDish.name}
              </h3>
              <p className="text-xs text-[#2b1b17]/70 dark:text-[#f4efea]/70 font-light leading-relaxed">
                {activeDish.description}
              </p>
            </div>

            {/* Right Interactive Flavor Radar Sliders */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono uppercase text-amber-800 dark:text-amber-400 tracking-wider mb-2 font-bold">
                Flavor Balance Metrics (₹200 - ₹600 Range)
              </div>

              {/* Spice Level */}
              <div>
                <div className="flex justify-between text-xs font-mono text-[#2b1b17] dark:text-[#f4efea] mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                    <span>Spice Intensity</span>
                  </span>
                  <span className="text-amber-800 dark:text-amber-400 font-bold">{activeDish.flavorProfile.spice}%</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#f4efea] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${activeDish.flavorProfile.spice}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-amber-600 to-red-600 rounded-full"
                  />
                </div>
              </div>

              {/* Richness / Creaminess */}
              <div>
                <div className="flex justify-between text-xs font-mono text-[#2b1b17] dark:text-[#f4efea] mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Utensils className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                    <span>Creaminess & Richness</span>
                  </span>
                  <span className="text-amber-800 dark:text-amber-400 font-bold">{activeDish.flavorProfile.richness}%</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#f4efea] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${activeDish.flavorProfile.richness}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-amber-700 to-amber-500 rounded-full"
                  />
                </div>
              </div>

              {/* Aroma Depth */}
              <div>
                <div className="flex justify-between text-xs font-mono text-[#2b1b17] dark:text-[#f4efea] mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-sage-dark dark:text-sage" />
                    <span>Aroma Depth</span>
                  </span>
                  <span className="text-sage-dark dark:text-sage font-bold">{activeDish.flavorProfile.aroma}%</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#f4efea] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${activeDish.flavorProfile.aroma}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-sage-dark to-emerald-600 rounded-full"
                  />
                </div>
              </div>

              {/* Texture & Crunch */}
              <div>
                <div className="flex justify-between text-xs font-mono text-[#2b1b17] dark:text-[#f4efea] mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                    <span>Crispness / Texture</span>
                  </span>
                  <span className="text-amber-800 dark:text-amber-400 font-bold">{activeDish.flavorProfile.crunch}%</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#f4efea] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${activeDish.flavorProfile.crunch}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-amber-700 to-amber-500 rounded-full"
                  />
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
