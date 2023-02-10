/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "banner-bg":"url('/public/bannerBg.jpg')"
      }
    },
  },
  plugins: [],
}