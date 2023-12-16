import H2 from '~/elements/H2';
import P from '~/elements/P';

export default function InfoTargetRoll() {
	return (
		<div>
			<H2>Target Roll</H2>
			<P>
				A target roll scores based on how many dice match or exceed a given
				target.
			</P>
			<P>/roll [x]d[y] t[i] b[j]? p[k]?</P>
			<P>Parameters followed by ? are optional.</P>
			<P>
				[x] and [y] are numbers. [x] indicates the amount of dice to roll and
				[y] indicates how many sides are on those dice. Using 2d6 would roll two
				six-side dice.
			</P>
			<P>
				[i], [j], and [k] are numbers. Any die result greater than or equal to
				[i] is +1 to the roll's score. If b/bonus is set, then any die result
				equal to or greater than [j] is another +1 to the roll's score. If
				p/penalty is set, then any die result less than or equal to [k] is -1 to
				the roll's score.
			</P>
		</div>
	);
}
