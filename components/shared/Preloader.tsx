"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  const brandName = "BOUFFAGE";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07, // Stagger each letter by 70ms
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[100] bg-[#2b1b17] dark:bg-[#0d0e11] text-[#f4efea] flex flex-col items-center justify-center p-4 pointer-events-none select-none shadow-2xl"
        >
          <div className="text-center space-y-3">
            {/* Letter-by-Letter Staggered Text Animation */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center gap-1 sm:gap-2 font-serif text-4xl sm:text-7xl font-bold tracking-wider"
            >
              {brandName.split("").map((letter, idx) => (
                <motion.span key={idx} variants={letterVariants} className="inline-block">
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {/* Subtitle Fade-Up */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-xs sm:text-sm text-amber-400 uppercase tracking-[0.25em] font-bold"
            >
              Cafe & Bistro • Shankar Nagar, Nagpur
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
