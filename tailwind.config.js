/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'primary' : '#87A2FF',
        'primaryHover' : '#C4D7FF'
      },
      fontFamily : {
        'Dana' : 'Dana',
        'DanaMedium' : 'Dana medium',
        'DanaBold' : 'Dana bold',
        'MorabbaBold' : 'Morabba bold'
      }
    },
  },
  plugins: [
    function ({addVariant}) {
      addVariant('children','&>*')
      addVariant('childrenHover', '&>*:hover')
      }
  ],
}

