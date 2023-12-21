import type { MetaFunction } from '@remix-run/node';

import H1 from '~/elements/H1';
import Link from '~/elements/Link';

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

/** @returns {JSX.Element} Page-level component for the Digital Roll homepage */
export default function Index() {
	return (
		<div>
			<H1>Digital Roll</H1>
			<div className="text-center">
				<Link to="/room" className="mx-1">
					Chatroom
				</Link>
				<Link to="/walkthrough" className="mx-1">
					Walkthrough
				</Link>
				<Link to="/about" className="mx-1">
					About
				</Link>
			</div>
		</div>
	);
}
