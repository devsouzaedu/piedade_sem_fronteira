/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#b3d1ff',
          200: '#80b3ff',
          300: '#4d94ff',
          400: '#1a75ff',
          500: '#0052cc',
          600: '#0047b3',
          700: '#003d99',
          800: '#003380',
          900: '#002966',
          950: '#001a40',
        },
        secondary: {
          50: '#fff9e6',
          100: '#ffefb3',
          200: '#ffe680',
          300: '#ffdd4d',
          400: '#ffd11a',
          500: '#ffc400',
          600: '#e6b000',
          700: '#cc9c00',
          800: '#b38800',
          900: '#996e00',
          950: '#735200',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 