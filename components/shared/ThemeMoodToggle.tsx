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
    <div className="fixed bottom-6 right-6 z-[9999] pointer-events-auto">
      <button
        type="button"
        onClick={toggleMood}
        className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-espresso text-cream border border-amber-500/40 text-xs font-mono font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer select-none"
        title="Toggle Ambiance Lighting Mode (Nocturnal Bistro vs Daylight Cafe)"
      >
        {isDark ? (
          <>
            <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
            <span className="text-amber-400">Daylight Cafe Mode</span>
          </>
        ) : (
          <>
            <Moon className="w-4 h-4 text-amber-400" />
            <span className="text-cream">Nocturnal Bistro Mood</span>
          </>
        )}
      </button>
    </div>
  );
}
