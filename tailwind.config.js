/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: '0.9375rem' /* 15px */
    },
    extend: {
      colors: {
        black: '#222',
        gray: {
          100: '#f7fafc',
          900: '#1a202c'
        }
      }
    },
  },
  plugins: [],
}

