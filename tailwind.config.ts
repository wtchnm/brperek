import defaultTheme from 'tailwindcss/defaultTheme'
import { Config } from 'tailwindcss/types'

const config: Config = {
	content: ['src/**/*.astro'],
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
export default config
