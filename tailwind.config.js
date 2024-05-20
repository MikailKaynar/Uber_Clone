module.exports = {
  mode:"jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundColor: theme =>({
        'brand-color': '#000000',
      }),
      spacing:{
        "30":"7.5rem"
      },
      lineHeight: {
        '12': '4rem'
      },
      fontSize: {
        "5.5xl":"3.5rem",
        "3.5xl":"2.10rem"
      },
      borderWidth: {
        "0.5" : "0.5px"
      },
      inset: {
        '90': "23.25rem",
      }
    },
  },
  plugins: [],
}