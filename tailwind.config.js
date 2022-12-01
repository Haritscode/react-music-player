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
      '4/6':'66.66%',
      "screen":"100%",
      '1/2':"50%"
    },
    animation:{
      "spin-slow":'spin 3s linear infinite',
      "spin-stop":'spin 10s linear'
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}