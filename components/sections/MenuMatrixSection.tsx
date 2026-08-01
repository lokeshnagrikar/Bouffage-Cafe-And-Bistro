"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Utensils, Coffee, Pizza, Cake, Flame, AlertCircle } from "lucide-react";

export default function MenuMatrixSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Items", icon: Utensils },
    { id: "indian", label: "Indian Pairings", icon: Utensils },
    { id: "italian", label: "Italian Pizza", icon: Pizza },
    { id: "continental", label: "Continental & Curry", icon: Flame },
    { id: "cafe", label: "Cafe Starters", icon: Utensils },
    { id: "coffee", label: "Artisan Coffee", icon: Coffee },
    { id: "desserts", label: "Desserts", icon: Cake },
  ];

  const menuItems = [
    {
      name: "Siciliana Italianita Pizza",
      cuisine: "italian",
      cuisineName: "Italian",
      description: "Stone-baked Italian pizza with tomato passata, melted mozzarella, black olives, garlic, and fresh basil.",
      price: "₹200 - ₹600",
      services: "Dine In • Takeaway • Delivery",
      isPopular: true,
    },
    {
      name: "Red Thai Curry & Butter Rice",
      cuisine: "continental",
      cuisineName: "Continental",
      description: "Fragrant coconut red curry with sweet Thai basil, served alongside butter-rich aromatic rice.",
      price: "₹200 - ₹600",
      services: "Dine In • Takeaway • Delivery",
      isPopular: true,
    },
    {
      name: "Bouffage Signature Sizzlers",
      cuisine: "continental",
      cuisineName: "Continental",
      description: "Sizzling platter with herb-marinated veggies, French fries, steamed rice, and garlic glaze.",
      price: "₹200 - ₹600",
      services: "Dine In • Takeaway",
      isPopular: true,
    },
    {
      name: "Peri Peri Fries",
      cuisine: "cafe",
      cuisineName: "Cafe",
      description: "Crispy golden potato fries tossed generously in fiery house peri peri spice blend with aioli.",
      price: "₹200 - ₹600",
      services: "Dine In • Takeaway • Delivery",
      isPopular: true,
    },
    {
      name: "Artisan Craft Cappuccino & Espresso",
      cuisine: "coffee",
      cuisineName: "Coffee",
      description: "Freshly roasted specialty arabica coffee beans brewed to order with silky milk microfoam.",
      price: "₹200 - ₹600",
      services: "Dine In • Takeaway",
      isPopular: true,
    },
    {
      name: "Warm Chocolate Fudge Brownie",
      cuisine: "desserts",
      cuisineName: "Desserts",
      description: "Rich dark chocolate brownie served warm with gooey center, optional vanilla ice cream.",
      price: "₹200 - ₹600",
      services: "Dine In • Takeaway • Delivery",
      isPopular: true,
    },
    {
      name: "Indian Multicuisine Specialty Curry",
      cuisine: "indian",
      cuisineName: "Indian",
      description: "Rich gravy curry cooked with fresh regional spices, cream, and garden veggies served with naan/rice.",
      price: "₹200 - ₹600",
      services: "Dine In • Takeaway • Delivery",
      isPopular: false,
    },
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.cuisine === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 relative overflow-hidden bg-[#f4efea] dark:bg-[#0d0e11] border-t border-[#2b1b17]/10 dark:border-white/10 transition-colors duration-300">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#dfd5c6]/30 dark:bg-amber-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#efe8df] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/20 text-[#2b1b17] dark:text-[#f4efea] text-xs font-mono uppercase tracking-widest mb-4 shadow-xs">
            <Utensils className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
            <span>Multi-Cuisine Directory • Shankar Nagar</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b1b17] dark:text-[#f4efea] tracking-tight mb-4">
            Explore Our <span className="italic text-amber-800 dark:text-amber-400">Gastronomy Matrix</span>
          </h2>

          <p className="text-base text-[#2b1b17]/70 dark:text-[#f4efea]/70 font-light leading-relaxed">
            From regional Indian pairings to stone-baked Italian pizza, sizzling continental platters, and artisan coffee bar specials.
          </p>
        </div>

        {/* Search Bar & Category Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono transition-all duration-300 ${
                    isActive
                      ? "bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] font-bold shadow-md"
                      : "bg-[#efe8df] dark:bg-white/10 text-[#2b1b17]/80 dark:text-[#f4efea]/80 border border-[#2b1b17]/10 dark:border-white/10 hover:bg-white dark:hover:bg-white/20"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#2b1b17]/40 dark:text-[#f4efea]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cuisine or dish..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#efe8df] dark:bg-white/10 border border-[#2b1b17]/10 dark:border-white/10 text-[#2b1b17] dark:text-[#f4efea] text-xs font-mono focus:outline-none focus:border-[#2b1b17] dark:focus:border-amber-400 transition-colors shadow-inner"
            />
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-[#efe8df] dark:bg-[#16181d] border border-[#2b1b17]/12 dark:border-white/10 rounded-[2rem] p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#f4efea] dark:text-[#0d0e11] bg-[#2b1b17] dark:bg-amber-500 px-2.5 py-0.5 rounded-full font-bold">
                    {item.cuisineName}
                  </span>
                  {item.isPopular && (
                    <span className="text-[10px] font-mono text-sage-dark dark:text-sage font-bold bg-[#f4efea] dark:bg-white/10 px-2 py-0.5 rounded-full border border-black/5 dark:border-white/10 flex items-center gap-1">
                      ★ Popular Item
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-xl font-bold text-[#2b1b17] dark:text-[#f4efea] mb-2">
                  {item.name}
                </h3>

                <p className="text-xs text-[#2b1b17]/70 dark:text-[#f4efea]/70 font-light leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2b1b17]/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-[#2b1b17] dark:text-[#f4efea] font-bold">{item.price}</span>
                <span className="text-[#2b1b17]/60 dark:text-[#f4efea]/60">{item.services}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Owner Data Notice Box */}
        <div className="bg-[#efe8df] dark:bg-[#16181d] p-6 sm:p-8 rounded-[2rem] border border-[#2b1b17]/15 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="p-3 rounded-2xl bg-[#2b1b17] dark:bg-amber-500/20 text-[#f4efea] dark:text-amber-400 flex-shrink-0 shadow-md">
              <AlertCircle className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-lg text-[#2b1b17] dark:text-[#f4efea] mb-1">
                Full Itemized Menu Data & Pricing
              </h4>
              <p className="text-xs text-[#2b1b17]/70 dark:text-[#f4efea]/70 max-w-xl font-light">
                Additional menu items, seasonal specials, and exact dish prices beyond popular items are ready to be integrated upon receiving the full digital menu spreadsheet from Bouffage management.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] text-xs font-mono font-bold shadow-sm">
              Full Menu Concierge Available
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
