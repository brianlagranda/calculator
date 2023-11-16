/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-darkBlue': 'hsl(222, 26%, 31%)',
        'toggle-darkBlue': 'hsl(223, 31%, 20%)',
        'screen-darkBlue': 'hsl(224, 36%, 15%)',
        'keyHover-lightBlue': 'hsl(224, 51%, 76%)',
        'key-blue': 'hsl(225, 21%, 49%)',
        'keyShadow-darkBlue': 'hsl(224, 28%, 35%)',
        'keyHover-lightRed': 'hsl(6, 93%, 67%)',
        'key-red': 'hsl(6, 63%, 50%)',
        'keyShadow-darkRed': 'hsl(6, 70%, 34%)',
        'key-lightGrayishOrange': 'hsl(30, 25%, 89%)',
        'keyShadow-grayishOrange': 'hsl(28, 16%, 65%)',
        grayishBlue: 'hsl(221, 14%, 31%)',
      },
      fontSize: {
        '3xlPlus': '2rem',
      },
      letterSpacing: {
        widestPlus: '.25em',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};

