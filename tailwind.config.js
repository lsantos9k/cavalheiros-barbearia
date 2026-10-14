/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1a100c',
        espresso: '#381a12',
        mogno: '#54281d',
        champagne: '#edd5b2',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Satoshi', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 60px -20px rgba(0,0,0,0.6)',
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
      animation: { marquee: 'marquee 60s linear infinite' },
    },
  },
  plugins: [],
}
