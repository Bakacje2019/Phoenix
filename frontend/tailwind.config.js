/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#A855F7',
          dark: '#7E22CE',
          light: '#C084FC',
        },
      },
    },
  },
  plugins: [],
};