import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['src/**/*.astro'],
	theme: {
		backgroundColor: {
			primary: '#171717',
			secondary: '#181F10'
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
	}
} satisfies Config
