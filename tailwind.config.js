/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#251B37"
      },
      height :{
        nav:"10%"
      }
    },
  },
  plugins: [],
}
