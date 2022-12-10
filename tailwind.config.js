/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1363DF",
        secondary: "#47B5FF",
        "bg-light": "#DFF6FF",
        "bg-dark": "#06283D",
      },
      backgroundImage: {
        "top-tokyo": "url('/img/top-tokyo.webp')",
        "middle-fuji": "url('/img/middle-fuji.webp')",
      },
    },
    container: {
      padding: "1rem",
      center: true,
      DEFAULT: "4rem",
      sm: "2rem",
      lg: "4rem",
      xl: "5rem",
      "2xl": "6rem",
    },
  },
  plugins: [],
};
