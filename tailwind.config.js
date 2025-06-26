/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        plumDark: "#4C1A57",
        blush: "#DFBBB1",
        earthy: "#524632",
        popPink: "#F65BE3",
        dustyMagenta: "#BC69AA",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
