"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Check if target or parent has interactive attributes
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("button, a, .glass-card, [data-cursor]");
      if (interactiveEl) {
        setIsHovered(true);
        const customText = interactiveEl.getAttribute("data-cursor-text");
        setHoverText(customText || "");
      } else {
        setIsHovered(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Ring */}
      <motion.div
        animate={{
          x: mousePos.x - (isHovered ? 24 : 16),
          y: mousePos.y - (isHovered ? 24 : 16),
          scale: isHovered ? 1.5 : 1,
          borderColor: isHovered ? "rgba(217, 155, 38, 0.8)" : "rgba(255, 255, 255, 0.25)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.2 }}
        className="fixed w-8 h-8 rounded-full border-2 border-white/20 backdrop-blur-[2px] flex items-center justify-center text-[9px] font-mono font-bold text-amber-400 uppercase tracking-widest pointer-events-none"
      >
        {hoverText && <span className="px-1 text-center leading-none">{hoverText}</span>}
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        animate={{
          x: mousePos.x - 3,
          y: mousePos.y - 3,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
        className="fixed w-1.5 h-1.5 rounded-full bg-amber-400 pointer-events-none"
      />
    </div>
  );
}
