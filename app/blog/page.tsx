"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ReservationModal from "@/components/modals/ReservationModal";
import CustomCursor from "@/components/shared/CustomCursor";
import { Calendar, User, ArrowRight, Sparkles, Tag, Coffee } from "lucide-react";
import Image from "next/image";

export default function BlogPage() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);

  const posts = [
    {
      id: "monsoon-coffee-fest",
      title: "Artisan Coffee Culture in Shankar Nagar: Monsoon Specialty Brews",
      category: "Coffee & Barista",
      date: "August 2026",
      author: "Bouffage Head Barista",
      summary: "Discover how we select arabica coffee beans and craft silky cappuccino microfoam paired with warm fudge brownies during monsoon afternoons in Nagpur.",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "sizzler-fest-launch",
      title: "The Art of Tabletop Sizzlers: Herb Veggies, Rice & Garlic Glaze",
      category: "Culinary Highlights",
      date: "July 2026",
      author: "Bouffage Kitchen Team",
      summary: "Why our tabletop sizzler platters are Nagpur's favorite dinner choice for family gatherings and celebrations.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "authentic-italian-pizza",
      name: "Stone-Baked Italian Pizza: Passata, Mozzarella & Oregano Secrets",
      category: "Italian Cuisine",
      date: "June 2026",
      author: "Italian Kitchen Lead",
      summary: "Exploring the secrets behind our hand-stretched dough and authentic stone-baked Siciliana Italianita Pizza.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
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
            Premium Plan Feature • Blog & News Updates
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2b1b17] dark:text-[#f4efea] mb-3">
            Bouffage Stories & Culinary Blog
          </h1>
          <p className="text-sm font-mono text-[#2b1b17]/70 dark:text-[#f4efea]/70 max-w-xl mx-auto">
            Seasonal menu announcements, barista coffee guides, and culinary highlights from Shankar Nagar, Nagpur.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-[#efe8df] dark:bg-[#16181d] border border-[#2b1b17]/12 dark:border-white/10 rounded-[2rem] p-6 flex flex-col justify-between shadow-espresso hover:shadow-2xl transition-all group"
            >
              <div>
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] px-3 py-1 rounded-full text-[10px] font-mono font-bold">
                    {post.category}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-[11px] font-mono text-[#2b1b17]/60 dark:text-[#f4efea]/60 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" /> {post.date}
                  </span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#2b1b17] dark:text-[#f4efea] mb-3 leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-[#2b1b17]/70 dark:text-[#f4efea]/70 font-light leading-relaxed mb-6">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2b1b17]/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-amber-800 dark:text-amber-400 font-bold">Read Article</span>
                <ArrowRight className="w-4 h-4 text-amber-800 dark:text-amber-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
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
