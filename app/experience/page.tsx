"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import AmbianceSection from "@/components/sections/AmbianceSection";
import TableReservationBanner from "@/components/sections/TableReservationBanner";
import Footer from "@/components/layout/Footer";
import ReservationModal from "@/components/modals/ReservationModal";
import CustomCursor from "@/components/shared/CustomCursor";

export default function ExperiencePage() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f4efea] text-espresso relative">
      <CustomCursor />
      <Navbar onReserveClick={() => setReservationModalOpen(true)} />

      <div className="pt-32 pb-8 bg-[#efe8df] border-b border-[#2b1b17]/10 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold block mb-2">
            Dual Venue Ambiance Design
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-espresso mb-3">
            The Bouffage Experience
          </h1>
          <p className="text-sm font-mono text-espresso/70 max-w-xl mx-auto">
            Indoor Climate-Controlled Booths & Outdoor Al-Fresco Terrace tailored for Couples, Friends, Families, and Professionals in Shankar Nagar, Nagpur.
          </p>
        </div>
      </div>

      <AmbianceSection />

      <TableReservationBanner onReserveClick={() => setReservationModalOpen(true)} />
      <Footer onReserveClick={() => setReservationModalOpen(true)} />

      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
      />
    </main>
  );
}
