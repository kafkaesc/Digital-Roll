import type { Config } from 'tailwindcss';

export default {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: [
				'Noto Sans JP',
				'Helvetica Neue',
				'Helvetica',
				'Arial',
				'sans-serif',
			],
		},
	},
	plugins: [],
} satisfies Config;
