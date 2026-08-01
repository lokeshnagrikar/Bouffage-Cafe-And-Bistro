"use client";

import { Star, MapPin, Phone, Clock, ArrowUp, Calendar, Coffee, ShieldCheck, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

interface FooterProps {
  onReserveClick?: () => void;
}

export default function Footer({ onReserveClick }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "Instagram", icon: Instagram, handle: "@bouffagecafenagpur" },
    { name: "Facebook", icon: Facebook, handle: "Bouffage Cafe Bistro" },
    { name: "Twitter / X", icon: Twitter, handle: "@bouffage_nagpur" },
    // { name: "YouTube", icon: Youtube, handle: "Bouffage Cafe Channel" },
    // { name: "Google Reviews", icon: Star, handle: "4.2 ★ (3,244 Reviews)" },
  ];

  return (
    <footer className="bg-[#efe8df] dark:bg-[#0d0e11] border-t border-[#2b1b17]/10 dark:border-white/10 pt-20 pb-10 text-[#2b1b17] dark:text-[#f4efea] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2b1b17]/10 dark:border-white/10">

          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] flex items-center justify-center font-serif font-bold text-xl shadow-md">
                  <Coffee className="w-5 h-5 text-amber-400 dark:text-[#0d0e11]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-2xl text-[#2b1b17] dark:text-[#f4efea] tracking-tight">
                    Bouffage Cafe & Bistro
                  </h3>
                  <span className="font-mono text-xs text-amber-800 dark:text-amber-400 uppercase tracking-widest block font-bold">
                    Shankar Nagar, Nagpur
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#2b1b17]/70 dark:text-[#f4efea]/70 font-light leading-relaxed mb-6 max-w-md">
                A premier culinary sanctuary in Nagpur. Featuring authentic Indian, Italian, Continental dining, Peri Peri Fries, Sizzlers, Red Thai Curry, Butter Rice, and Artisan Coffee.
              </p>

              {/* Social Media Demo Strip */}
              <div className="mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#2b1b17]/60 dark:text-[#f4efea]/60 font-bold block mb-3">
                  Connect On Social Media
                </span>
                <div className="flex items-center gap-2">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.name}
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`${item.name} Demo link: ${item.handle}`);
                        }}
                        className="w-10 h-10 rounded-full bg-[#f4efea] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/10 flex items-center justify-center text-[#2b1b17] dark:text-[#f4efea] hover:bg-[#2b1b17] hover:text-[#f4efea] dark:hover:bg-amber-500 dark:hover:text-[#0d0e11] transition-all cursor-pointer shadow-xs"
                        title={`${item.name}: ${item.handle} (Demo)`}
                      >
                        <Icon className="w-4 h-4" />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Rating & Metrics Pill */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f4efea] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/10 text-[#2b1b17] dark:text-[#f4efea] shadow-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span className="font-bold">4.2 ★</span>
                  <span className="opacity-60">(3,244 Reviews)</span>
                </div>

                <div className="px-3.5 py-1.5 rounded-full bg-[#f4efea] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/10 opacity-80">
                  ₹200 - ₹600 / person
                </div>
              </div>
            </div>

            {/* Reservation Prompt */}
            <div className="mt-8 pt-6 border-t border-[#2b1b17]/10 dark:border-white/10 flex items-center gap-4">
              <button
                onClick={onReserveClick}
                className="espresso-pill px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-400 dark:text-[#0d0e11]" />
                <span>Reserve Table Online</span>
              </button>

              <button
                onClick={scrollToTop}
                className="p-3 rounded-full bg-[#f4efea] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/10 text-[#2b1b17] dark:text-[#f4efea] hover:bg-white dark:hover:bg-white/20 transition-colors"
                title="Scroll to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-6 text-xs font-mono">
            <div>
              <h4 className="font-mono font-bold text-xs text-amber-800 dark:text-amber-400 uppercase tracking-widest mb-4">
                Services
              </h4>
              <ul className="space-y-2.5 text-[#2b1b17]/80 dark:text-[#f4efea]/80">
                <li><a href="#hero" className="hover:text-amber-800 dark:hover:text-amber-400 transition-colors">Dine In</a></li>
                <li><a href="#ambiance" className="hover:text-amber-800 dark:hover:text-amber-400 transition-colors">Takeaway</a></li>
                <li><a href="#signatures" className="hover:text-amber-800 dark:hover:text-amber-400 transition-colors">Delivery</a></li>
                <li><a href="#menu" className="hover:text-amber-800 dark:hover:text-amber-400 transition-colors">Coffee Bar</a></li>
                <li><a href="#services" className="hover:text-amber-800 dark:hover:text-amber-400 transition-colors">Desserts</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono font-bold text-xs text-amber-800 dark:text-amber-400 uppercase tracking-widest mb-4">
                Cuisines
              </h4>
              <ul className="space-y-2.5 text-[#2b1b17]/80 dark:text-[#f4efea]/80">
                <li>Indian</li>
                <li>Italian</li>
                <li>Continental</li>
                <li>Cafe</li>
                <li>Coffee</li>
                <li>Desserts</li>
              </ul>
            </div>
          </div>

          {/* Location & Schedule Card */}
          <div className="lg:col-span-4 bg-[#f4efea] dark:bg-[#16181d] p-6 rounded-3xl border border-[#2b1b17]/10 dark:border-white/10 flex flex-col justify-between shadow-xs">
            <div>
              <h4 className="font-serif font-bold text-base text-[#2b1b17] dark:text-[#f4efea] mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                Location & Details
              </h4>

              <div className="space-y-3 text-xs font-mono text-[#2b1b17]/80 dark:text-[#f4efea]/80 mb-4">
                <div className="flex items-start gap-2">
                  <span className="text-amber-800 dark:text-amber-400 font-bold">Address:</span>
                  <span>Shankar Nagar, Nagpur, Maharashtra</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                  <span>Hours: <strong>11:00 AM – 11:00 PM Daily</strong></span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                  <span>Location: <strong>Shankar Nagar, Nagpur</strong></span>
                </div>

                <div className="flex items-center gap-2 text-[#2b1b17]/70 dark:text-[#f4efea]/70 pt-2 border-t border-[#2b1b17]/10 dark:border-white/10">
                  <span>Connect: <strong>@bouffagecafenagpur</strong></span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#2b1b17]/10 dark:border-white/10 text-[11px] font-mono text-sage-dark dark:text-sage font-bold">
              Dine In • Takeaway • Delivery
            </div>
          </div>

        </div>

        {/* Copyright Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#2b1b17]/60 dark:text-[#f4efea]/60">
          <div>
            © Bouffage Cafe & Bistro, Shankar Nagar, Nagpur. Demo Proposal Version.
          </div>

          <div className="flex items-center gap-1.5 text-amber-800 dark:text-amber-400 font-bold">
            <ShieldCheck className="w-4 h-4 text-amber-700 dark:text-amber-400" />
            <span>Interactive Concept Prototype</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
