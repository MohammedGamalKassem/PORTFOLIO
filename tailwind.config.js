/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
      },
      colors: {
        'aerospace': {
          'teal': '#1e5f6f',
          'cyan': '#2dd4bf',
          'dark': '#0f1419',
        }
      }
    },
  },
  plugins: [],
}