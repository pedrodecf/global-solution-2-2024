// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slide: "35s linear infinite slide",
      },
      colors: {
        "dark-green": "#03110C",
        "dark-green-2": "#030906",
        "dark-green-3": "#07140D",
        "light-green": "#62E763",
        white: "#FFFFFF",
        gray: "#AEAFAE",
        primary: "#62E763"
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
        "6xl": "3.815rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      lineHeight: {
        extraLoose: "2.5",
        12: "3rem",
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".1em",
      },
    },
    variants: {
      backgroundClip: ["text"],
    },
  },
  plugins: [],
};
