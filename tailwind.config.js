const plugin = require('tailwindcss/plugin')

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)'
    }
  })
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0.2, 0.6, 1) infinite',
      }
    }
  },
  plugins: [rotateY],
}