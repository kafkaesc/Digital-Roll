import { Link } from '@remix-run/react';

interface NavItemProps {
	children: any;
	to: string;
}

export default function NavItem({ children, to }: NavItemProps) {
	return (
		<li className="inline-block mx-1 text-blue-600 hover:underline">
			<Link to={to}>{children}</Link>
		</li>
	);
}
