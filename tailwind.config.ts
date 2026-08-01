import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0D0E11",
          card: "#16181D",
          light: "#21242C",
        },
        cream: {
          DEFAULT: "#F5F2EB",
          muted: "rgba(245, 242, 235, 0.65)",
          dim: "rgba(245, 242, 235, 0.4)",
        },
        amber: {
          DEFAULT: "#D99B26",
          dark: "#B87F18",
          glow: "rgba(217, 155, 38, 0.3)",
        },
        sage: {
          DEFAULT: "#8A9A86",
          dark: "#5E6C5A",
        },
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "serif"],
        display: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        amber: "0 0 30px rgba(217, 155, 38, 0.25)",
        card: "0 16px 40px rgba(0, 0, 0, 0.5)",
      },
      backdropBlur: {
        glass: "16px",
        nav: "20px",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.05)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "float-slow": "floatSlow 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
