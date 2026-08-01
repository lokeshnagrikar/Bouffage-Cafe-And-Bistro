"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ReservationModal from "@/components/modals/ReservationModal";
import CustomCursor from "@/components/shared/CustomCursor";
import { HelpCircle, ChevronDown, ChevronUp, MapPin, Calendar, Utensils, Clock } from "lucide-react";

export default function FAQPage() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Where is Bouffage Cafe & Bistro located in Nagpur?",
      a: "Bouffage Cafe & Bistro is located in Shankar Nagar, Nagpur, Maharashtra. We feature both climate-controlled indoor booth seating and a vibrant outdoor al-fresco garden terrace.",
    },
    {
      q: "What are the operating hours of Bouffage Cafe?",
      a: "We are open daily from 11:00 AM to 11:00 PM, serving lunch, evening coffee, multi-course dinners, and late-night desserts.",
    },
    {
      q: "How does the online table reservation system work?",
      a: "You can use our 4-step online booking engine to choose your party size (1 to 12 guests), preferred atmosphere zone (Indoor Booth vs. Outdoor Terrace), date, and time slot. Upon submission, a Digital Reservation Pass with a unique booking reference and QR code is generated instantly, with a direct WhatsApp notification trigger to our management.",
    },
    {
      q: "What cuisines and popular items are served at Bouffage?",
      a: "We specialize in multicuisine dining spanning Indian, Italian, Continental, Cafe Starters, Artisan Coffee, and Desserts. Our crowd favorites include Peri Peri Fries, Siciliana Italianita Pizza, Red Thai Curry with Butter Rice, Sizzler Platters, and Warm Chocolate Fudge Brownies.",
    },
    {
      q: "What is the average price range per person?",
      a: "The average spend at Bouffage Cafe & Bistro ranges from ₹200 to ₹600 per person.",
    },
    {
      q: "Are takeaway and delivery services available?",
      a: "Yes! We offer express counter pick-up takeaway as well as doorstep delivery across Shankar Nagar and nearby areas in Nagpur.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f4efea] dark:bg-[#0d0e11] text-[#2b1b17] dark:text-[#f4efea] relative transition-colors duration-300">
      <CustomCursor />
      <Navbar onReserveClick={() => setReservationModalOpen(true)} />

      {/* Header */}
      <div className="pt-32 pb-12 bg-[#efe8df] dark:bg-[#16181d] border-b border-[#2b1b17]/10 dark:border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 dark:text-amber-400 font-bold block mb-2">
            Growth & Premium Plan Feature • Guest FAQs
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2b1b17] dark:text-[#f4efea] mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-sm font-mono text-[#2b1b17]/70 dark:text-[#f4efea]/70 max-w-xl mx-auto">
            Everything guests need to know about dining, table reservations, location, menu, and service channels at Bouffage Cafe, Shankar Nagar.
          </p>
        </div>
      </div>

      {/* FAQ Accordion List */}
      <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#efe8df] dark:bg-[#16181d] border border-[#2b1b17]/12 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-lg font-bold text-[#2b1b17] dark:text-[#f4efea] flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-amber-700 dark:text-amber-400 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-700 dark:text-amber-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#2b1b17]/40 dark:text-[#f4efea]/40 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#2b1b17]/80 dark:text-[#f4efea]/80 font-light leading-relaxed border-t border-[#2b1b17]/10 dark:border-white/10">
                    {faq.a}
                  </div>
                )}
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
