/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#FAA7A7', // Replace 'custom-color' with your color name and '#123456' with your color code
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui:{
    themes: ['night']
  }
};
