import { ReactNode } from 'react';

interface BodyColumnProps {
	children: ReactNode;
	className?: string;
	[props: string]: any;
}

/**
 * @param {ReactNode} children The content of the column
 * @param {string} className Optional string, if included the classes will be
 * added to the div element for the body column
 * @param {any} props Optional object whose properties will be added to the
 * div element for the body column
 * @returns {JSX.Element}
 */
export default function BodyColumn({
	children,
	className,
	...props
}: BodyColumnProps) {
	return className ? (
		<div className={`max-w-4xl mx-3 lg:mx-auto ${className}`} {...props}>
			{children}
		</div>
	) : (
		<div className="max-w-4xl mx-3 lg:mx-auto" {...props}>
			{children}
		</div>
	);
}
