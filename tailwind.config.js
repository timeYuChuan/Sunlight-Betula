/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'neutral-0': '#ffffff',
      'surface-100': '#000000',
      'blue-500':'#4C71D2',
      'on-surface': '#333333',
      'on-surface-variant':'#999999',
      'slate-100': '#D3D6E1',
      'neutral-100': '#F6F6F6',
      'info-varient': '#2F88CC',
      'link':'#5D80ED',
      'link-variant':'#4C71D2',
      'green-100': '#E7F7D0',
    },
    fontFamily: {
      'vs-sans': ["Inter"],
    },
    screens: {
      'sm': '320px',
      'md':'640',
      'lg': '1024px',
      'xl': '1440px',
    },
    
    extend: {
      backgroundImage:{
        'herobannerbg':"url('./src/assets/images/herobanner-bg.png')",
      },
    },
  },
  plugins: [],
}

