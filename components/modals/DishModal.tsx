"use client";

import { useState, useEffect } from "react";
import { X, Sparkles, Utensils, Star, CheckCircle, Plus, Minus, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export interface DishItem {
  id: string;
  name: string;
  cuisine: string;
  description: string;
  pairing?: string;
  priceRange: string;
  image: string;
  tags: string[];
}

interface DishModalProps {
  dish: DishItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function DishModal({ dish, isOpen, onClose }: DishModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [orderAdded, setOrderAdded] = useState(false);

  useEffect(() => {
    setQuantity(1);
    setSelectedAddons([]);
    setOrderAdded(false);
  }, [dish]);

  if (!dish) return null;

  const addonOptions = [
    { name: "Extra Garlic Aioli Dip", price: 40 },
    { name: "Extra Mozzarella Cheese", price: 60 },
    { name: "Vanilla Bean Ice Cream Scoop", price: 80 },
  ];

  const basePriceEstimate = 320; // Estimated base price within ₹200-₹600
  const addonsTotal = selectedAddons.reduce((sum, item) => {
    const addon = addonOptions.find((a) => a.name === item);
    return sum + (addon ? addon.price : 0);
  }, 0);
  const calculatedTotal = (basePriceEstimate + addonsTotal) * quantity;

  const toggleAddon = (addonName: string) => {
    if (selectedAddons.includes(addonName)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== addonName));
    } else {
      setSelectedAddons([...selectedAddons, addonName]);
    }
  };

  const handleOrder = () => {
    setOrderAdded(true);
    setTimeout(() => {
      setOrderAdded(false);
      onClose();
    }, 2000);
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
            onClick={onClose}
            className="absolute inset-0 bg-obsidian/85 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-obsidian/80 text-cream/70 hover:text-cream border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
              {/* Dish Image */}
              <div className="sm:col-span-5 relative h-56 sm:h-full min-h-[240px] rounded-2xl overflow-hidden shadow-card">
                <Image
                  src={dish.image}
                  alt={`${dish.name} - Bouffage Cafe & Bistro`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-obsidian/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-amber-400 border border-amber-500/20">
                  {dish.cuisine}
                </div>
              </div>

              {/* Dish Customizer & Details */}
              <div className="sm:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider">
                      Interactive Culinary Card
                    </span>
                    <span className="text-[10px] font-mono text-cream/40">• Shankar Nagar</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-cream mb-2">
                    {dish.name}
                  </h3>

                  <p className="text-xs text-cream-muted font-light leading-relaxed mb-4">
                    {dish.description}
                  </p>

                  {dish.pairing && (
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-4 text-xs font-mono text-amber-300 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>Pairing: <strong>{dish.pairing}</strong></span>
                    </div>
                  )}

                  {/* Add-ons Customizer */}
                  <div className="mb-4">
                    <span className="block text-[10px] font-mono uppercase text-cream/60 mb-2">
                      Customize Add-ons (Dynamic Calculator)
                    </span>
                    <div className="space-y-1.5">
                      {addonOptions.map((addon) => {
                        const isChecked = selectedAddons.includes(addon.name);
                        return (
                          <button
                            type="button"
                            key={addon.name}
                            onClick={() => toggleAddon(addon.name)}
                            className={`w-full p-2 rounded-xl text-xs font-mono flex items-center justify-between border transition-all ${
                              isChecked
                                ? "bg-amber-500/20 border-amber-500 text-amber-400"
                                : "bg-white/5 border-white/10 text-cream/70 hover:bg-white/10"
                            }`}
                          >
                            <span>{addon.name}</span>
                            <span>+₹{addon.price}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Dynamic Price & Order Action */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-1 rounded-lg hover:bg-white/10 text-cream"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2 text-xs font-mono font-bold text-cream">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-1 rounded-lg hover:bg-white/10 text-cream"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Calculated Total */}
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-cream/50 block">Estimated Total</span>
                      <span className="text-base font-mono font-bold text-amber-400">
                        ₹{calculatedTotal}
                      </span>
                    </div>
                  </div>

                  {orderAdded ? (
                    <div className="py-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono text-center flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Item Added to Concept Preview Order!</span>
                    </div>
                  ) : (
                    <button
                      onClick={handleOrder}
                      className="w-full py-3 rounded-xl bg-amber-500 text-obsidian font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-amber-400 transition-colors"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Concept Order • ₹{calculatedTotal}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
