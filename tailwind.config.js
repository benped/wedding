/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sage-green": "#8BA888",
      },
      animation: {
        scroll: "scroll 30s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "rotate(-90deg) translateX(-100%)" },
          "100%": { transform: "rotate(-90deg) translateX(-200%)" },
        },
      },
      fontFamily: {
        harmond: ["Harmond", "serif"],
        mono: ["Andale Mono", "monospace"],
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
