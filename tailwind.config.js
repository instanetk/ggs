const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  colors: {
    gray: colors.coolGray,
    green: colors.emerald,
    blue: colors.indigo,
    yellow: colors.amber,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '770px',
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    backgroundImage: true,
  },
  plugins: [require('@tailwindcss/forms')],
};
