interface AProps {
	children: any;
	className?: string;
	[props: string]: any;
}

export default function A({ children, className, props }: AProps) {
	return className ? (
		<a {...props} className={`text-blue hover:underline ${className}`}>
			{children}
		</a>
	) : (
		<a {...props} className="text-blue hover:underline">
			{children}
		</a>
	);
}
