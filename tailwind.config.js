/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        work: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
