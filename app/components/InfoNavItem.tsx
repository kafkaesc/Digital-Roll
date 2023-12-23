import { ReactNode } from 'react';

interface InfoNavItemProps {
	children: ReactNode;
	clickFn: Function;
}

/**
 * This component is a navigation list item element, intended to fit into
 * @see InfoNav component, the intended parent
 * @param {ReactNode} children Content for the li element
 * @param {Function} clickFn Delegate function that triggers which panel
 * to display in the parent
 * @returns {JSX.Element} A single InfoNav list item
 */
export default function InfoNavItem({ children, clickFn }: InfoNavItemProps) {
	return (
		<li
			className="inline-block text-blue-600 cursor-pointer hover:underline"
			onClick={() => clickFn()}
		>
			{children}
		</li>
	);
}
