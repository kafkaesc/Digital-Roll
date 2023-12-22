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
			className={`px-1 py-0.5 text-sm rounded bg-slate-100 ${className}`}
			{...props}
		>
			{children}
		</code>
	) : (
		<code className="px-1 py-0.5 text-sm rounded bg-slate-100" {...props}>
			{children}
		</code>
	);
}
