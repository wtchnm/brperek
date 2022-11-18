const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['src/**/*.astro'],
	theme: {
		backgroundColor: {
			primary: '#171717'
		},
		backgroundImage: {
			body: "url('/images/background.webp')"
		},
		textColor: {
			primary: '#FFFFFF',
			secondary: '#9D9C9C',
			tertiary: '#61803A'
		},
		extend: {
			fontFamily: {
				sans: ['Roboto', ...defaultTheme.fontFamily.sans]
			},
			letterSpacing: {
				widesest: '0.2em'
			}
		}
	},
	experimental: 'all',
	future: 'all'
}
