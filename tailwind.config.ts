import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		fontFamily: {
			bodonimoda: ['Bodoni Moda', 'serif'],
		}
	},
	plugins: [typography]
} satisfies Config;
