"use client";

import { useState } from "react";
import { Sparkles, TrendingUp, DollarSign, Users, Award, ShieldCheck, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ClientPitchOverlay() {
  const [pitchMode, setPitchMode] = useState(false);

  return (
    <>
      {/* Pitch Mode Switcher Floating Badge */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setPitchMode(!pitchMode)}
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-mono font-bold shadow-2xl transition-all ${
            pitchMode
              ? "bg-amber-500 text-obsidian shadow-amber ring-4 ring-amber-500/30"
              : "glass-panel text-amber-400 border border-amber-500/40 hover:bg-white/10"
          }`}
        >
          <Sparkles className="w-4 h-4 animate-spin-slow" />
          <span>{pitchMode ? "Pitch Presentation Mode: ON" : "Enable Owner Pitch Mode"}</span>
        </button>
      </div>

      {/* Floating Pitch Callout Drawer */}
      <AnimatePresence>
        {pitchMode && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-20 left-6 z-50 max-w-md w-full glass-panel rounded-3xl p-6 border-2 border-amber-500/60 shadow-amber bg-obsidian/95 backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span className="font-serif font-bold text-sm text-cream">
                  Sales Pitch Strategy for Bouffage Owner
                </span>
              </div>
              <button
                onClick={() => setPitchMode(false)}
                className="p-1 rounded-lg hover:bg-white/10 text-cream/70"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs font-mono text-cream-muted">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-start gap-2.5">
                <TrendingUp className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-cream block mb-0.5">1. Convert 3,244 Reviews into Table Bookings</strong>
                  Leverages Bouffage's 4.2-star rating to drive direct reservations via the 4-step booking engine.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
                <Users className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-cream block mb-0.5">2. Target 4 Persona Dining Markets</strong>
                  Showcases dedicated seating for Couples, Friends, Families, and Professionals in Shankar Nagar.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
                <DollarSign className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-cream block mb-0.5">3. Highlight Signature Menu Items</strong>
                  Promotes Peri Peri Fries, Italian Pizza, Red Thai Curry + Butter Rice, and Sizzlers with ₹200–₹600 price tags.
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-mono text-amber-400 flex items-center justify-between">
              <span>Client Pitch Deck Ready</span>
              <span>Bouffage Cafe, Nagpur</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
