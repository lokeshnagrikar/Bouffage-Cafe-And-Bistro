"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AmbianceSection from "@/components/sections/AmbianceSection";
import SignatureDishesSection from "@/components/sections/SignatureDishesSection";
import TasteProfileSection from "@/components/sections/TasteProfileSection";
import FoodConciergeSection from "@/components/sections/FoodConciergeSection";
import MenuMatrixSection from "@/components/sections/MenuMatrixSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DynamicBookingCTA from "@/components/sections/DynamicBookingCTA";
import TableReservationBanner from "@/components/sections/TableReservationBanner";
import Footer from "@/components/layout/Footer";
import ReservationModal from "@/components/modals/ReservationModal";
import ThemeMoodToggle from "@/components/shared/ThemeMoodToggle";
import CustomCursor from "@/components/shared/CustomCursor";

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
    <main className="min-h-screen bg-[#f4efea] text-espresso relative selection:bg-espresso selection:text-cream">
      {/* Custom Physics Mouse Follower */}
      <CustomCursor />

      {/* Global Navigation Bar */}
      <Navbar onReserveClick={handleOpenReservation} />

      {/* Hero Section */}
      <HeroSection
        onReserveClick={handleOpenReservation}
        onExploreMenuClick={handleExploreMenu}
      />

      {/* Ambiance & Spatial Experience Section */}
      <AmbianceSection />

      {/* Signature Dishes Showcase Section */}
      <SignatureDishesSection />

      {/* Interactive Gastronomy Matchmaker Quiz */}
      <FoodConciergeSection />

      {/* Sensory Taste Profile Radar Section */}
      <TasteProfileSection />

      {/* Gastronomy Menu Matrix Section */}
      <MenuMatrixSection />

      {/* Social Proof & Customer Reviews Section */}
      <SocialProofSection />

      {/* Services & Dining Channels Section */}
      <ServicesSection onReserveClick={handleOpenReservation} />

      {/* Dynamic Real-Time Table Booking CTA Section */}
      <DynamicBookingCTA />

      {/* "Want to Reserve a Table?" Callout Banner */}
      <TableReservationBanner onReserveClick={handleOpenReservation} />

      {/* Global Footer & Shankar Nagar Location Anchor */}
      <Footer onReserveClick={handleOpenReservation} />

      {/* Floating Dynamic Ambiance Mood Switcher */}
      <ThemeMoodToggle />

      {/* Table Reservation 4-Step Booking Engine Drawer */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={handleCloseReservation}
      />
    </main>
  );
}
