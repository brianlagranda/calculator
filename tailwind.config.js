/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grayishOrange: 'hsl(30, 25%, 89%)',
        grayishOrangeDark: 'hsl(28, 16%, 65%)',
      },
      width: {
        132: '34rem',
      },
    },
  },
  plugins: [],
};

