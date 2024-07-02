/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    screens : {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    container : {
      center: true,
      padding : '1rem'
    },
    extend: {
      fontFamily : {
        'Inter' : ['Inter','sans-serif'],
        'Roboto' : ['Roboto','sans-serif']
      },
      colors : {
        'primary' : '#FD3D57',
        'secondary' : ''
      }
    },
  },
  variants:{
    extend : {
      display : ['group-hover'],
      visibility : ['group-hover'],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

