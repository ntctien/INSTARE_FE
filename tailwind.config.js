/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'input-label':'#676767',
        'grey':'#777777',
        'pastel-blue':'#96CAF726'
      },
      borderRadius: {
        5: '5px',
        10: '10px',
        15: '15px',
        40: '40px',
      },
      borderWidth: {
        '2':'2px'
      },
      fontSize: {
        '32': ['32px', '37px'],
        '16': ['16px', '18px'],
      },
    },
  },
  plugins: [],
}
