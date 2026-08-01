/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: "#2B1B17",
          dark: "#1A0F0D",
          light: "#4A322A",
          accent: "#3D231D",
        },
        cream: {
          DEFAULT: "#F4EFEA",
          card: "#EFE8DF",
          soft: "#F8F5F0",
          muted: "rgba(43, 27, 23, 0.65)",
        },
        obsidian: {
          DEFAULT: "#0D0E11",
          card: "#16181D",
          light: "#21242C",
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
        espresso: "0 20px 40px -15px rgba(43, 27, 23, 0.3)",
        pill: "0 8px 25px rgba(43, 27, 23, 0.2)",
        amber: "0 0 30px rgba(217, 155, 38, 0.25)",
        card: "0 16px 40px rgba(0, 0, 0, 0.5)",
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
