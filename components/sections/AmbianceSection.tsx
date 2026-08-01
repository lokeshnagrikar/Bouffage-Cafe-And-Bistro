"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Users, Sparkles, Briefcase, MapPin, Check, Sun, Moon, Volume2, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function AmbianceSection() {
  const [activeTab, setActiveTab] = useState<"couples" | "friends" | "families" | "professionals">("couples");

  const personas = [
    {
      id: "couples",
      label: "Couples & Dates",
      icon: Heart,
      title: "Intimate Mood & Candlelit Booths",
      setting: "Indoor Air-Conditioned Comfort",
      tag: "Romantic Ambiance",
      description:
        "Soft ambient lighting, plush booth seating, and quiet background music. Tailored for romantic date nights, anniversary dinners, and evening espresso in Shankar Nagar.",
      highlights: ["Dimmed Candlelit Lighting", "Private Corner Booths", "Pairings with Italian Pizza & Desserts"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "friends",
      label: "Friends & Hangouts",
      icon: Users,
      title: "Al-Fresco Bistro Terrace",
      setting: "Outdoor Garden Seating",
      tag: "Vibrant Group Atmosphere",
      description:
        "Spacious outdoor seating under festive string lights. The ultimate setting for sharing Peri Peri Fries, Red Thai Curry, Butter Rice, and Sizzlers with your favorite crowd.",
      highlights: ["Open-Air Garden Setting", "Festoon Bistro String Lights", "Large Group Sharing Tables"],
      image: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "families",
      label: "Family Dinners",
      icon: Sparkles,
      title: "Generous Multi-Cuisine Tables",
      setting: "Indoor & Outdoor Dining",
      tag: "Family Friendly",
      description:
        "Comfortable seating layouts accommodating multi-generational family meals. Enjoy Indian curries, stone-baked pizzas, continental sizzlers, and rich desserts together.",
      highlights: ["Multi-Generational Table Setup", "Multicuisine Variety", "Comfortable Seating"],
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "professionals",
      label: "Professionals & Work",
      icon: Briefcase,
      title: "Quiet Coffee & Work Nook",
      setting: "Indoor Air-Conditioned Space",
      tag: "Focused Environment",
      description:
        "A calm daytime workspace for remote professionals, business meetings, or relaxed reading paired with fresh craft coffee and warm fudge brownies.",
      highlights: ["Artisan Roast Coffee Bar", "Ergonomic Seating", "Calm Daytime Environment"],
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const currentPersona = personas.find((p) => p.id === activeTab) || personas[0];

  return (
    <section id="ambiance" className="py-24 relative overflow-hidden bg-[#f4efea] dark:bg-[#0d0e11] border-t border-[#2b1b17]/10 dark:border-white/10 transition-colors duration-300">
      {/* Background Ambient Light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#dfd5c6]/40 dark:bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#efe8df] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/20 text-[#2b1b17] dark:text-[#f4efea] text-xs font-mono uppercase tracking-widest mb-4 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
            <span>Dual Venue Design • Shankar Nagar, Nagpur</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b1b17] dark:text-[#f4efea] tracking-tight mb-4">
            Designed for Every <span className="italic text-amber-800 dark:text-amber-400">Occasion & Vibe</span>
          </h2>

          <p className="text-base text-[#2b1b17]/70 dark:text-[#f4efea]/70 font-light leading-relaxed">
            Whether you choose comfortable indoor climate-controlled seating or the vibrant open air of our outdoor bistro terrace, Bouffage fits your dining mood.
          </p>
        </div>

        {/* Persona Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {personas.map((persona) => {
            const Icon = persona.icon;
            const isActive = activeTab === persona.id;
            return (
              <button
                key={persona.id}
                onClick={() => setActiveTab(persona.id as any)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-mono font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] font-bold shadow-md"
                    : "bg-[#efe8df] dark:bg-white/10 text-[#2b1b17]/80 dark:text-[#f4efea]/80 border border-[#2b1b17]/10 dark:border-white/10 hover:bg-white dark:hover:bg-white/20"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-amber-400 dark:text-[#0d0e11]" : "text-amber-700 dark:text-amber-400"}`} />
                <span>{persona.label}</span>
              </button>
            );
          })}
        </div>

        {/* Showcase Display Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#efe8df] dark:bg-[#16181d] border border-[#2b1b17]/12 dark:border-white/10 rounded-[2rem] p-6 sm:p-10 shadow-espresso"
          >
            {/* Left Info Column */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#2b1b17] dark:bg-amber-500/20 text-[#f4efea] dark:text-amber-400 border border-transparent dark:border-amber-500/30 font-bold uppercase tracking-wider">
                  {currentPersona.tag}
                </span>
                <span className="text-xs font-mono text-[#2b1b17]/70 dark:text-[#f4efea]/70">
                  {currentPersona.setting}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2b1b17] dark:text-[#f4efea] mb-4">
                {currentPersona.title}
              </h3>

              <p className="text-base text-[#2b1b17]/80 dark:text-[#f4efea]/80 font-light leading-relaxed mb-6">
                {currentPersona.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                {currentPersona.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-[#2b1b17] dark:text-[#f4efea] font-medium">
                    <div className="w-5 h-5 rounded-full bg-[#2b1b17] dark:bg-amber-500/20 text-[#f4efea] dark:text-amber-400 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-amber-400" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Environment Metadata */}
              <div className="pt-6 border-t border-[#2b1b17]/10 dark:border-white/10 flex flex-wrap items-center gap-4 text-xs font-mono text-[#2b1b17]/80 dark:text-[#f4efea]/80">
                <div className="flex items-center gap-1.5">
                  <Sun className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                  <span>Daytime Light: Warm & Airy</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Moon className="w-4 h-4 text-sage-dark dark:text-sage" />
                  <span>Evening Vibe: Candlelit Warmth</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Volume2 className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                  <span>Music: <strong>Acoustic Bistro & Jazz Notes</strong></span>
                </div>
              </div>
            </div>

            {/* Right Photography Display */}
            <div className="lg:col-span-6">
              <div className="relative h-[380px] sm:h-[420px] w-full rounded-2xl overflow-hidden shadow-card group">
                <Image
                  src={currentPersona.image}
                  alt={`${currentPersona.title} Bouffage Cafe Shankar Nagar`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b1b17]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 dark:bg-black/80 backdrop-blur-md text-xs text-[#2b1b17] dark:text-[#f4efea] font-mono flex items-center justify-between shadow-md">
                  <span>Location: Shankar Nagar, Nagpur</span>
                  <span className="text-amber-800 dark:text-amber-400 font-bold">4.2 ★ Ambiance Rating</span>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
