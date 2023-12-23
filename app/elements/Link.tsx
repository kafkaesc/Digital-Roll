import { ReactNode } from 'react';
import { Link as ReLink } from '@remix-run/react';

interface LinkProps {
	children: ReactNode;
	className?: string;
	to: string;
	[props: string]: any;
}

/** Link is an element level component that behaves like an anchor tag, but
 * specifically handles routing within Digital Roll.
 * 
 * All element components should recreate the use of a styled HTML element
 * with the ability to pass any attributes associated with that element into
 * its instance within this component.
 * @param {ReactNode} children The content of the link
 * @param {string} className Optional string, if included it will be appended
 * to the other classes styling the component
 * @param {any} props Properties that will be passed along the the link
 * @returns {JSX.Element} A styled link
 */
export default function Link({
	children,
	className,
	props,
	to,
}: LinkProps): JSX.Element {
	return className ? (
		<ReLink
			{...props}
			to={to}
			className={`text-blue-600 hover:underline ${className}`}
		>
			{children}
		</ReLink>
	) : (
		<ReLink {...props} to={to} className="text-blue-600 hover:underline">
			{children}
		</ReLink>
	);
}
