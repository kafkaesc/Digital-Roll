import { ReactNode } from 'react';

interface AProps {
	children: ReactNode;
	className?: string;
	[props: string]: any;
}

/**
 * Component A is an element level component for the HTML anchor element.
 * 
 * All element components should recreate the use of a styled HTML element
 * with the ability to pass any attributes associated with that element into
 * its instance within this component.
 * @param {ReactNode} children The content of the anchor element
 * @param {string} className Optional string, if included it will be appended
 * to the other classes styling the element
 * @param {any} props Properties that will be passed along the the anchor element
 * @returns {JSX.Element} A styled anchor element
 */
export default function A({ children, className, ...props }: AProps) {
	return className ? (
		<a {...props} className={`text-blue-600 hover:underline ${className}`}>
			{children}
		</a>
	) : (
		<a {...props} className="text-blue-600 hover:underline">
			{children}
		</a>
	);
}
