/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ===== BRAND PALETTE =====
        // Primary maroon
        brand: {
          DEFAULT: "#801C1C",
          light: "#9E2A2A",
          dark: "#5E1414",
        },
        // Gold / brass accent
        gold: {
          DEFAULT: "#B4914A",
          light: "#CBA862",
          dark: "#8C6F37",
        },
        // Warm dark ink (text + dark sections)
        ink: {
          DEFAULT: "#231A17",
          soft: "#3C302B",
        },
        // Warm cream surfaces
        cream: {
          DEFAULT: "#FAF7F2",
          dark: "#F1EADD",
        },
        // Backwards-compatible aliases
        primary: "#801C1C",
        accent: "#B4914A",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ['"Playfair Display"', "ui-serif", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(35, 26, 23, 0.18)",
        gold: "0 12px 30px -10px rgba(180, 145, 74, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};
