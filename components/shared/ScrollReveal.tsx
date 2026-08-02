"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  staggerChildren?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  staggerChildren = 0.2, // 200ms stagger between elements
  className = "",
}: ScrollRevealProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: staggerChildren, // 200ms stagger
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
