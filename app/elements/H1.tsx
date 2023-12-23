import { ReactNode } from 'react';

interface H1Props {
	children: ReactNode;
	className?: string;
	[props: string]: any;
}

/**
 * Component H1 is an element level component for the HTML level-1 heading element.
 *
 * All element components should recreate the use of a styled HTML element
 * with the ability to pass any attributes associated with that element into
 * its instance within this component.
 * @param {ReactNode} children The content of the h1 element
 * @param {string} className Optional string, if included it will be appended
 * to the other classes styling the element
 * @param {any} props Properties that will be passed along the the h1 element
 * @returns {JSX.Element} A styled anchor element
 */
export default function H1({ children, className, ...props }: H1Props) {
	return className &&
		(className.includes('text-center') ||
			className.includes('text-left') ||
			className?.includes('text-right')) ? (
		<h1 {...props} className={`text-4xl font-bold ${className}`}>
			{children}
		</h1>
	) : className ? (
		<h1 {...props} className={`text-4xl font-bold text-center ${className}`}>
			{children}
		</h1>
	) : (
		<h1 {...props} className="text-4xl font-bold text-center">
			{children}
		</h1>
	);
}
