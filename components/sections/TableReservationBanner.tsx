"use client";

import { Calendar, ArrowRight, Clock, Phone, MapPin } from "lucide-react";

interface TableReservationBannerProps {
  onReserveClick?: () => void;
}

export default function TableReservationBanner({ onReserveClick }: TableReservationBannerProps) {
  return (
    <section className="py-20 bg-[#f4efea] border-t border-[#2b1b17]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#efe8df] border border-[#2b1b17]/15 rounded-[2.5rem] p-8 sm:p-14 shadow-espresso flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          {/* Left Text Block */}
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold block mb-2">
              Let's Talk & Plan Your Visit
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso tracking-tight mb-4">
              Want to Reserve a Table?
            </h2>
            <p className="text-sm text-espresso/70 font-light leading-relaxed mb-4">
              Experience multicuisine dining in Shankar Nagar, Nagpur. Reserve comfortable indoor booth seating or open-air garden terrace tables.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-espresso/70">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-700" /> Shankar Nagar, Nagpur
              </span>
              <span>•</span>
              <span>Spend: ₹200 - ₹600</span>
              <span>•</span>
              <span>Rating: 4.2 ★ (3,244 Reviews)</span>
            </div>
          </div>

          {/* Right Action Button (Pinterest Dark Espresso Pill) */}
          <div className="flex-shrink-0">
            <button
              onClick={onReserveClick}
              className="espresso-pill px-10 py-5 text-sm font-mono font-bold uppercase tracking-wider flex items-center gap-3 shadow-xl"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Book Table Now</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
