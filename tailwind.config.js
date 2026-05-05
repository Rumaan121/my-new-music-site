/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enables dark mode via a CSS class
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lightBg: "#ffffff",
        lightText: "#000000",
        darkBg: "#1a1a1a",
        darkText: "#f5f5f5",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
      },
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
      },
    },
  },
  plugins: [],
}
