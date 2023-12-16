interface CodeSpanProps {
	children: string;
	className?: string;
	[props: string]: any;
}

export default function CodeSpan({
	children,
	className,
	...props
}: CodeSpanProps) {
	return className ? (
		<code
			className={`bg-slate-100 rounded px-1 py-0.5 text-sm ${className}`}
			{...props}
		>
			{children}
		</code>
	) : (
		<code className="bg-slate-100 rounded px-1 py-0.5 text-sm" {...props}>
			{children}
		</code>
	);
}
