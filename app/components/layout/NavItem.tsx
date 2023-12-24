import { ReactNode } from 'react';

import { Link } from '@remix-run/react';

interface NavItemProps {
	children: ReactNode;
	to: string;
}

export default function NavItem({ children, to }: NavItemProps) {
	return (
		<li className="inline-block px-2 py-1 mx-0.5 text-blue-600 rounded hover:underline hover:bg-gray-300">
			<Link to={to}>{children}</Link>
		</li>
	);
}
