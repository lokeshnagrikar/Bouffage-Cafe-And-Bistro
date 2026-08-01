"use client";

import { useState } from "react";
import {
  X,
  Calendar,
  Clock,
  Users,
  MapPin,
  CheckCircle2,
  Sparkles,
  Heart,
  Briefcase,
  QrCode,
  ArrowRight,
  ArrowLeft,
  UtensilsCrossed,
  Sun,
  Moon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [seatingZone, setSeatingZone] = useState<"indoor" | "outdoor">("indoor");
  const [guestCount, setGuestCount] = useState<number>(2);
  const [selectedDate, setSelectedDate] = useState<string>("Today, Aug 1");
  const [selectedTime, setSelectedTime] = useState<string>("8:15 PM");
  const [occasion, setOccasion] = useState<string>("Couples / Date Night");
  const [guestName, setGuestName] = useState<string>("");
  const [guestPhone, setGuestPhone] = useState<string>("");
  const [specialRequest, setSpecialRequest] = useState<string>("");

  // Generated Booking Reference
  const [bookingRef, setBookingRef] = useState<string>("");

  const timeSlots = [
    { time: "12:30 PM", label: "Lunch Slot", available: true },
    { time: "1:45 PM", label: "Lunch Slot", available: true },
    { time: "7:00 PM", label: "Dinner Prime", available: true },
    { time: "8:15 PM", label: "Dinner Peak", available: true },
    { time: "9:30 PM", label: "Late Night", available: true },
  ];

  const dates = [
    { day: "Today", date: "Aug 1" },
    { day: "Tomorrow", date: "Aug 2" },
    { day: "Sunday", date: "Aug 3" },
    { day: "Monday", date: "Aug 4" },
  ];

  const occasions = [
    { title: "Couples / Date Night", icon: Heart, desc: "Dim candlelit table in cozy indoor booth" },
    { title: "Friends & Al-Fresco", icon: Users, desc: "Open-air garden terrace seating under lights" },
    { title: "Family Dinner", icon: Sparkles, desc: "Spacious multicuisine table layout" },
    { title: "Business Coffee", icon: Briefcase, desc: "Quiet indoor nook with coffee bar access" },
  ];

  const handleNextStep = () => {
    if (step < 3) {
      setStep((prev) => (prev + 1) as any);
    } else if (step === 3) {
      // Generate booking reference code
      const randomCode = `BOU-NAG-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingRef(randomCode);
      setStep(4);
    }
  };

  const handleReset = () => {
    setStep(1);
    setGuestName("");
    setGuestPhone("");
    setSpecialRequest("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="absolute inset-0 bg-obsidian/85 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-xl glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-cream text-xs font-mono font-bold uppercase">
                    Direct Booking Confirmation
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-cream">
                  Bouffage Cafe & Bistro
                </h3>
              </div>
              <button
                onClick={handleReset}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-cream/70 hover:text-cream transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* STEP 1: Seating Zone & Guest Count */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-cream/70 mb-3">
                    1. Select Ambiance & Seating Zone
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSeatingZone("indoor")}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        seatingZone === "indoor"
                          ? "bg-amber-500/20 border-amber-500 text-amber-400 shadow-amber"
                          : "glass-panel border-white/10 text-cream/70 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Moon className="w-5 h-5 text-amber-400" />
                        {seatingZone === "indoor" && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                      </div>
                      <h4 className="font-serif font-bold text-sm text-cream mb-0.5">Indoor Sanctuary</h4>
                      <p className="text-[11px] text-cream-muted leading-tight">
                        Climate-controlled cozy booth seating & dim ambient lighting.
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSeatingZone("outdoor")}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        seatingZone === "outdoor"
                          ? "bg-amber-500/20 border-amber-500 text-amber-400 shadow-amber"
                          : "glass-panel border-white/10 text-cream/70 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Sun className="w-5 h-5 text-sage" />
                        {seatingZone === "outdoor" && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                      </div>
                      <h4 className="font-serif font-bold text-sm text-cream mb-0.5">Outdoor Terrace</h4>
                      <p className="text-[11px] text-cream-muted leading-tight">
                        Open-air bistro garden under festive string lights in Shankar Nagar.
                      </p>
                    </button>
                  </div>
                </div>

                {/* Party Size Counter */}
                <div>
                  <label className="block text-xs font-mono uppercase text-cream/70 mb-3">
                    2. Select Party Size ({guestCount} Guests)
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 4, 6].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setGuestCount(num)}
                        className={`py-3 rounded-xl font-mono text-xs font-bold border transition-all ${
                          guestCount === num
                            ? "bg-amber-500 text-obsidian border-amber-500"
                            : "bg-white/5 border-white/10 text-cream/70 hover:bg-white/10"
                        }`}
                      >
                        {num === 6 ? "6+ Group" : `${num} ${num === 1 ? "Guest" : "Guests"}`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Continue to Step 2 */}
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full py-4 rounded-xl bg-amber-500 text-obsidian font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-amber-400 transition-colors"
                >
                  <span>Continue to Date & Time</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {/* STEP 2: Date & Time Picker */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-cream/70 mb-3">
                    3. Choose Reservation Date
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {dates.map((d) => {
                      const fullStr = `${d.day}, ${d.date}`;
                      const isSelected = selectedDate === fullStr;
                      return (
                        <button
                          key={d.date}
                          type="button"
                          onClick={() => setSelectedDate(fullStr)}
                          className={`py-3 px-2 rounded-xl text-center border transition-all ${
                            isSelected
                              ? "bg-amber-500/20 border-amber-500 text-amber-400 font-bold"
                              : "bg-white/5 border-white/10 text-cream/70 hover:bg-white/10"
                          }`}
                        >
                          <span className="block text-[10px] font-mono text-cream/50 uppercase">{d.day}</span>
                          <span className="block text-xs font-bold text-cream">{d.date}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <label className="block text-xs font-mono uppercase text-cream/70 mb-3">
                    4. Select Preferred Time Slot
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((slot) => {
                      const isSelected = selectedTime === slot.time;
                      return (
                        <button
                          key={slot.time}
                          type="button"
                          onClick={() => setSelectedTime(slot.time)}
                          className={`py-2.5 px-3 rounded-xl border text-left transition-all ${
                            isSelected
                              ? "bg-amber-500 text-obsidian border-amber-500 font-bold"
                              : "bg-white/5 border-white/10 text-cream/80 hover:bg-white/10"
                          }`}
                        >
                          <span className="block text-xs font-bold">{slot.time}</span>
                          <span className={`block text-[9px] font-mono ${isSelected ? "text-obsidian/80" : "text-amber-400"}`}>
                            {slot.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Occasion Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase text-cream/70 mb-2">
                    Occasion Focus
                  </label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-card border border-white/10 text-cream text-xs font-mono focus:outline-none focus:border-amber-500"
                  >
                    {occasions.map((o) => (
                      <option key={o.title} value={o.title}>
                        {o.title} — {o.desc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-3 rounded-xl glass-panel text-cream/70 text-xs font-mono flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="flex-1 py-4 rounded-xl bg-amber-500 text-obsidian font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-amber-400 transition-colors"
                  >
                    <span>Proceed to Guest Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Guest Info Form */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300">
                  Summary: <strong>{guestCount} Guests</strong> • <strong>{seatingZone === "indoor" ? "Indoor Booth" : "Outdoor Terrace"}</strong> • <strong>{selectedDate} at {selectedTime}</strong>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-cream/70 mb-1">
                    Primary Guest Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-cream text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-cream/70 mb-1">
                    Mobile Number (For Confirmation SMS) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-cream text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-cream/70 mb-1">
                    Special Food Pairing or Table Request (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    placeholder="e.g. Please arrange Peri Peri Fries & Red Thai Curry on arrival, or quiet window seat."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-cream text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-3 rounded-xl glass-panel text-cream/70 text-xs font-mono flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNextStep}
                    disabled={!guestName || !guestPhone}
                    className="flex-1 py-4 rounded-xl bg-amber-500 text-obsidian font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-amber-400 disabled:opacity-50 transition-colors"
                  >
                    <span>Generate Reservation Pass</span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: Digital Reservation Pass */}
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 text-center"
              >
                {/* Stylized Pass Container */}
                <div className="p-6 rounded-2xl glass-card border border-amber-500/40 bg-gradient-to-b from-amber-500/10 via-obsidian to-obsidian relative overflow-hidden text-left">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    <div>
                      <span className="text-[9px] font-mono text-amber-400 uppercase tracking-widest block">
                        Digital Dining Pass
                      </span>
                      <h4 className="font-serif font-bold text-xl text-cream">
                        Bouffage Cafe & Bistro
                      </h4>
                      <span className="text-[10px] font-mono text-cream/50">Shankar Nagar, Nagpur</span>
                    </div>

                    <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                      <QrCode className="w-8 h-8 text-amber-400" />
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono mb-4">
                    <div>
                      <span className="text-[10px] text-cream/40 block">Booking Reference</span>
                      <strong className="text-amber-400 font-bold text-sm">{bookingRef}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-cream/40 block">Guest Name</span>
                      <strong className="text-cream">{guestName || "Guest"}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-cream/40 block">Date & Time</span>
                      <strong className="text-cream">{selectedDate} @ {selectedTime}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-cream/40 block">Seating Zone</span>
                      <strong className="text-sage">{seatingZone === "indoor" ? "Indoor Booth" : "Outdoor Terrace"}</strong>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-cream/50">
                    <span>Price Point: ₹200 - ₹600</span>
                    <span className="text-amber-400">Instant Seat Allocation</span>
                  </div>
                </div>

                <div className="text-xs text-cream-muted font-light">
                  This interactive pass showcases the seamless guest reservation flow designed for Bouffage Cafe & Bistro owner presentation.
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full py-3.5 rounded-xl bg-amber-500 text-obsidian font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors"
                >
                  Done & Close Pass
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
