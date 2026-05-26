module.exports = {
  content: [
    "./pages/**/[^_]*.js"
  ],
  theme: {
    extend: {
      colors: {
        DEFAULT: '#000000',
        'pink': '#e91e8c',
        'blue': '#17324D',
        'gray': '#D9D9D9',
        'red': '#DA1C5C',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      maxWidth: {
        '1440px': '1440px',
      },
      fontSize: {
        'h1': ['42px', '42px'],
        'h2': ['30px', '30px'],
        'sm': ['14px', '18px'],
        'base': ['20px', '26px'],
      },
      borderRadius: {
        '12': '3rem',
      },
    },
  },
}