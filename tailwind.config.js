/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold:    '#EB9A20',
        'gold-alt': '#DC9E3A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body:    ['Lora', 'serif'],
        mono:    ['"Courier New"', 'monospace'],
      },
      animation: {
        'fade-slide-up': 'fadeSlideUp 0.5s ease both',
        'fade-in':       'fadeIn 0.4s ease both',
      },
    },
  },
  plugins: [],
};
