/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'group-hover:animate-glitch',
    'group-hover:animate-glitch-1',
    'group-hover:animate-glitch-2',
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#60a5fa',
      },
      keyframes: {
        rain: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'glitch-1': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-3px, 3px)' },
          '40%': { transform: 'translate(-3px, -3px)' },
          '60%': { transform: 'translate(3px, 3px)' },
          '80%': { transform: 'translate(3px, -3px)' },
        },
        'glitch-2': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(3px, -3px)' },
          '40%': { transform: 'translate(3px, 3px)' },
          '60%': { transform: 'translate(-3px, -3px)' },
          '80%': { transform: 'translate(-3px, 3px)' },
        },
      },
      animation: {
        rain: 'rain 1s linear infinite',
        glitch: 'glitch 0.3s ease-in-out infinite',
        'glitch-1': 'glitch-1 0.3s ease-in-out infinite',
        'glitch-2': 'glitch-2 0.3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

