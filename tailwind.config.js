/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'input-label': '#676767',
        'grey': '#D9D9D9',
        'grey-dark': '#777777',
        'blue': '#96CAF7',
        'pastel-blue': '#96CAF726',
        'pastel-purple': '#BFB2F326',
        'pastel-purple-dark': '#BFB2F3',
        'red': '#F24E1E',
        'modal-bg': '#F0F6FD',
        'hover': 'rgba(0,0,0,0.05)',
        'black15': 'rgba(0, 0, 0, 0.15)',
        'black50': 'rgba(0, 0, 0, 0.5)',
      },
      borderRadius: {
        5: '5px',
        10: '10px',
        15: '15px',
        40: '40px',
      },
      borderWidth: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
      },
      fontSize: {
        '10': ['10px', '12px'],
        '13': ['13px', '16px'],
        '14': ['14px', '17px'],
        '15': ['15px', '18px'],
        '16': ['16px', '18px'],
        '18': ['18px', '21px'],
        '20': ['20px', '23px'],
        '24': ['24px', '28px'],
        '32': ['32px', '37px'],
        '40': ['40px', '46px'],
      },
      fontFamily: {
        'ubuntu': 'Ubuntu'
      },
      spacing: {
        '15': '15px',
        '30': '30px'
      }
    },
  },
  plugins: [],
}
