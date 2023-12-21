import type { MetaFunction } from '@remix-run/node';

import H1 from '~/elements/H1';
import Link from '~/elements/Link';
import P from '~/elements/P';
import BodyColumn from '~/components/layout/BodyColumn';

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

/** @returns {JSX.Element} Page-level component for the Digital Roll About page */
export default function About(): JSX.Element {
	return (
		<div>
			<H1>About Digital Roll</H1>
			<div className="text-center">
				<Link to="/Room" className="mx-1">
					Chatroom
				</Link>
				<Link to="/Walkthrough" className="mx-1">
					Walkthrough
				</Link>
				<Link to="/About" className="mx-1">
					About
				</Link>
			</div>
			<BodyColumn>
				<P className="text-center">Built by Jared Hettinger</P>
			</BodyColumn>
		</div>
	);
}
