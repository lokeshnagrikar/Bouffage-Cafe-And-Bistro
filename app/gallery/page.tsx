"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ReservationModal from "@/components/modals/ReservationModal";
import CustomCursor from "@/components/shared/CustomCursor";
import { Sparkles, Camera, Eye } from "lucide-react";
import Image from "next/image";

export default function GalleryPage() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);

  const galleryItems = [
    {
      title: "Al-Fresco Evening Lights",
      category: "Ambiance",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Artisanal Espresso Brew",
      category: "Coffee",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Siciliana Italianita Pizza",
      category: "Signatures",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Red Thai Curry & Rice",
      category: "Gastronomy",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Warm Fudge Brownie",
      category: "Desserts",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Peri Peri Fries Starter",
      category: "Cafe Classics",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=80",
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
            <Camera className="w-4 h-4 text-amber-700 dark:text-amber-400" />
            <span>High-Resolution Visual Lookbook</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#2b1b17] dark:text-[#f4efea] mb-4 tracking-tight">
            Visual <span className="italic text-amber-800 dark:text-amber-400">Gallery Showcase</span>
          </h1>

          <p className="text-base sm:text-lg font-light text-[#2b1b17]/80 dark:text-[#f4efea]/80 max-w-2xl mx-auto leading-relaxed">
            Take a visual tour through our outdoor al-fresco seating, barista espresso bar, and artisanal gastronomy in Nagpur.
          </p>
        </div>
      </div>

      {/* Masonry Image Grid */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="relative h-80 rounded-[2.5rem] overflow-hidden group shadow-xl border border-[#2b1b17]/10 dark:border-white/10 cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-widest block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl font-bold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
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
