/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#9BE4FF',
          200: '#0b88ee',
          300: '#0b88ee',
          400: '#0b88ee',
          500: '#006CCE',
          600: '#0052AF',
          700: '#003990',
          800: '#002373',
          900: '#002272',
        },
      },
      fontFamily: { sarabun: ['Sarabun', 'sans-serif'] },
      fontSize: {
        'xs': ['12px', '16px'],
        'sm': ['14px', '22px'],
        'base': ['16px', '24px'],
        'lg': ['18px', '28px'],
        'xl': ['20px', '28px'],
        '2xl': ['24px', '32px'],
      },
      fontWeight: {
        'font-thin': 100,
        'font-extralight': 200,
        'font-light': 300,
        'font-normal': 400,
        'font-medium': 500,
        'font-semibold': 600,
        'font-bold': 700,
        'font-extrabold': 800,
        'font-black': 900,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
