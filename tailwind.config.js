/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'meilleure-offre': "url('/src/assets/img/no-image.png')",
      }
    }
  },
  plugins: [],
}
