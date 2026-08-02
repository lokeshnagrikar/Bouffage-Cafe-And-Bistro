"use client";

import { MapPin, Navigation, Phone, Clock, Compass, ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function LocationMapSection() {
  // Official Bouffage Cafe & Bistro Google Maps Embed & Link
  const googleMapsUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.450257002013!2d79.0584133!3d21.1344937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0647cc2b92f%3A0x1fb168af4377a067!2sBouffage%20Cafe%20And%20Bistro!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  const directDirectionsLink =
    "https://www.google.com/maps/dir/21.0703046,80.3769992/Bouffage+Cafe+And+Bistro,+Sanskrutik+Sankul+Complex,+Lower+Ground+B+Wing+Ambazari+Road+Wockhardt+Hospitals+Rashtra+Bhasha,+Shankar+Nagar,+Nagpur,+Maharashtra+440010/@21.108888,79.3879136,10z/data=!3m1!4b1!4m17!1m7!3m6!1s0x3bd4c0647cc2b92f:0x1fb168af4377a067!2sBouffage+Cafe+And+Bistro!8m2!3d21.1344937!4d79.0584133!16s%2Fg%2F11gdhgyn8l!4m8!1m1!4e1!1m5!1m1!1s0x3bd4c0647cc2b92f:0x1fb168af4377a067!2m2!1d79.0584133!2d21.1344937?hl=en&entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="location-map" className="py-20 sm:py-24 relative overflow-hidden bg-[#efe8df] dark:bg-[#0d0e11] border-t border-[#2b1b17]/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Scroll-Triggered Fade-Up) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4efea] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/20 text-[#2b1b17] dark:text-[#f4efea] text-xs font-mono uppercase tracking-widest mb-3 shadow-xs">
            <Compass className="w-4 h-4 text-amber-700 dark:text-amber-400" />
            <span>Official Google Maps Location</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b1b17] dark:text-[#f4efea] tracking-tight mb-4">
            Visit Us in <span className="italic text-amber-800 dark:text-amber-400">Shankar Nagar, Nagpur</span>
          </h2>

          <p className="text-base text-[#2b1b17]/80 dark:text-[#f4efea]/80 font-light leading-relaxed">
            Conveniently situated at Sanskrutik Sankul Complex, Ambazari Road, opposite Wockhardt Hospitals in Shankar Nagar. Stop by for artisan coffee, sizzlers, or stone-baked pizza!
          </p>
        </motion.div>

        {/* Map & Location Card Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Google Maps Embed Window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 h-[400px] sm:h-[480px] rounded-[2.5rem] overflow-hidden border border-[#2b1b17]/15 dark:border-white/15 shadow-2xl relative"
          >
            <iframe
              title="Bouffage Cafe And Bistro Shankar Nagar Official Location Map"
              src={googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-105 opacity-95 dark:opacity-85"
            />
            <div className="absolute top-4 left-4 bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] px-3.5 py-1.5 rounded-full text-xs font-mono font-bold shadow-lg flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400 dark:text-[#0d0e11]" />
              <span>Bouffage Cafe And Bistro</span>
            </div>
          </motion.div>

          {/* Right Venue Details & Navigation Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5 bg-[#f4efea] dark:bg-[#16181d] border border-[#2b1b17]/12 dark:border-white/10 rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-between shadow-2xl text-[#2b1b17] dark:text-[#f4efea]"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#2b1b17]/10 dark:border-white/10 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase text-amber-800 dark:text-amber-400 font-bold tracking-wider block">
                    Bistro Sanctuary
                  </span>
                  <h3 className="font-serif text-2xl font-bold">
                    Shankar Nagar Branch
                  </h3>
                </div>
                <div className="flex items-center gap-1 bg-[#efe8df] dark:bg-white/10 px-3 py-1.5 rounded-full text-xs font-mono font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>4.2 ★ (3,244)</span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm font-mono mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2b1b17] dark:bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <strong className="block text-[#2b1b17] dark:text-white font-bold">Full Address:</strong>
                    <span className="text-[#2b1b17]/70 dark:text-[#f4efea]/70 font-light leading-relaxed block">
                      Sanskrutik Sankul Complex, Lower Ground B Wing, Ambazari Road, Opp. Wockhardt Hospitals, Rashtra Bhasha, Shankar Nagar, Nagpur, Maharashtra 440010
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2b1b17] dark:bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <strong className="block text-[#2b1b17] dark:text-white font-bold">Opening Hours:</strong>
                    <span className="text-[#2b1b17]/70 dark:text-[#f4efea]/70 font-light">
                      11:00 AM – 11:00 PM Daily (Mon – Sun)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2b1b17] dark:bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <strong className="block text-[#2b1b17] dark:text-white font-bold">Services & Enquiries:</strong>
                    <span className="text-[#2b1b17]/70 dark:text-[#f4efea]/70 font-light">
                      Dine In • Takeaway • Party Reservations
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Navigation Button */}
            <div className="pt-4 border-t border-[#2b1b17]/10 dark:border-white/10 space-y-3">
              <a
                href={directDirectionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="espresso-pill w-full py-4 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
              >
                <Navigation className="w-4 h-4 text-amber-400 dark:text-[#0d0e11]" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
