module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'scaleY(0.90)' },
       
          '100%': { transform: 'scaleY(1)' },
          
        }
      },
      animation: {
        'spin-slow': '-translate-y-6 3s ease-in-out',
        'wiggle': 'wiggle 0.2s ease-in-out',
      }
    }
  },
  plugins: [],
  }