import type { MetaFunction } from '@remix-run/node';

import H1 from '~/elements/H1';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Digital Roll: Same rolls in a bigger world' },
		{
			name: 'description',
			content:
				'Digital Roll provides an online experience for tabletop dice rolls between friends',
		},
	];
};

export default function Index() {
	return (
		<div>
			<H1>Digital Roll</H1>
		</div>
	);
}