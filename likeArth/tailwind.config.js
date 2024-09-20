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
        'move' : 'slide-right 1s ease-in-out'
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
        fade: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-right': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(100%)' },
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