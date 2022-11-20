/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    minWidth: {
      '1/10': '10%',
    },
    maxHeight:{
      '4/6':'66.66%'
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}