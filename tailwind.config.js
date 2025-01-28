module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
      },
      screens: {
        '3xl': '1920px',  // You can adjust this pixel value
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}