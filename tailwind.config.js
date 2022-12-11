/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        Merriweather: "'Merriweather', serif",
        Climate: "'Climate Crisis', cursive;"
      }
    },
  },
  plugins: [],
}
