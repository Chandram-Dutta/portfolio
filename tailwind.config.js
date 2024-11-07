/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			bodonimoda: ['Bodoni Moda', 'serif']
		},
		listStyleType: ['dash']
	},
	plugins: [require('@tailwindcss/typography')],
};
