/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: '#1d1d1b',
          opacity: '#1d1d1bd4',
          ligth: '#30302e',
          300: '#262625',
          400: '#191918',
        },
        primary: {
          DEFAULT: '#c92828',
          opacity: '#c92828d4',
          ligth: '#ea3f3f',
          300: '#ba2626',
          400: '#a22020',
        },
        tertiary: {
          DEFAULT: '#ed4f44',
          opacity: '#ed4f44d4',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
