module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pale: '#e0e8ff',
        bright: '#3829e0',
        verypale: '#f5f7ff',
        desaturated :'#7280a7',
        dark: '#1f2f56',
        hover: '#766cf1'
      },
     fontFamily: {
       body: ['Red Hat Display', 'Helvetica']
     }
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [],
}}
