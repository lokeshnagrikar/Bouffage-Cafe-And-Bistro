"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, MessageSquare, Quote, MapPin, CheckCircle, ThumbsUp, Sparkles } from "lucide-react";

import ScrollReveal from "@/components/shared/ScrollReveal";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

export default function SocialProofSection() {
  const [activeTag, setActiveTag] = useState<string>("all");

  const reviewHighlights = [
    {
      author: "Verified Shankar Nagar Diner",
      rating: 5,
      date: "Recent Google Review",
      tag: "ambiance",
      text: "The outdoor bistro seating in Shankar Nagar is fantastic for evening coffee and dinners. Red Thai Curry with Butter Rice and Siciliana Italianita Pizza are absolute must-haves!",
      highlightedItem: "Red Thai Curry & Pizza",
    },
    {
      author: "Local Family Guest",
      rating: 4,
      date: "Verified Reviewer",
      tag: "family",
      text: "Great atmosphere for family dining. Comfortable seating, quick takeaway service, and the Peri Peri Fries & Sizzlers were loved by everyone.",
      highlightedItem: "Peri Peri Fries & Sizzlers",
    },
    {
      author: "Couple Dining Experience",
      rating: 5,
      date: "Google Verified Review",
      tag: "couples",
      text: "Perfect cozy indoor seating for date nights. Soft ambient lighting, great coffee bar, and the warm fudge brownie is divine.",
      highlightedItem: "Coffee & Fudge Brownie",
    },
  ];

  const filteredReviews =
    activeTag === "all"
      ? reviewHighlights
      : reviewHighlights.filter((r) => r.tag === activeTag);

  return (
    <section id="social-proof" className="py-24 relative overflow-hidden bg-[#f4efea] dark:bg-[#0d0e11] border-t border-[#2b1b17]/10 dark:border-white/10 transition-colors duration-300">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#dfd5c6]/40 dark:bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Metric Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Big Numerical Proof */}
          <ScrollReveal direction="left" className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#efe8df] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/20 text-[#2b1b17] dark:text-[#f4efea] text-xs font-mono uppercase tracking-widest mb-4 shadow-xs">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Verified Customer Proof</span>
            </div>

            <div className="flex items-baseline gap-4 mb-2">
              <span className="font-serif font-bold text-6xl sm:text-7xl lg:text-8xl text-[#2b1b17] dark:text-[#f4efea]">
                <AnimatedCounter to={4.2} decimals={1} duration={1.5} />
              </span>
              <div>
                <div className="flex items-center gap-1 mb-1 text-amber-500">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500" />
                  ))}
                  <Star className="w-5 h-5 fill-amber-500/30 text-amber-500" />
                </div>
                <span className="text-xs font-mono text-[#2b1b17]/60 dark:text-[#f4efea]/60 uppercase tracking-wider block">
                  Overall Rating Scale
                </span>
              </div>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#2b1b17] dark:text-[#f4efea] mb-2">
              Backed by <span className="text-amber-800 dark:text-amber-400"><AnimatedCounter to={3244} suffix="+" duration={2.2} /></span> Customer Reviews
            </h3>

            <p className="text-sm text-[#2b1b17]/70 dark:text-[#f4efea]/70 font-light leading-relaxed mb-6">
              A trusted culinary destination in Shankar Nagar, Nagpur. Celebrated for rich multicuisine flavors, comfortable seating, and artisan coffee.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-sage-dark dark:text-sage font-bold">
              <MapPin className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>Shankar Nagar, Nagpur • Google Verified Reviews</span>
            </div>
          </ScrollReveal>

          {/* Right Column: Review Sentiment Tags & Filter Pills */}
          <ScrollReveal direction="right" className="lg:col-span-7">
            <div className="bg-[#efe8df] dark:bg-[#16181d] border border-[#2b1b17]/12 dark:border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-espresso">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#2b1b17]/10 dark:border-white/10">
                <span className="text-xs font-mono uppercase text-[#2b1b17]/70 dark:text-[#f4efea]/70">Filter Guest Sentiments</span>
                <span className="text-xs font-mono text-amber-800 dark:text-amber-400 font-bold">3,244 Total Reviews</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { id: "all", label: "All Reviews" },
                  { id: "ambiance", label: "Ambiance & Terrace" },
                  { id: "couples", label: "Couples & Dates" },
                  { id: "family", label: "Family & Starters" },
                ].map((tag) => (
                  <button
                    key={tag.id}
                    onClick={() => setActiveTag(tag.id)}
                    className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                      activeTag === tag.id
                        ? "bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] font-bold shadow-md"
                        : "bg-[#f4efea] dark:bg-white/10 text-[#2b1b17]/80 dark:text-[#f4efea]/80 border border-[#2b1b17]/10 dark:border-white/10 hover:bg-white dark:hover:bg-white/20"
                    }`}
                  >
                    {tag.label}
                  </button>
                ))}
              </div>

              {/* Review Quote Cards */}
              <div className="space-y-4">
                {filteredReviews.map((review, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-[#f4efea] dark:bg-white/5 border border-[#2b1b17]/10 dark:border-white/10 hover:border-amber-800/40 dark:hover:border-amber-400/40 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Quote className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                        <span className="text-sm font-bold text-[#2b1b17] dark:text-[#f4efea] font-serif">{review.author}</span>
                      </div>
                      <div className="flex items-center gap-1 text-amber-500 text-xs">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-500" />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#2b1b17]/80 dark:text-[#f4efea]/80 font-light leading-relaxed mb-3">
                      "{review.text}"
                    </p>

                    <div className="flex items-center justify-between text-[11px] font-mono text-[#2b1b17]/50 dark:text-[#f4efea]/50 pt-2 border-t border-[#2b1b17]/10 dark:border-white/10">
                      <span>Highlighted: <strong className="text-amber-800 dark:text-amber-400">{review.highlightedItem}</strong></span>
                      <span>{review.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
