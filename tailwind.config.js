/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgColor': '#E7E7E3',
        'primaryColor': '#4A66E1'
      }
    },
  },
  plugins: [],
}
