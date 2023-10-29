/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-darkBlue': 'hsl(222, 26%, 31%)',
        'toggle-darkBlue': 'hsl(223, 31%, 20%)',
        'screen-darkBlue': 'hsl(224, 36%, 15%)',

        'key-blue': 'hsl(225, 21%, 49%)',
        'keyShadow-darkBlue': 'hsl(224, 28%, 35%)',
        'toggle-red': 'hsl(6, 63%, 50%)',
        'toggleShadow-darkRed': 'hsl(6, 70%, 34%)',

        'key-lightGrayishOrange': 'hsl(30, 25%, 89%)',
        'keyShadow-grayishOrange': 'hsl(28, 16%, 65%)',

        grayishBlue: 'hsl(221, 14%, 31%)',
      },
      fontSize: {
        '3xlPlus': '2rem',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};

