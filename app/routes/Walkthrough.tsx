import H1 from '~/elements/H1';
import BodyColumn from '~/components/layout/BodyColumn';
import Nav from '~/components/layout/Nav';
import WalkthroughBody from '~/components/WalkthroughBody';

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
