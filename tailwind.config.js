/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm cream / peach / coral wedding palette
        cream: "#F9FBE7", // lightest page background
        sagebg: "#F0EDD4", // envelope-screen background
        sage: "#ECCDB4", // tan accent surfaces
        blush: "#F0EDD4", // soft section background
        leaf: "#ECCDB4",
        rose: "#FEA1A1", // coral accent (small text, dividers)
        gold: "#E08F7A", // deeper coral for seal / buttons / accents
        sagedeep: "#9D5757", // deep rose for legible headings/text
        maroon: "#9D5757", // alias used by headings — deep rose
      },
      fontFamily: {
        script: ['"Great Vibes"', "cursive"],
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ['"Mulish"', "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
