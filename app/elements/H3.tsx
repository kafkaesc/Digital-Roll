import { ReactNode } from 'react';

interface H3Props {
	children: ReactNode;
	className?: string;
	[props: string]: any;
}

export default function H3({ children, className, ...props }: H3Props) {
	return className ? (
		<h2 {...props} className={`mb-2 text-xl font-bold ${className}`}>
			{children}
		</h2>
	) : (
		<h2 {...props} className="mb-2 text-xl font-bold ">
			{children}
		</h2>
	);
}
