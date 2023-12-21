interface BodyColumnProps {
	children: any;
	className?: string;
	[props: string]: any;
}

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
