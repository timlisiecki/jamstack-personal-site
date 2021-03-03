const plugin = require('tailwindcss/plugin');
const typography = require('@tailwindcss/typography');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
		extend: {
      boxShadow: {
        'sm-white': '0 1px 2px 0 rgba(255, 255, 255, 0.05)',
        'white': '0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06)',
        'md-white': '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)',
        'lg-white': '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)',
        'xl-white': '0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04)',
        'inner-white': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
      },
      colors: {
        'regal': {
          100: '#edf2f8',
          200: '#c8d7e9',
          300: '#a4bddb',
          400: '#7fa2cc',
          500: '#5b87be',
          600: '#416ea4',
          700: '#335580',
          800: '#243c5a',
          900: '#162537',
        }
      },
			fontFamily: {
				sans: ['Poppins', 'sans-serif']
			},
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.900"),
            a: {
              color: theme("colors.indigo.600"),
              textDecoration: 'none',
              "&:hover": {
                color: theme("colors.indigo.700"),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.100"),
            a: {
              color: theme("colors.green.300"),
              textDecoration: 'none',
              "&:hover": {
                color: theme("colors.green.400"),
              },
            },
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            h4: {
              color: theme('colors.white'),
            },
            h5: {
              color: theme('colors.white'),
            },
            h6: {
              color: theme('colors.white'),
            },
            strong: {
              color: theme('colors.white'),
            },
            code: {
              color: theme('colors.white'),
            },
            figcaption: {
              color: theme('colors.gray.200'),
            },
          },
        },
      }),
		},
  },
  variants: {
		extend: {
      boxShadow: ['dark'],
      scale: ['group-hover'],
      typography: ["dark"],
    },
  },
  plugins: [
    typography,
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.5xl'), fontWeight: theme('fontWeight.bold') },
        'h2': { fontSize: theme('fontSize.4xl'), fontWeight: theme('fontWeight.bold') },
        'h3': { fontSize: theme('fontSize.3xl'), fontWeight: theme('fontWeight.bold') },
        'h4': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.semibold') },
        'h5': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.semibold') },
        'h6': { fontSize: theme('fontSize.lg'), fontWeight: theme('fontWeight.semibold') },
        'p': { fontSize: theme('fontSize.base') },
        'small': { fontSize: theme('fontSize.xs') },
      })
    })
  ],
}
