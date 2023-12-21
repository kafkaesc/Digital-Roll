import H1 from '~/elements/H1';
import Link from '~/elements/Link';
import WalkthroughBody from '~/components/WalkthroughBody';

export default function Walkthrough() {
	return (
		<div>
			<H1>A Walkthrough of the Roll Commands</H1>
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
			<WalkthroughBody hideTopHeading={true} />
		</div>
	);
}
