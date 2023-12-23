import type { MetaFunction } from '@remix-run/node';

import H1 from '~/elements/H1';
import P from '~/elements/P';
import BodyColumn from '~/components/layout/BodyColumn';
import Nav from '~/components/layout/Nav';

export const meta: MetaFunction = () => {
	return [
		{ title: 'About : Digital Roll : Built by Jared Hettinger' },
		{
			name: 'description',
			content: 'About Digital Roll, a digital place to roll with friends',
		},
	];
};

/** @returns {JSX.Element} Page-level component for the Digital Roll About page */
export default function About(): JSX.Element {
	return (
		<div>
			<H1>About Digital Roll</H1>
			<Nav />
			<BodyColumn>
				<P className="text-center">Built by Jared Hettinger</P>
			</BodyColumn>
		</div>
	);
}
