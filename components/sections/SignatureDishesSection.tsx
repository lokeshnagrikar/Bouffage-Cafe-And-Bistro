"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Utensils, ArrowUpRight, Flame, Coffee, Heart, Plus } from "lucide-react";
import Image from "next/image";
import DishModal, { DishItem } from "@/components/modals/DishModal";

export default function SignatureDishesSection() {
  const [selectedDish, setSelectedDish] = useState<DishItem | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const signatureDishes: DishItem[] = [
    {
      id: "pizza-siciliana",
      name: "Siciliana Italianita Pizza",
      cuisine: "Italian",
      description:
        "Artisanal hand-stretched pizza featuring rich Italian tomato passata, melted mozzarella, roasted garlic, black olives, and fresh basil.",
      priceRange: "₹200 - ₹600",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
      tags: ["Italian Signature", "Stone Baked", "Crowd Favorite"],
      pairing: "Cold Craft Iced Coffee",
    },
    {
      id: "red-thai-curry",
      name: "Red Thai Curry & Butter Rice",
      cuisine: "Continental",
      description:
        "Fragrant Thai red curry cooked in creamy coconut milk with fresh garden vegetables, served alongside rich, aromatic Butter Rice.",
      priceRange: "₹200 - ₹600",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1200&q=80",
      tags: ["Coconut Curry", "Butter Rice Duo", "Bistro Specialty"],
      pairing: "Fragrant Jasmine Tea or Iced Coffee",
    },
    {
      id: "sizzler-special",
      name: "Bouffage Signature Sizzlers",
      cuisine: "Continental",
      description:
        "Hot sizzling platter loaded with herb-marinated veggies, French fries, steamed rice, and rich brown garlic glaze served smoking hot to your table.",
      priceRange: "₹200 - ₹600",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      tags: ["Smoking Hot", "Tabletop Experience", "Popular Dinner Choice"],
      pairing: "Peri Peri Fries",
    },
    {
      id: "peri-peri-fries",
      name: "Peri Peri Fries",
      cuisine: "Cafe",
      description:
        "Crispy golden potato fries tossed generously in Bouffage's fiery house peri peri spice blend, served with garlic aioli.",
      priceRange: "₹200 - ₹600",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=80",
      tags: ["Crispy Fries", "Fiery Peri Peri", "Perfect Starter"],
      pairing: "Craft Cappuccino or Frappe",
    },
    {
      id: "craft-coffee",
      name: "Artisan Craft Coffee",
      cuisine: "Coffee",
      description:
        "Freshly roasted specialty coffee beans brewed to perfection. Available in classic espresso, creamy cappuccino, and velvety cold brews.",
      priceRange: "₹200 - ₹600",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
      tags: ["Artisan Roast", "Barista Special", "All-Day Brew"],
      pairing: "Warm Fudge Brownie",
    },
    {
      id: "fudge-brownie",
      name: "Warm Fudge Brownie",
      cuisine: "Desserts",
      description:
        "Decadent dark chocolate fudge brownie served warm with a soft melt-in-the-mouth center, paired optionally with vanilla bean ice cream.",
      priceRange: "₹200 - ₹600",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80",
      tags: ["Dark Chocolate", "Warm Dessert", "Sweet Finish"],
      pairing: "Hot Espresso",
    },
  ];

  const filteredDishes =
    filter === "all"
      ? signatureDishes
      : signatureDishes.filter((dish) => dish.cuisine.toLowerCase() === filter.toLowerCase());

  return (
    <section id="signatures" className="py-20 sm:py-24 relative overflow-hidden bg-[#efe8df] dark:bg-[#0d0e11] border-t border-[#2b1b17]/10 dark:border-white/10 transition-colors duration-300">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#dfd5c6]/60 dark:bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4efea] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/20 text-[#2b1b17] dark:text-[#f4efea] text-xs font-mono uppercase tracking-widest mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
              <span>Known Culinary Highlights</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b1b17] dark:text-[#f4efea] tracking-tight">
              Signature <span className="italic text-amber-800 dark:text-amber-400">Gastronomy Showcase</span>
            </h2>
          </div>

          {/* Cuisine Filter Touch Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 max-w-full">
            {[
              { id: "all", label: "All Signatures" },
              { id: "italian", label: "Italian" },
              { id: "continental", label: "Continental" },
              { id: "cafe", label: "Cafe" },
              { id: "coffee", label: "Coffee" },
              { id: "desserts", label: "Desserts" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono whitespace-nowrap transition-all flex-shrink-0 ${
                  filter === tab.id
                    ? "bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] font-bold shadow-md"
                    : "bg-[#f4efea] dark:bg-white/10 text-[#2b1b17]/80 dark:text-[#f4efea]/80 border border-[#2b1b17]/10 dark:border-white/10 hover:bg-white dark:hover:bg-white/20"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Floating Top-Down Circular Cutout Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 pt-8">
          {filteredDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedDish(dish)}
              className="bg-[#f4efea] dark:bg-[#16181d] border border-[#2b1b17]/12 dark:border-white/10 rounded-[2rem] p-5 sm:p-6 pt-16 relative flex flex-col justify-between cursor-pointer group hover:shadow-2xl transition-all"
            >
              {/* Floating Top-Down Circular Image Frame */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#efe8df] dark:border-[#0d0e11] shadow-lg relative group-hover:scale-105 transition-transform">
                  <Image
                    src={dish.image}
                    alt={`${dish.name} - Bouffage Cafe`}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Price Pill Tag */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] px-3 py-0.5 rounded-full font-mono text-[10px] font-bold shadow-md whitespace-nowrap">
                  {dish.priceRange}
                </div>
              </div>

              <div className="text-center mt-3">
                <span className="text-[10px] font-mono text-amber-800 dark:text-amber-400 uppercase tracking-widest block mb-1 font-bold">
                  {dish.cuisine} Cuisine
                </span>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2b1b17] dark:text-[#f4efea] group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors mb-2">
                  {dish.name}
                </h3>

                <p className="text-xs text-[#2b1b17]/80 dark:text-[#f4efea]/80 font-light leading-relaxed mb-4 line-clamp-3">
                  {dish.description}
                </p>

                {dish.pairing && (
                  <div className="text-[11px] font-mono text-[#2b1b17]/90 dark:text-[#f4efea]/90 bg-white/70 dark:bg-white/10 px-3 py-1.5 rounded-xl border border-black/5 dark:border-white/10 mb-4 inline-block">
                    Pairing: <strong>{dish.pairing}</strong>
                  </div>
                )}
              </div>

              {/* Card Footer Action Pill */}
              <div className="pt-4 border-t border-[#2b1b17]/10 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#2b1b17] dark:text-[#f4efea]">
                  {dish.priceRange}
                </span>
                <span className="text-xs font-mono font-bold text-[#2b1b17] dark:text-[#f4efea] flex items-center gap-1 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors">
                  <span>Inspect Dish</span>
                  <Plus className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dish Detail Inspection Modal */}
        <DishModal
          dish={selectedDish}
          isOpen={!!selectedDish}
          onClose={() => setSelectedDish(null)}
        />
      </div>
    </section>
  );
}
