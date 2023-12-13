interface ButtonProps {
	children: string;
	className?: string;
	disabled?: boolean;
	[props: string]: any;
}

export default function Button({
	children,
	className,
	disabled,
	...props
}: ButtonProps) {
	return disabled ? (
		className ? (
			<button
				{...props}
				className={`px-2 py-1 border ${className}`}
				disabled={disabled}
			>
				{children}
			</button>
		) : (
			<button {...props} className="px-2 py-1 border" disabled={disabled}>
				{children}
			</button>
		)
	) : className ? (
		<button {...props} className={`px-2 py-1 border ${className}`}>
			{children}
		</button>
	) : (
		<button {...props} className="px-2 py-1 border">
			{children}
		</button>
	);
}
