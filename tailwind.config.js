/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'basecolor': '#333333',
        'inti': '#006A7A'
      },
      fontFamily: {
        'nunito': ['nunito', 'sans-serif']
      },
    },
  },
  plugins: [],
}
