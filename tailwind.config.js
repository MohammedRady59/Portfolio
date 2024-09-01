/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "4rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/Img/me.png')",
        "custom-gradient": "linear-gradient(90deg, #ffffff1a, #fff0)",
      },
      colors: {
        customBlue: "#83dbff",
        head: "#111827",
      },
      cursor: {
        fancy: "url(https://img.icons8.com/arcade/40/cursor.png), auto",
      },
      fontFamily: {
        nav: ["Roboto Mono", "monospace"],
        main: ["Noto Nastaliq Urdu", "serif"],
        name: ["Montserrat Alternates", "sans-serif"],
        lota: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
