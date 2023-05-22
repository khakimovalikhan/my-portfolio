/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mplus: ['\'M Plus Rounded 1c\', \'Verdana\', \'sans-serif\''],
      },
    },
  },
  plugins: [],
}
