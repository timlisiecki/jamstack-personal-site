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
			fontFamily: {
				sans: ['Poppins', 'sans-serif']
			}
		},
  },
  variants: {
		extend: {
      scale: ['group-hover'],
      boxShadow: ['dark']
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
