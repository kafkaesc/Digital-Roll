import type { MetaFunction } from '@remix-run/node';

import H1 from '~/elements/H1';
import BodyColumn from '~/components/layout/BodyColumn';
import Nav from '~/components/layout/Nav';
import WalkthroughBody from '~/components/WalkthroughBody';

export const meta: MetaFunction = () => {
	return [
		{ title: 'How to Roll : Digital Roll : Built by Jared Hettinger' },
		{
			name: 'description',
			content:
				"There are several types of dice rolls, it might sound confusing, but with this walkthrough you'll be rolling along in no time",
		},
	];
};

/** @returns {JSX.Element} Page-level component for the Walkthrough page */
export default function Walkthrough() {
	return (
		<div>
			<H1>A Walkthrough of the Roll Commands</H1>
			<BodyColumn>
				<Nav />
				<WalkthroughBody hideTopHeading={true} />
			</BodyColumn>
		</div>
	);
}
