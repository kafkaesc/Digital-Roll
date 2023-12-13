interface H2Props {
	children: any;
	className?: string;
	[props: string]: any;
}

export default function H2({ children, className, ...props }: H2Props) {
	return className ? (
		<h2 {...props} className={`mb-2 text-2xl font-bold ${className}`}>
			{children}
		</h2>
	) : (
		<h2 {...props} className="mb-2 text-2xl font-bold ">
			{children}
		</h2>
	);
}
