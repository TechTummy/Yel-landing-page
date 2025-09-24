/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#CC2E30",
        dark:"#000000",
         'primary-dark': '#0A0118',
        'secondary-dark': '#1C0B3E',
      },
      fontFamily: {
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
        nunito: ['"Nunito Sans"', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      keyframes: {
        marqueeRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        marqueeLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marqueeRight: 'marqueeRight 20s linear infinite',
        marqueeLeft: 'marqueeLeft 10s linear infinite',
      },
      scale: {
        '110': '1.1',
        '125': '1.25',
        '140': '1.4',
      },
      backgroundImage: {
    'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
  },
   boxShadow: {
        glow: '0 0 60px rgba(124, 58, 237, 0.4)',
      },
    },
  },
  plugins: [],
};
