interface BodyColumnProps {
	children: any;
	[props: string]: any;
}

export default function BodyColumn({ children, ...props }: BodyColumnProps) {
	return (
		<div className="max-w-4xl mx-3 lg:mx-auto" {...props}>
			{children}
		</div>
	);
}
