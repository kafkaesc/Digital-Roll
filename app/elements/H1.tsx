interface H1Props {
	children: any;
	className?: string;
	[props: string]: any;
}

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
