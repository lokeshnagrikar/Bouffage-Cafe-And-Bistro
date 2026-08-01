"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeMoodToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial document state
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    }
  }, []);

  const toggleMood = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextDark = !isDark;
    setIsDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[9999] pointer-events-auto">
      <button
        type="button"
        onClick={toggleMood}
        className="w-12 h-12 sm:w-auto sm:h-auto flex items-center justify-center gap-2.5 sm:px-5 sm:py-3 rounded-full bg-[#2b1b17] dark:bg-amber-500 text-[#f4efea] dark:text-[#0d0e11] border border-amber-500/40 text-xs font-mono font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer select-none"
        title="Toggle Ambiance Lighting Mode (Nocturnal Bistro vs Daylight Cafe)"
      >
        {isDark ? (
          <>
            <Sun className="w-5 h-5 sm:w-4 sm:h-4 text-amber-400 dark:text-[#0d0e11] animate-spin-slow" />
            <span className="hidden sm:inline text-amber-400 dark:text-[#0d0e11]">Daylight Cafe Mode</span>
          </>
        ) : (
          <>
            <Moon className="w-5 h-5 sm:w-4 sm:h-4 text-amber-400 dark:text-[#0d0e11]" />
            <span className="hidden sm:inline text-cream dark:text-[#0d0e11]">Nocturnal Bistro Mood</span>
          </>
        )}
      </button>
    </div>
  );
}
