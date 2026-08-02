"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AmbianceSection from "@/components/sections/AmbianceSection";
import SignatureDishesSection from "@/components/sections/SignatureDishesSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import DynamicBookingCTA from "@/components/sections/DynamicBookingCTA";
import TableReservationBanner from "@/components/sections/TableReservationBanner";
import LocationMapSection from "@/components/sections/LocationMapSection";
import Footer from "@/components/layout/Footer";
import ReservationModal from "@/components/modals/ReservationModal";
import CustomCursor from "@/components/shared/CustomCursor";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function Home() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);

  const handleOpenReservation = () => {
    const bookingCta = document.getElementById("book-table-cta");
    if (bookingCta) {
      bookingCta.scrollIntoView({ behavior: "smooth" });
    } else {
      setReservationModalOpen(true);
    }
  };

  const handleCloseReservation = () => {
    setReservationModalOpen(false);
  };

  const handleExploreMenu = () => {
    const menuElement = document.getElementById("signatures");
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#f4efea] dark:bg-[#0d0e11] text-[#2b1b17] dark:text-[#f4efea] relative selection:bg-[#2b1b17] selection:text-[#f4efea] transition-colors duration-300">
      {/* Custom Physics Mouse Follower */}
      <CustomCursor />

      {/* Global Navigation Bar */}
      <Navbar onReserveClick={handleOpenReservation} />

      {/* 1. Hero Section (Overview & Automatic Slideshow) */}
      <HeroSection
        onReserveClick={handleOpenReservation}
        onExploreMenuClick={handleExploreMenu}
      />

      {/* 2. Signature Dishes Showcase Section */}
      <ScrollReveal direction="up">
        <SignatureDishesSection />
      </ScrollReveal>

      {/* 3. Ambiance & Spatial Experience Section */}
      <ScrollReveal direction="up" delay={0.1}>
        <AmbianceSection />
      </ScrollReveal>

      {/* 4. Social Proof & Customer Reviews Section */}
      <ScrollReveal direction="up" delay={0.1}>
        <SocialProofSection />
      </ScrollReveal>

      {/* 5. Dynamic Real-Time Table Booking CTA Section */}
      <ScrollReveal direction="up" delay={0.1}>
        <DynamicBookingCTA />
      </ScrollReveal>

      {/* 6. Interactive Google Maps Location Section */}
      <ScrollReveal direction="up" delay={0.1}>
        <LocationMapSection />
      </ScrollReveal>

      {/* 7. "Want to Reserve a Table?" Callout Banner */}
      <ScrollReveal direction="up" delay={0.1}>
        <TableReservationBanner onReserveClick={handleOpenReservation} />
      </ScrollReveal>

      {/* 8. Global Footer & Shankar Nagar Location Anchor */}
      <Footer onReserveClick={handleOpenReservation} />

      {/* Table Reservation 4-Step Booking Engine Drawer */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={handleCloseReservation}
      />
    </main>
  );
}
