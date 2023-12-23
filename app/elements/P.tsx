import { ReactNode } from 'react';

interface PProps {
	children: ReactNode;
	className?: string;
	[props: string]: any;
}

/**
 * Component P is an element level component for the HTML paragraph element.
 *
 * All element components should recreate the use of a styled HTML element
 * with the ability to pass any attributes associated with that element into
 * its instance within this component.
 * @param {ReactNode} children The content of the paragraph element
 * @param {string} className Optional string, if included it will be appended
 * to the other classes styling the element
 * @param {any} props Properties that will be passed along the the paragraph element
 * @returns {JSX.Element} A styled paragraph element
 */
export default function P({ children, className, ...props }: PProps) {
	return className ? (
		<p {...props} className={`mb-2 ${className}`}>
			{children}
		</p>
	) : (
		<p {...props} className="mb-2">
			{children}
		</p>
	);
}
