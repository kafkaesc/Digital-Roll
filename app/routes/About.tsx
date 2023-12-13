import type { MetaFunction } from '@remix-run/node';

import H1 from '~/elements/H1';

export const meta: MetaFunction = () => {
	return [
		{ title: 'About | Digital Roll' },
		{
			name: 'description',
			content:
				'Digital Roll provides an online experience for tabletop dice rolls between friends',
		},
	];
};

export default function About() {
	return (
		<div>
			<H1>About Digital Roll</H1>
		</div>
	);
}
