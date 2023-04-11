/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPink: "#DD2E64",
        lightPink: "#D995AC",
        lightGreen: "#9BC3C1",
        lightBrown: "#CFB9BB",
        pink: "#E9608A",
        green: "#43B8B4",
        brown: "#714F53",
        black: "#676767",
      },
      fontFamily: {
        paul: ["Paul Signature", "Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
