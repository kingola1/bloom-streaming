/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './contact.html'],
  theme: {
    extend: {
      colors: {
        'bloom-black': '#1D1D1D',
        'bloom-orange': '#FF8100',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
  ],
}
