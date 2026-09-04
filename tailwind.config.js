/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
    extend: {
      colors: {
        darkBg: "#080c0a",
        cardBg: "#0f1613",
        emeraldAccent: "#10b981",
        mintGlow: "#34d399",
        customBlue: "#10b981",
        cyanGlow: "#34d399",
        violetGlow: "#2dd4bf",
        head: "#080c0a",
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(16, 185, 129, 0.45)",
        "glow-lg": "0 0 35px -5px rgba(52, 211, 153, 0.45)",
        "card-glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      fontFamily: {
        nav: ["Roboto Mono", "monospace"],
        main: ["Montserrat Alternates", "sans-serif"],
        lota: ["Lato", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};

