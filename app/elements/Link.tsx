import { ReactNode } from 'react';
import { Link as ReLink } from '@remix-run/react';

interface LinkProps {
	children: ReactNode;
	className?: string;
	to: string;
	[props: string]: any;
}

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
