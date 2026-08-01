"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ReservationModal from "@/components/modals/ReservationModal";
import CustomCursor from "@/components/shared/CustomCursor";
import { MapPin, Clock, Phone, Mail, Star, Calendar, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f4efea] text-espresso relative">
      <CustomCursor />
      <Navbar onReserveClick={() => setReservationModalOpen(true)} />

      <div className="pt-32 pb-12 bg-[#efe8df] border-b border-[#2b1b17]/10 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold block mb-2">
            Location & Visitor Concierge
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-espresso mb-3">
            Contact Bouffage
          </h1>
          <p className="text-sm font-mono text-espresso/70 max-w-xl mx-auto">
            Located in Shankar Nagar, Nagpur. Backed by 3,244 Verified Reviews with a 4.2-star rating.
          </p>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Location & Details Card */}
          <div className="lg:col-span-6 cream-card p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-espresso text-cream text-xs font-mono font-bold mb-6">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Shankar Nagar, Nagpur</span>
              </div>

              <h2 className="font-serif text-3xl font-bold text-espresso mb-4">
                Bouffage Cafe & Bistro
              </h2>

              <p className="text-xs sm:text-sm text-espresso/70 font-light leading-relaxed mb-6">
                A premier culinary sanctuary in Nagpur offering authentic Indian, Italian, Continental, Cafe Starters, Artisan Coffee, and Desserts.
              </p>

              <div className="space-y-4 text-xs font-mono text-espresso/80">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-black/5">
                  <MapPin className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>Landmark: Shankar Nagar, Nagpur, Maharashtra</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-black/5">
                  <Clock className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>Schedule: <strong>11:00 AM – 11:00 PM Daily</strong></span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-black/5">
                  <Phone className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>Location: <strong>Shankar Nagar, Nagpur</strong></span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-black/5">
                  <Mail className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>Connect: <strong>@bouffagecafenagpur</strong></span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#2b1b17]/10 flex items-center justify-between">
              <span className="text-xs font-mono text-espresso/60">Average Spend: ₹200 - ₹600</span>
              <button
                onClick={() => setReservationModalOpen(true)}
                className="espresso-pill px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Book Table Online</span>
              </button>
            </div>
          </div>

          {/* Interactive Map & Booking Engine Card */}
          <div className="lg:col-span-6 bg-[#efe8df] border border-[#2b1b17]/15 rounded-[2rem] p-8 flex flex-col justify-between shadow-espresso">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold block mb-2">
                Table Booking Engine
              </span>
              <h3 className="font-serif text-2xl font-bold text-espresso mb-3">
                Reserve Your Table Online
              </h3>
              <p className="text-xs text-espresso/70 font-light leading-relaxed mb-6">
                Use our 4-step booking engine to select your party size, indoor/outdoor preference, date, and preferred time slot.
              </p>

              <div className="p-4 rounded-2xl bg-white/70 border border-black/5 space-y-2 text-xs font-mono mb-6">
                <div className="flex items-center justify-between">
                  <span>Google Reviews Rating:</span>
                  <strong className="text-espresso flex items-center gap-1 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> 4.2 ★ (3,244 Reviews)
                  </strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Dine-In Ambiance:</span>
                  <strong className="text-espresso font-bold">Indoor Booths & Outdoor Terrace</strong>
                </div>
              </div>
            </div>

            <button
              onClick={() => setReservationModalOpen(true)}
              className="w-full py-4 rounded-full bg-espresso text-cream font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:bg-espresso-dark transition-all"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Launch Table Booking Engine</span>
            </button>
          </div>

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
