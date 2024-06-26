/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        surfaceDuo: '540px',
        tablet: '768px',
        largeTablet: '1024px',
        desktop: '1440px'
      },
      container: {
        padding: {
          DEFAULT: '0.5rem',
          sm: '1rem',
          lg: '2rem',
          xl: '4rem'
        }
      },
      colors: {
        darkRed: '#8a394a',
        mediumRed: '#ae2e49',
        brightRed: '#db3a56',
        darkGreen: '#558f7c',
        mediumGreen: '#1abe91',
        brightGreen: '#59baa9',
        darkerWhite: '#eaf4f2',
        lighterWhite: '#f2f2f2',
        grey: '#525050',
        vibrantCyan: '#00F2E6',
        moderateCyan: '#28A6A0',
        pastelCyan: '#8FC9C5',
        paleCyan: '#B2DCD9',
        black: '#000000'
      },
      spacing: {
        28: '7rem'
      },
      letterSpacing: {
        tighter: '-.04em'
      },
      lineHeight: {
        tight: 1.2
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem'
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)'
      }
    }
  },
  plugins: []
}
