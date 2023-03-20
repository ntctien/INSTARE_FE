/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'input-label': '#676767',
        'grey': '#D9D9D9',
        'grey-dark': '#777777',
        'pastel-blue': '#96CAF726',
        'pastel-purple': '#BFB2F326',
      },
      borderRadius: {
        5: '5px',
        10: '10px',
        15: '15px',
        40: '40px',
      },
      borderWidth: {
        '1': '1px',
        '2': '2px'
      },
      fontSize: {
        '13': ['13px', '16px'],
        '16': ['16px', '18px'],
        '20': ['20px', '23px'],
        '32': ['32px', '37px'],
      },
      fontFamily: {
        'inter': 'Inter'
      }
    },
  },
  plugins: [],
}
