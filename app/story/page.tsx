"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ReservationModal from "@/components/modals/ReservationModal";
import CustomCursor from "@/components/shared/CustomCursor";
import { Sparkles, Heart, ShieldCheck, Flame, Coffee, Award } from "lucide-react";
import Image from "next/image";

export default function OurStoryPage() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);

  const pillars = [
    {
      icon: Coffee,
      title: "Artisanal Roasting Process",
      desc: "We source 100% single-origin Arabica beans, roasted in small batches to preserve dark cocoa and nutty berry tasting notes.",
    },
    {
      icon: Flame,
      title: "Wood-Fired & Stone Baked",
      desc: "Our pizzas undergo 48-hour slow dough fermentation, stone-baked at 450°C for an authentic leopard-spotted crust.",
    },
    {
      icon: ShieldCheck,
      title: "Farm-to-Bistro Freshness",
      desc: "Fresh vegetables, herbs, and dairy are sourced daily from local organic growers across the Nagpur region.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f4efea] dark:bg-[#0d0e11] text-[#2b1b17] dark:text-[#f4efea] relative transition-colors duration-300">
      <CustomCursor />
      <Navbar onReserveClick={() => setReservationModalOpen(true)} />

      {/* Hero Header */}
      <div className="pt-36 pb-20 bg-[#efe8df] dark:bg-[#16181d] border-b border-[#2b1b17]/10 dark:border-white/10 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4efea] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/20 text-xs font-mono uppercase tracking-widest mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-700 dark:text-amber-400" />
            <span>Our Heritage & Culinary Ethos</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#2b1b17] dark:text-[#f4efea] mb-4 tracking-tight">
            Crafting Culinary <span className="italic text-amber-800 dark:text-amber-400">Sanctuary</span>
          </h1>

          <p className="text-base sm:text-lg font-light text-[#2b1b17]/80 dark:text-[#f4efea]/80 max-w-2xl mx-auto leading-relaxed">
            Founded with a passion for artisanal coffee, stone-baked pizzas, and welcoming hospitality in Shankar Nagar, Nagpur.
          </p>
        </div>
      </div>

      {/* Culinary Pillars Grid */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#efe8df] dark:bg-[#16181d] border border-[#2b1b17]/12 dark:border-white/10 rounded-[2.5rem] p-8 text-center shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-[#2b1b17] dark:bg-amber-500 text-amber-400 dark:text-[#0d0e11] flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#2b1b17] dark:text-[#f4efea] mb-3">
                  {item.title}
                </h3>

                <p className="text-xs text-[#2b1b17]/70 dark:text-[#f4efea]/70 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <Footer onReserveClick={() => setReservationModalOpen(true)} />

      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
      />
    </main>
  );
}
