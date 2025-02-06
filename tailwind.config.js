/** @type {import('tailwindcss').Config} */
module.exports = {
  // Use module.exports
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    // Add this for dynamic classes
    "text-red-500",
    "fas",
    "far",
  ],
};
