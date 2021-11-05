const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter'],
        LexendDeca: ['Lexend Deca'],
      }
    },
    screens: {
      'xs': '450px',
      ...defaultTheme.screens,
    },
    colors: {
      darkblue: '#090b1a',
      desatblue: '#1b1938',
      violet: '#aa5cdb',
      white: '#ffffff', 
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
