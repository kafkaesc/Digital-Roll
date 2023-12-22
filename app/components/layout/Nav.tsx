import NavItem from '~/components/layout/NavItem';

export default function Nav() {
	return (
		<ul className="text-center">
			<NavItem to="/">Home</NavItem>
			<NavItem to="/Room">Chatroom</NavItem>
			<NavItem to="/Walkthrough">Walkthrough</NavItem>
			<NavItem to="/About">About</NavItem>
		</ul>
	);
}
