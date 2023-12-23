import { ReactNode } from 'react';

interface H3Props {
	children: ReactNode;
	className?: string;
	[props: string]: any;
}

/**
 * Component H3 is an element level component for the HTML level-3 heading element.
 *
 * All element components should recreate the use of a styled HTML element
 * with the ability to pass any attributes associated with that element into
 * its instance within this component.
 * @param {ReactNode} children The content of the h3 element
 * @param {string} className Optional string, if included it will be appended
 * to the other classes styling the element
 * @param {any} props Properties that will be passed along the the h3 element
 * @returns {JSX.Element} A styled anchor element
 */
export default function H3({ children, className, ...props }: H3Props) {
	return className ? (
		<h3 {...props} className={`mb-2 text-xl font-bold ${className}`}>
			{children}
		</h3>
	) : (
		<h2 {...props} className="mb-2 text-xl font-bold ">
			{children}
		</h2>
	);
}
