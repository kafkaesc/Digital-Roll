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

/**
 * Button is an element level component for the HTML button element.
 *
 * All element components should recreate the use of a styled HTML element
 * with the ability to pass any attributes associated with that element into
 * its instance within this component.
 * @param {'primary' | 'secondary' | 'text'} buttonStyle Option string
 * indicating how the button will display, if undefined or null the default
 * value is 'primary'
 * @param {ReactNode} children The content of the button element
 * @param {string} className Optional string, if included it will be appended
 * to the other classes styling the element
 * @param {any} props Properties that will be passed along the the button element
 * @returns {JSX.Element} A styled button element
 */
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
