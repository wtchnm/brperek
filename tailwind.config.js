const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	theme: {
		extend: {
			backgroundImage: {
				body: `url('/background.webp')`
			},
			colors: {
				background: '#141414'
			},
			textColor: {
				primary: '#FFFFFF',
				secondary: '#61803A',
				tertiary: '#9D9C9C'
			},
			fontFamily: {
				sans: ['Roboto', ...defaultTheme.fontFamily.sans]
			},
			letterSpacing: {
				full: '0.2em'
			}
		}
	}
}
