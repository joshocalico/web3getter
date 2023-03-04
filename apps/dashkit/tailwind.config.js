/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pumpkin: {
          '50':  '#fbfaf5',
          '100': '#f9efc4',
          '200': '#f3db8d',
          '300': '#e0b55a',
          '400': '#e88c38',
          '500': '#ac691b',
          '600': '#8e4f11',
          '700': '#6d3b0f',
          '800': '#4b290d',
          '900': '#311909',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
