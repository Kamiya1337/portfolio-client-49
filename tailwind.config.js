/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        academic: {
          background: '#FCF8FF',
          ivory: '#F6F2FF',
          blush: '#FFF0F8',
          pastel: '#A78BFA',
          rose: '#FC79BD',
          'deep-rose': '#674BB5',
          ink: '#181445',
          muted: '#494552',
          border: '#FFFFFF66',
          card: '#FFFFFF',
          sidebar: '#181445',
          'sidebar-border': '#E3DFFF',
          navy: '#181445',
          'hero-blue': '#674BB5',
          blue: '#674BB5',
          cyan: '#CEBDFF',
          'blue-light': '#A78BFA',
          warning: '#B49C00',
          yellow: '#FFE24C',
          lavender: '#E8DDFF',
          magenta: '#A43073',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 32px rgba(0, 0, 0, 0.04)',
        glass: '0 20px 60px rgba(167, 139, 250, 0.15)',
      },
    },
  },
  plugins: [],
};
