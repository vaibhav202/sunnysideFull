/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      // primary
      'soft-red': 'hsl(7, 99%, 70%)',
      'yellow': 'hsl(51, 100%, 49%)',
      'dark-saturated-cyan': 'hsl(167, 40%, 24%)',
      'dark-blue': 'hsl(198, 62%, 26%)',
      'dark-moderate-cyan': 'hsl(168, 34%, 41%)',
      'header-img-clr': 'hsl(200, 100%, 62%)',
      'hover-clr': 'hsl(200, 100%, 72%)',
      'ftr-clr': 'hsl(167, 44%, 70%)',
      'ftr-txt-clr': 'hsl(168, 43%, 32%)',
      'very-dark-saturated-blue': 'hsl(212, 27%, 19%)',
      'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
      'dark-grayish-blue': 'hsl(232, 10%, 55%)',
      'grayish-blue': 'hsl(210, 4%, 67%)',
      'white': 'hsl(0, 0%, 100%)'
    },
    extend: {},
  },
  plugins: [],  
}