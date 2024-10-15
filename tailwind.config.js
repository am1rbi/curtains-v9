/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans Hebrew"', 'sans-serif'],
      },
      colors: {
        gold: '#D4AF37',
        'gold-dark': '#B8860B',
      },
    },
  },
  plugins: [],
};