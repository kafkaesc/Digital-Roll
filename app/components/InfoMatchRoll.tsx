import H2 from '~/elements/H2';
import P from '~/elements/P';

export default function InfoMatchRoll() {
	return (
		<div>
			<H2>Match Roll</H2>
			<P>
				A match roll scores based on how far the dice total is from a given
				target.
			</P>
			<P>/roll [x]d[y] m[i] w[j]?</P>
			<P>Parameters followed by ? are optional.</P>
			<P>
				[x] and [y] are numbers. [x] indicates the amount of dice to roll and
				[y] indicates how many sides are on those dice. Using 2d6 would roll two
				six-side dice.
			</P>
			<P>
				[i] and [j] are numbers. [m] indicates the number the dice roll hopes to
				match.
			</P>
		</div>
	);
}
