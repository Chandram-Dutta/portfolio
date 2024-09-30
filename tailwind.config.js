/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			bitter: ['Bitter', 'serifserif']
		},
		listStyleType: ['dash']
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: ['acid']
	}
};
