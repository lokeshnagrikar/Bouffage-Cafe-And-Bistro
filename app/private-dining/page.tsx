"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ReservationModal from "@/components/modals/ReservationModal";
import CustomCursor from "@/components/shared/CustomCursor";
import { Sparkles, Calendar, Users, Heart, Gift, Award, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function PrivateDiningPage() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);

  const eventTypes = [
    {
      title: "Private Birthday & Anniversary Soirées",
      guests: "10 - 40 Guests",
      description: "Exclusive outdoor al-fresco terrace reservation with custom fairy light décor, personalized multi-course tasting menu, and dedicated concierge service.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Corporate & Executive Dinners",
      guests: "8 - 25 Guests",
      description: "Air-conditioned quiet indoor booth enclave equipped with high-speed Wi-Fi, premium coffee service, and curated sizzling platters.",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Romantic Candlelit Booths",
      guests: "2 Guests",
      description: "Private booth arrangement adorned with fresh flowers, customized candlelit ambient lighting, signature desserts, and complimentary mocktails.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
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
            <span>Luxury Signature Feature • Private Events</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#2b1b17] dark:text-[#f4efea] mb-4 tracking-tight">
            Private Dining & <span className="italic text-amber-800 dark:text-amber-400">Event Sanctuary</span>
          </h1>

          <p className="text-base sm:text-lg font-light text-[#2b1b17]/80 dark:text-[#f4efea]/80 max-w-2xl mx-auto leading-relaxed">
            Host unforgettable birthday soirées, corporate dinners, and intimate romantic celebrations in Shankar Nagar, Nagpur.
          </p>
        </div>
      </div>

      {/* Event Packages Grid */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventTypes.map((event, idx) => (
            <div
              key={idx}
              className="bg-[#efe8df] dark:bg-[#16181d] border border-[#2b1b17]/12 dark:border-white/10 rounded-[2.5rem] p-6 flex flex-col justify-between shadow-2xl hover:shadow-3xl transition-all group"
            >
              <div>
                <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-6 shadow-md">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] px-3 py-1 rounded-full text-[10px] font-mono font-bold">
                    {event.guests}
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#2b1b17] dark:text-[#f4efea] mb-2 leading-snug">
                  {event.title}
                </h3>

                <p className="text-xs text-[#2b1b17]/70 dark:text-[#f4efea]/70 font-light leading-relaxed mb-6">
                  {event.description}
                </p>
              </div>

              <button
                onClick={() => setReservationModalOpen(true)}
                className="espresso-pill w-full py-3.5 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-400 dark:text-[#0d0e11]" />
                <span>Book Event Enclave</span>
              </button>
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
