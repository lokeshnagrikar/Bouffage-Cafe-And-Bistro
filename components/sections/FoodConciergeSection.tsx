"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Flame, Utensils, Compass, ArrowRight, RefreshCw, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function FoodConciergeSection() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [vibe, setVibe] = useState<"date" | "friends" | "family" | "work">("date");
  const [flavor, setFlavor] = useState<"spicy" | "cheesy" | "comfort" | "sweet">("spicy");

  const recommendations = {
    "date-spicy": {
      dish: "Red Thai Curry & Butter Rice",
      cuisine: "Continental / Asian Fusion",
      price: "₹200 - ₹600",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1200&q=80",
      reason: "Fragrant coconut red curry paired with butter rice in our dim candlelit indoor seating.",
      pairing: "Craft Cold Brewed Iced Coffee",
    },
    "date-cheesy": {
      dish: "Siciliana Italianita Pizza",
      cuisine: "Italian Cuisine",
      price: "₹200 - ₹600",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
      reason: "Authentic stone-baked pizza loaded with melted mozzarella, black olives, and fresh basil.",
      pairing: "Artisan Cappuccino & Brownie",
    },
    "friends-spicy": {
      dish: "Peri Peri Fries & Sizzlers",
      cuisine: "Cafe & Continental",
      price: "₹200 - ₹600",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=80",
      reason: "Crispy fiery peri peri fries served hot alongside our smoking tabletop sizzlers on the outdoor terrace.",
      pairing: "Cold Brew Coffee",
    },
    "default": {
      dish: "Bouffage Signature Sizzlers",
      cuisine: "Continental",
      price: "₹200 - ₹600",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      reason: "Generous herb-marinated veggies, French fries, steamed rice, and garlic glaze served sizzling hot.",
      pairing: "Warm Fudge Brownie",
    },
  };

  const getRecommendation = () => {
    const key = `${vibe}-${flavor}`;
    return recommendations[key as keyof typeof recommendations] || recommendations["default"];
  };

  const currentRec = getRecommendation();

  return (
    <section id="concierge" className="py-24 relative overflow-hidden bg-[#f4efea] dark:bg-[#0d0e11] border-t border-[#2b1b17]/10 dark:border-white/10 transition-colors duration-300">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-[#dfd5c6]/40 dark:bg-amber-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#efe8df] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/20 text-[#2b1b17] dark:text-[#f4efea] text-xs font-mono uppercase tracking-widest mb-4 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
            <span>Interactive Culinary Concierge</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b1b17] dark:text-[#f4efea] tracking-tight mb-4">
            What Are You <span className="italic text-amber-800 dark:text-amber-400">Craving Today?</span>
          </h2>

          <p className="text-base text-[#2b1b17]/70 dark:text-[#f4efea]/70 font-light leading-relaxed">
            Answer 2 micro questions and our matchmaker will curate your ideal Bouffage food & ambiance pairing in Shankar Nagar.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="max-w-3xl mx-auto bg-[#efe8df] dark:bg-[#16181d] border border-[#2b1b17]/12 dark:border-white/10 rounded-[2rem] p-6 sm:p-10 shadow-espresso relative overflow-hidden">
          
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <span className="text-xs font-mono text-amber-800 dark:text-amber-400 font-bold uppercase tracking-wider block">
                Question 1 of 2 • Dining Occasion
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#2b1b17] dark:text-[#f4efea]">
                What is your dining atmosphere vibe?
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { id: "date", label: "Couples / Date Night", sub: "Intimate indoor candlelit booth" },
                  { id: "friends", label: "Friends Hangout", sub: "Outdoor al-fresco terrace" },
                  { id: "family", label: "Family Dinner", sub: "Spacious multi-cuisine table" },
                  { id: "work", label: "Coffee & Work", sub: "Quiet air-conditioned nook" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setVibe(item.id as any);
                      setStep(2);
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      vibe === item.id
                        ? "bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] border-[#2b1b17] dark:border-amber-500"
                        : "bg-[#f4efea] dark:bg-white/10 border-[#2b1b17]/10 dark:border-white/10 text-[#2b1b17]/80 dark:text-[#f4efea]/80 hover:bg-white dark:hover:bg-white/20"
                    }`}
                  >
                    <span className="font-bold text-sm block mb-1">{item.label}</span>
                    <span className="text-[11px] opacity-75 leading-tight block">{item.sub}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <span className="text-xs font-mono text-amber-800 dark:text-amber-400 font-bold uppercase tracking-wider block">
                Question 2 of 2 • Flavor Mood
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#2b1b17] dark:text-[#f4efea]">
                Which taste profile are you in the mood for?
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { id: "spicy", label: "Aromatic & Fiery Spice", sub: "Red Thai Curry or Peri Peri" },
                  { id: "cheesy", label: "Italian Melted Mozzarella", sub: "Stone-baked Siciliana Pizza" },
                  { id: "comfort", label: "Sizzling Hot Platters", sub: "Continental Sizzlers & Rice" },
                  { id: "sweet", label: "Artisan Coffee & Desserts", sub: "Espresso & Warm Brownie" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setFlavor(item.id as any);
                      setStep(3);
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      flavor === item.id
                        ? "bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] border-[#2b1b17] dark:border-amber-500"
                        : "bg-[#f4efea] dark:bg-white/10 border-[#2b1b17]/10 dark:border-white/10 text-[#2b1b17]/80 dark:text-[#f4efea]/80 hover:bg-white dark:hover:bg-white/20"
                    }`}
                  >
                    <span className="font-bold text-sm block mb-1">{item.label}</span>
                    <span className="text-[11px] opacity-75 leading-tight block">{item.sub}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-800 dark:text-amber-400 font-bold uppercase tracking-wider">
                  Curated Matchmaker Result
                </span>
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-mono text-[#2b1b17]/60 dark:text-[#f4efea]/60 hover:text-[#2b1b17] dark:hover:text-white flex items-center gap-1 font-bold"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Start Over</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5 relative h-56 w-full rounded-2xl overflow-hidden shadow-card">
                  <Image src={currentRec.image} alt={currentRec.dish} fill className="object-cover" />
                </div>

                <div className="sm:col-span-7 space-y-3">
                  <div className="inline-block text-[10px] font-mono text-[#f4efea] dark:text-[#0d0e11] bg-[#2b1b17] dark:bg-amber-500 px-2.5 py-0.5 rounded-full font-bold">
                    {currentRec.cuisine}
                  </div>

                  <h4 className="font-serif text-2xl font-bold text-[#2b1b17] dark:text-[#f4efea]">
                    {currentRec.dish}
                  </h4>

                  <p className="text-xs text-[#2b1b17]/70 dark:text-[#f4efea]/70 font-light leading-relaxed">
                    {currentRec.reason}
                  </p>

                  <div className="p-3 rounded-xl bg-[#f4efea] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/10 text-xs font-mono text-[#2b1b17] dark:text-[#f4efea]">
                    Pairing: <strong>{currentRec.pairing}</strong>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#2b1b17] dark:text-[#f4efea] font-bold">{currentRec.price}</span>
                    <a
                      href="#signatures"
                      className="text-[#2b1b17] dark:text-amber-400 hover:text-amber-800 flex items-center gap-1 font-bold"
                    >
                      <span>Inspect Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
