"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  staggerChildren?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  staggerChildren = 0.2, // 200ms stagger between elements
  className = "",
}: ScrollRevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -30, y: 0 };
      case "right":
        return { opacity: 0, x: 30, y: 0 };
      case "down":
        return { opacity: 0, y: -30, x: 0 };
      default:
        return { opacity: 0, y: 30, x: 0 };
    }
  };

  const containerVariants = {
    hidden: getInitialPosition(),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: staggerChildren,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Child element helper for staggered fade-up (Opacity + TranslateY only)
export function ScrollRevealItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
