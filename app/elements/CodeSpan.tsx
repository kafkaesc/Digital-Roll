interface CodeSpanProps {
	children: string;
	className?: string;
	[props: string]: any;
}

/**
 * CodeSpan is an element level component for the HTML code element,
 * specifically one to display code text in an in-line context.
 *
 * All element components should recreate the use of a styled HTML element
 * with the ability to pass any attributes associated with that element into
 * its instance within this component.
 * @param {ReactNode} children The content of the code element, only strings
 * are allowed since this component is meant to be in-line
 * @param {string} className Optional string, if included it will be appended
 * to the other classes styling the element
 * @param {any} props Properties that will be passed along the the code element
 * @returns {JSX.Element} A styled code element
 */
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
