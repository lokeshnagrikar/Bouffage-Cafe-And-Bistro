"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Users, MapPin, CheckCircle, Sparkles, MessageCircle, QrCode, ArrowRight, ShieldCheck, Heart } from "lucide-react";

export default function DynamicBookingCTA() {
  const [guests, setGuests] = useState(2);
  const [zone, setZone] = useState<"indoor" | "outdoor">("outdoor");
  const [date, setDate] = useState("Today");
  const [timeSlot, setTimeSlot] = useState("08:00 PM");
  const [guestName, setGuestName] = useState("");
  const [phone, setPhone] = useState("");
  const [specialNotes, setSpecialNotes] = useState("");
  const [isBooked, setIsBooked] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const timeSlots = [
    "12:30 PM", "01:30 PM", "02:30 PM",
    "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"
  ];

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !phone) {
      alert("Please enter your name and phone number to complete reservation.");
      return;
    }
    const refCode = "BOUF-NAG-" + Math.floor(1000 + Math.random() * 9000);
    setBookingRef(refCode);
    setIsBooked(true);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Bouffage Cafe & Bistro, I've booked a table online!\n\n` +
      `📌 Booking Ref: ${bookingRef}\n` +
      `👤 Name: ${guestName}\n` +
      `📞 Phone: ${phone}\n` +
      `👥 Party Size: ${guests} Guests\n` +
      `📍 Zone: ${zone === "indoor" ? "Indoor Climate Booth" : "Outdoor Al-Fresco Terrace"}\n` +
      `📅 Date & Time: ${date} at ${timeSlot}\n` +
      `💬 Notes: ${specialNotes || "None"}\n\n` +
      `Please confirm seat allocation at Shankar Nagar, Nagpur.`
    );
    return `https://wa.me/?text=${text}`;
  };

  return (
    <section id="book-table-cta" className="py-16 sm:py-24 relative overflow-hidden bg-[#efe8df] dark:bg-[#0d0e11] border-t border-[#2b1b17]/10 dark:border-white/10 transition-colors duration-300">
      {/* Ambient Radial Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-[#dfd5c6]/50 dark:bg-amber-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4efea] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/20 text-[#2b1b17] dark:text-[#f4efea] text-xs font-mono uppercase tracking-widest mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
            <span>Instant Dynamic Booking Engine</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b1b17] dark:text-[#f4efea] tracking-tight mb-4">
            Reserve Your Table <span className="italic text-amber-800 dark:text-amber-400">in Real-Time</span>
          </h2>

          <p className="text-sm sm:text-base text-[#2b1b17]/70 dark:text-[#f4efea]/70 font-light leading-relaxed">
            Select your guest count, preferred dining zone in Shankar Nagar, date & time slot. Instant booking confirmation pass generated automatically.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto bg-[#f4efea] dark:bg-[#16181d] border border-[#2b1b17]/15 dark:border-white/10 rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-12 shadow-espresso">
          
          <AnimatePresence mode="wait">
            {!isBooked ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                onSubmit={handleConfirmBooking}
                className="space-y-6 sm:space-y-8"
              >
                {/* Step 1: Party Size & Zone Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pb-6 sm:pb-8 border-b border-[#2b1b17]/10 dark:border-white/10">
                  
                  {/* Party Size Selector */}
                  <div>
                    <label className="text-xs font-mono font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider block mb-3">
                      1. Party Size (Guests)
                    </label>
                    <div className="flex items-center gap-4 bg-[#efe8df] dark:bg-white/10 p-3 rounded-2xl border border-[#2b1b17]/10 dark:border-white/10">
                      <button
                        type="button"
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="w-10 h-10 rounded-xl bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] font-bold text-lg flex items-center justify-center"
                      >
                        -
                      </button>
                      <div className="flex-1 text-center font-mono font-bold text-lg sm:text-xl text-[#2b1b17] dark:text-[#f4efea]">
                        {guests} {guests === 1 ? "Guest" : "Guests"}
                      </div>
                      <button
                        type="button"
                        onClick={() => setGuests(Math.min(12, guests + 1))}
                        className="w-10 h-10 rounded-xl bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] font-bold text-lg flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Zone Preference */}
                  <div>
                    <label className="text-xs font-mono font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider block mb-3">
                      2. Dining Zone Atmosphere
                    </label>
                    <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                      <button
                        type="button"
                        onClick={() => setZone("indoor")}
                        className={`p-3 rounded-2xl border text-xs font-mono font-bold text-left transition-all ${
                          zone === "indoor"
                            ? "bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] border-[#2b1b17] dark:border-amber-500 shadow-md"
                            : "bg-[#efe8df] dark:bg-white/10 text-[#2b1b17]/70 dark:text-[#f4efea]/70 border-[#2b1b17]/10 dark:border-white/10"
                        }`}
                      >
                        <span className="block mb-0.5">Indoor Booth</span>
                        <span className="text-[10px] font-normal opacity-75">Air-Conditioned</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setZone("outdoor")}
                        className={`p-3 rounded-2xl border text-xs font-mono font-bold text-left transition-all ${
                          zone === "outdoor"
                            ? "bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] border-[#2b1b17] dark:border-amber-500 shadow-md"
                            : "bg-[#efe8df] dark:bg-white/10 text-[#2b1b17]/70 dark:text-[#f4efea]/70 border-[#2b1b17]/10 dark:border-white/10"
                        }`}
                      >
                        <span className="block mb-0.5">Outdoor Terrace</span>
                        <span className="text-[10px] font-normal opacity-75">Al-Fresco Bistro</span>
                      </button>
                    </div>
                  </div>

                </div>

                {/* Step 2: Date & Time Slot Picker */}
                <div className="pb-6 sm:pb-8 border-b border-[#2b1b17]/10 dark:border-white/10">
                  <label className="text-xs font-mono font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider block mb-3">
                    3. Preferred Date & Time Slot
                  </label>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-4">
                    {["Today", "Tomorrow", "This Friday", "This Saturday"].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDate(d)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-mono font-bold transition-all ${
                          date === d
                            ? "bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] shadow-sm"
                            : "bg-[#efe8df] dark:bg-white/10 text-[#2b1b17]/70 dark:text-[#f4efea]/70 border border-[#2b1b17]/10 dark:border-white/10"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setTimeSlot(slot)}
                        className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-mono transition-all ${
                          timeSlot === slot
                            ? "bg-amber-700 dark:bg-amber-500 text-white dark:text-[#0d0e11] font-bold shadow-md"
                            : "bg-[#efe8df] dark:bg-white/10 text-[#2b1b17]/80 dark:text-[#f4efea]/80 border border-[#2b1b17]/10 dark:border-white/10"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Guest Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="text-xs font-mono font-bold text-[#2b1b17] dark:text-[#f4efea] block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-2xl bg-[#efe8df] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/10 text-[#2b1b17] dark:text-[#f4efea] text-xs font-mono focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono font-bold text-[#2b1b17] dark:text-[#f4efea] block mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-2xl bg-[#efe8df] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/10 text-[#2b1b17] dark:text-[#f4efea] text-xs font-mono focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-[#2b1b17] dark:text-[#f4efea] block mb-2">
                    Special Occasion or Dish Notes (Optional)
                  </label>
                  <input
                    type="text"
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    placeholder="e.g. Date night booth, or order Peri Peri Fries on arrival"
                    className="w-full px-4 py-3 rounded-2xl bg-[#efe8df] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/10 text-[#2b1b17] dark:text-[#f4efea] text-xs font-mono focus:outline-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="espresso-pill w-full py-4 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
                >
                  <CheckCircle className="w-4 h-4 text-amber-400 dark:text-[#0d0e11]" />
                  <span>Generate Digital Reservation Pass</span>
                </button>
              </motion.form>
            ) : (
              /* Step 4: Digital Reservation Pass Display */
              <motion.div
                key="pass"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#2b1b17] dark:bg-[#0d0e11] text-[#f4efea] p-6 sm:p-8 rounded-[1.8rem] sm:rounded-[2rem] shadow-2xl space-y-6"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/15">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                      Table Confirmed
                    </span>
                  </div>
                  <span className="font-mono text-xs text-white/60">
                    Ref: <strong className="text-white">{bookingRef}</strong>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <span className="text-[10px] font-mono text-white/50 uppercase block mb-1">Guest Name</span>
                    <h3 className="font-serif text-2xl font-bold text-white">{guestName}</h3>
                    <p className="text-xs font-mono text-amber-400 mt-1">{phone}</p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-2xl font-mono text-xs space-y-1.5 border border-white/10">
                    <div className="flex justify-between">
                      <span className="text-white/60">Party Size:</span>
                      <strong className="text-white">{guests} Guests</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Zone:</span>
                      <strong className="text-amber-400">
                        {zone === "indoor" ? "Indoor Booth" : "Outdoor Terrace"}
                      </strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Date & Time:</span>
                      <strong className="text-white">{date} at {timeSlot}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Location:</span>
                      <strong className="text-white">Shankar Nagar, Nagpur</strong>
                    </div>
                  </div>
                </div>

                {/* Digital Barcode / QR Code Frame */}
                <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-white text-black">
                      <QrCode className="w-10 h-10" />
                    </div>
                    <div className="text-left text-[11px] font-mono text-white/70">
                      <span className="block font-bold text-white">Digital Reservation Pass</span>
                      <span>Show this pass at counter upon arrival</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all shadow-md flex-1 sm:flex-none"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send to WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setIsBooked(false)}
                      className="px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-all"
                    >
                      Modify
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
