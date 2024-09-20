/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'scale-down-infinite': 'scale-down 1s ease-in-out infinite',
        'fade' : 'fade 2s ease-in-out',
        'fade2' : 'fade 2s ease-in-out 2s',
      },
      keyframes: {
        'scale-down': {
          '0%': {
            scale: 0,
          },
          '100%': {
            scale: 1,
          },
        },
        fade: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      colors: {
        'primary': '#01717E',
        'secondary': '#1C1C1C',
      },
    },
  },
  plugins: [],
}