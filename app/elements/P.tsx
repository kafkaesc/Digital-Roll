import { ReactNode } from 'react';

interface PProps {
	children: ReactNode;
	className?: string;
	[props: string]: any;
}

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
