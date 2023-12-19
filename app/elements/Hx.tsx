import H1 from '~/elements/H1';
import H2 from '~/elements/H2';
import H3 from '~/elements/H3';

interface HxProps {
	level: number;
	children: any;
	[props: string]: any;
}

/**
 * Hx is a component that will return the heading component matching
 * the level prop, e.g., level = 1 will call H1.
 * @param {number} level The heading level
 * @param {any} children The content of the heading
 * @param {any} props Any h1/h2/h3 props to be passed along to the component
 * @returns {JSX.Element} A component H1/H2/H3 according to props
 */
export default function Hx({ level, children, ...props }: HxProps) {
	return level === 3 ? (
		<H3 {...props}>{children}</H3>
	) : level === 2 ? (
		<H2 {...props}>{children}</H2>
	) : (
		<H1 {...props}>{children}</H1>
	);
}
