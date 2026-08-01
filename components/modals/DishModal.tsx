"use client";

import { useState, useEffect } from "react";
import { X, Sparkles, Utensils, Star, CheckCircle, Plus, Minus, ShoppingBag, MessageCircle } from "lucide-react";
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
    const addOnText = selectedAddons.length > 0 ? selectedAddons.join(", ") : "None";
    const whatsappMsg = encodeURIComponent(
      `Hello Bouffage Cafe & Bistro, I would like to place an order!\n\n` +
      `🍽️ Item: ${dish.name}\n` +
      `🔢 Quantity: ${quantity}\n` +
      `➕ Add-ons: ${addOnText}\n` +
      `💰 Total Price: ₹${calculatedTotal}\n` +
      `📍 Location: Shankar Nagar, Nagpur\n\n` +
      `Please confirm order preparation and pickup/delivery details.`
    );

    setTimeout(() => {
      window.open(`https://wa.me/?text=${whatsappMsg}`, "_blank");
      setOrderAdded(false);
      onClose();
    }, 1000);
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
            className="absolute inset-0 bg-[#0d0e11]/85 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-2xl bg-[#efe8df] dark:bg-[#16181d] rounded-3xl p-6 sm:p-8 border border-[#2b1b17]/15 dark:border-white/15 shadow-2xl overflow-hidden text-[#2b1b17] dark:text-[#f4efea]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#f4efea] dark:bg-black/60 text-[#2b1b17] dark:text-[#f4efea] hover:bg-[#2b1b17] hover:text-[#f4efea] dark:hover:bg-amber-500 dark:hover:text-[#0d0e11] border border-[#2b1b17]/10 dark:border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
              {/* Dish Image */}
              <div className="sm:col-span-5 relative h-56 sm:h-full min-h-[240px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={dish.image}
                  alt={`${dish.name} - Bouffage Cafe & Bistro`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] px-3 py-1 rounded-full text-[10px] font-mono font-bold shadow-md">
                  {dish.cuisine}
                </div>
              </div>

              {/* Dish Customizer & Details */}
              <div className="sm:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-amber-800 dark:text-amber-400 font-bold uppercase tracking-wider">
                      Interactive Culinary Card
                    </span>
                    <span className="text-[10px] font-mono opacity-50">• Shankar Nagar</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#2b1b17] dark:text-[#f4efea] mb-2">
                    {dish.name}
                  </h3>

                  <p className="text-xs text-[#2b1b17]/70 dark:text-[#f4efea]/70 font-light leading-relaxed mb-4">
                    {dish.description}
                  </p>

                  {dish.pairing && (
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-4 text-xs font-mono text-amber-800 dark:text-amber-300 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-700 dark:text-amber-400 flex-shrink-0" />
                      <span>Pairing: <strong>{dish.pairing}</strong></span>
                    </div>
                  )}

                  {/* Add-ons Customizer */}
                  <div className="mb-4">
                    <span className="block text-[10px] font-mono uppercase text-[#2b1b17]/60 dark:text-[#f4efea]/60 mb-2 font-bold">
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
                            className={`w-full p-2.5 rounded-xl text-xs font-mono flex items-center justify-between border transition-all ${
                              isChecked
                                ? "bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] border-[#2b1b17] dark:border-amber-500 font-bold shadow-md"
                                : "bg-[#f4efea] dark:bg-white/5 border-[#2b1b17]/10 dark:border-white/10 text-[#2b1b17]/80 dark:text-[#f4efea]/80 hover:bg-white dark:hover:bg-white/10"
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
                <div className="pt-4 border-t border-[#2b1b17]/10 dark:border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 bg-[#f4efea] dark:bg-white/10 p-1 rounded-xl border border-[#2b1b17]/10 dark:border-white/10">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-1 rounded-lg hover:bg-white/20 text-[#2b1b17] dark:text-[#f4efea]"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2 text-xs font-mono font-bold text-[#2b1b17] dark:text-[#f4efea]">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-1 rounded-lg hover:bg-white/20 text-[#2b1b17] dark:text-[#f4efea]"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Calculated Total */}
                    <div className="text-right">
                      <span className="text-[10px] font-mono opacity-60 block">Estimated Total</span>
                      <span className="text-base font-mono font-bold text-amber-800 dark:text-amber-400">
                        ₹{calculatedTotal}
                      </span>
                    </div>
                  </div>

                  {orderAdded ? (
                    <div className="py-3 rounded-xl bg-emerald-600 text-white text-xs font-mono font-bold text-center flex items-center justify-center gap-2 shadow-md">
                      <MessageCircle className="w-4 h-4" />
                      <span>Sending Order to WhatsApp...</span>
                    </div>
                  ) : (
                    <button
                      onClick={handleOrder}
                      className="espresso-pill w-full py-3.5 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
                    >
                      <ShoppingBag className="w-4 h-4 text-amber-400 dark:text-[#0d0e11]" />
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
