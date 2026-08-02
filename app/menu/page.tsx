"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import MenuMatrixSection from "@/components/sections/MenuMatrixSection";
import FoodConciergeSection from "@/components/sections/FoodConciergeSection";
import TasteProfileSection from "@/components/sections/TasteProfileSection";
import TableReservationBanner from "@/components/sections/TableReservationBanner";
import Footer from "@/components/layout/Footer";
import ReservationModal from "@/components/modals/ReservationModal";
import CustomCursor from "@/components/shared/CustomCursor";

export default function MenuPage() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f4efea] dark:bg-[#0d0e11] text-[#2b1b17] dark:text-[#f4efea] relative transition-colors duration-300">
      <CustomCursor />
      <Navbar onReserveClick={() => setReservationModalOpen(true)} />

      <div className="pt-36 pb-12 bg-[#efe8df] dark:bg-[#16181d] border-b border-[#2b1b17]/10 dark:border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 dark:text-amber-400 font-bold block mb-2">
            Gastronomy & Multi-Cuisine Directory
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2b1b17] dark:text-[#f4efea] mb-3">
            Bouffage Cafe Menu & Gastronomy
          </h1>
          <p className="text-sm font-mono text-[#2b1b17]/70 dark:text-[#f4efea]/70 max-w-xl mx-auto">
            Explore authentic Indian, Italian, Continental, Cafe Starters, Artisan Coffee & Desserts in Shankar Nagar, Nagpur. Price Range: ₹200 – ₹600.
          </p>
        </div>
      </div>

      {/* Main Gastronomy Directory */}
      <MenuMatrixSection />

      {/* Interactive Food Matchmaker Quiz */}
      <FoodConciergeSection />

      {/* Sensory Taste Radar */}
      <TasteProfileSection />

      <TableReservationBanner onReserveClick={() => setReservationModalOpen(true)} />
      <Footer onReserveClick={() => setReservationModalOpen(true)} />

      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
      />
    </main>
  );
}
