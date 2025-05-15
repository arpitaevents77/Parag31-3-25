/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'casino-red': '#e31b23',
        'casino-gold': '#ffd700',
        'casino-black': '#1a1a1a',
        'casino-purple': '#4a154b',
        'casino-green': '#00843d',
      },
      backgroundImage: {
        'casino-pattern': "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffd700' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.casino-gold), 0 0 20px theme(colors.casino-gold)',
        'neon-strong': '0 0 10px theme(colors.casino-gold), 0 0 30px theme(colors.casino-gold), 0 0 50px theme(colors.casino-gold)',
      },
      transitionProperty: {
        'transform': 'transform',
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
};