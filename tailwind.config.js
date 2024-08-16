/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '30': '30deg',
      },
      backgroundImage: {
        'bg-mobile': "url(assets/bg.svg)",
        'bg-pc': "url(assets/bgpc.svg)",
      }
    },
  },
  plugins: [],
}

