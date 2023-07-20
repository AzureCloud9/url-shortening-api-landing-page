/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color1': '#EFF1F7',
        'color2': '#9E9AA8',
        'color3': '#4B3F6B',
        'color4': '#3A3054',
        'color5': '#2BD0D0',
        'color6': '#34313D',
        'color7': '#9AE3E3',
        'color8': '#2BD0D0',

      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
