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
      },
      keyframes: {
        'scale-down': {
          '0%': {
            scale: 1,
          },
          '100%': {
            scale: 0,
          },
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