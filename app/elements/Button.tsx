interface ButtonProps {
	buttonStyle?: 'primary' | 'secondary' | 'text';
	children: string;
	className?: string;
	disabled?: boolean;
	[props: string]: any;
}

interface StyledButtonProps {
	children: string;
	className?: string;
	disabled?: boolean;
	[props: string]: any;
}

// _jh Omit appears to lost typing when [props: string]: any is present in the parent
//interface StyledButtonProps extends Omit<ButtonProps, 'buttonStyle'> {}

const PrimaryButton = ({
	children,
	className,
	disabled,
	...props
}: StyledButtonProps) => {
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
};

const SecondaryButton = ({
	children,
	className,
	disabled,
	...props
}: StyledButtonProps): JSX.Element => {
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
};

const TextButton = ({
	children,
	className,
	disabled,
	...props
}: StyledButtonProps): JSX.Element => {
	return disabled ? (
		className ? (
			<button {...props} className="px-2 py-1">
				{children}
			</button>
		) : (
			<button {...props} className="px-2 py-1">
				{children}
			</button>
		)
	) : (
		<button {...props} className="px-2 py-1">
			{children}
		</button>
	);
	return (
		<button {...props} className="px-2 py-1">
			{children}
		</button>
	);
};

export default function Button({
	buttonStyle,
	children,
	className,
	disabled,
	...props
}: ButtonProps) {
	return buttonStyle === 'secondary' ? (
		<SecondaryButton {...props} className={className} disabled={disabled}>
			{children}
		</SecondaryButton>
	) : buttonStyle === 'text' ? (
		<TextButton {...props} className={className} disabled={disabled}>
			{children}
		</TextButton>
	) : (
		<PrimaryButton {...props} className={className} disabled={disabled}>
			{children}
		</PrimaryButton>
	);
}
