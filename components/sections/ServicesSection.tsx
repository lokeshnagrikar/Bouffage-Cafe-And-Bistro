"use client";

import { motion } from "framer-motion";
import { Utensils, ShoppingBag, Truck, MapPin, Clock, ArrowRight, ShieldCheck } from "lucide-react";

interface ServicesSectionProps {
  onReserveClick?: () => void;
}

export default function ServicesSection({ onReserveClick }: ServicesSectionProps) {
  const ONLINE_ORDER_LINK = "https://www.google.com/searchviewer/42?cvd=CLw_EicKJeICIjIgEhkiF9LX29IPEQoNL2cvMTFnZGhneW44bBgBOgMI8A0%3D&g2lbs=AEzIGDtsrcPmctrIkA5hG07AkollvoEf5k4IRYG0_kfs9U5HbJx24aqM9ikL6jBVBh9BAZGNMdWm&hl=en-IN&gl=in&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&utm_source=tactile&gei=Ydhtapf6E5ephvcPjbSlwQI&ei=Ydhtapf6E5ephvcPjbSlwQI&fo_s=OA&opi=79508299&orderType=1&ebb=1&cs=0&foub=mcpp";

  const services = [
    {
      id: "dine-in",
      icon: Utensils,
      title: "In-Bistro Dining",
      subtitle: "Indoor Booths & Outdoor Garden Terrace",
      description:
        "Experience dual-ambiance dining in Shankar Nagar. From air-conditioned private booth seating to romantic outdoor al-fresco garden tables.",
      highlights: [
        "Indoor climate-controlled booths",
        "Outdoor terrace under soft ambient festoon lights",
        "Suitable for couples, friends & family dining",
      ],
      ctaText: "Reserve Table Online",
      ctaAction: onReserveClick,
      badge: "Dine In Sanctuary",
      isExternal: false,
    },
    {
      id: "takeaway",
      icon: ShoppingBag,
      title: "Express Takeaway",
      subtitle: "Freshly Prepared Counter Pick-Up",
      description:
        "Order your favorite coffee, Peri Peri Fries, or Italian pizza for quick pickup at our Shankar Nagar counter without waiting.",
      highlights: [
        "Ready in 15–20 minutes",
        "Eco-friendly insulated packaging",
        "Direct counter pick-up",
      ],
      ctaText: "Order Takeaway Online",
      ctaLink: ONLINE_ORDER_LINK,
      badge: "Fast Pick-Up",
      isExternal: true,
    },
    {
      id: "delivery",
      icon: Truck,
      title: "Doorstep Delivery",
      subtitle: "Hot Multi-Cuisine Delivered to You",
      description:
        "Have Bouffage signature Red Thai Curry, Butter Rice, Sizzlers, and Cappuccino delivered hot to your home or office.",
      highlights: [
        "Delivered to Shankar Nagar & vicinity",
        "Temperature-controlled transport",
        "Order on Zomato & Swiggy",
      ],
      ctaText: "Order Doorstep Delivery",
      ctaLink: ONLINE_ORDER_LINK,
      badge: "Express Delivery",
      isExternal: true,
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#efe8df] dark:bg-[#0d0e11] text-[#2b1b17] dark:text-[#f4efea] border-t border-[#2b1b17]/10 dark:border-white/10 transition-colors duration-300">
      
      {/* Background Subtle Lighting Blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#dfd5c6]/40 dark:bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4efea] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/20 text-[#2b1b17] dark:text-[#f4efea] text-xs font-mono uppercase tracking-widest mb-4 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-amber-700 dark:text-amber-400" />
            <span>Hospitality & Channels</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b1b17] dark:text-[#f4efea] tracking-tight mb-4">
            Three Ways to Experience <br />
            <span className="italic text-amber-800 dark:text-amber-400">Bouffage Bistro</span>
          </h2>

          <p className="text-sm sm:text-base text-[#2b1b17]/70 dark:text-[#f4efea]/70 font-light leading-relaxed">
            Whether dining in our Shankar Nagar ambiance, grabbing quick takeaway coffee, or ordering doorstep delivery across Nagpur.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-[#f4efea] dark:bg-[#16181d] border border-[#2b1b17]/12 dark:border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-espresso hover:shadow-2xl transition-all duration-300 group"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#efe8df] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/10 flex items-center justify-center text-[#2b1b17] dark:text-[#f4efea] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-amber-800 dark:text-amber-400" />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] font-bold">
                      Shankar Nagar & Nagpur
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#2b1b17] dark:text-[#f4efea] mb-1">
                    {service.title}
                  </h3>

                  <p className="text-xs font-mono text-amber-800 dark:text-amber-400 font-bold mb-4">
                    {service.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#2b1b17]/70 dark:text-[#f4efea]/70 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 mb-8 border-t border-[#2b1b17]/10 dark:border-white/10 pt-4">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="text-xs font-mono text-[#2b1b17]/80 dark:text-[#f4efea]/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div>
                  {service.isExternal ? (
                    <a
                      href={service.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-6 rounded-full bg-[#efe8df] dark:bg-white/10 text-[#2b1b17] dark:text-[#f4efea] font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#2b1b17] hover:text-[#f4efea] dark:hover:bg-amber-500 dark:hover:text-[#0d0e11] transition-all flex items-center justify-center gap-2 border border-[#2b1b17]/15 dark:border-white/20 shadow-xs"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      onClick={service.ctaAction}
                      className="w-full py-3.5 px-6 rounded-full bg-[#efe8df] dark:bg-white/10 text-[#2b1b17] dark:text-[#f4efea] font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#2b1b17] hover:text-[#f4efea] dark:hover:bg-amber-500 dark:hover:text-[#0d0e11] transition-all flex items-center justify-center gap-2 border border-[#2b1b17]/15 dark:border-white/20 shadow-xs"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
