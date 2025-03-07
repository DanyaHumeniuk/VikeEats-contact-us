/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'regular': '#000000',
        'secondary': '#005493',
        'primary-light': '#2f76ff',
        'primary-dark': '#002754',
        'accent-yellow': '#F5AA1C',
        'accent-blue': '#57B7E7',
        'accent-light-blue': '#BEE7F9',
      },
      fontFamily: {
        "header-regular": ["Arial", "sans-serif"],
      },
      boxShadow: {
        'dark': '0px 0px 15px rgba(0, 0, 0, 0.3)',
        'darker': '0px 0px 15px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

