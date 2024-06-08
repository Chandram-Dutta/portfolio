/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			'jb-mono': ['JetBrains Mono', 'monospace']
		},
		listStyleType: ['dash']
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: ['night']
	}
};
