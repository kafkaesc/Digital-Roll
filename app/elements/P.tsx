interface PProps {
	children: any;
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
