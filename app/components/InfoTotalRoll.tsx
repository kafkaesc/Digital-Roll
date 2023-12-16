import H2 from '~/elements/H2';
import P from '~/elements/P';

export default function InfoTotalRoll() {
	return (
		<div>
			<H2>Total Roll</H2>
			<P>A total roll scores based on the total rolled on the dice.</P>
			<P>/roll [x]d[y]+[z]? kh? kl?</P>
			<P>Parameters followed by ? are optional.</P>
			<P>[x], [y], and [z] are numbers.</P>
			<P>
				[x] indicates the amount of dice to roll and [y] indicates how many
				sides are on those dice. Using 2d6 would roll two six-side dice.
			</P>
			<P>
				[z] can be added or subtracted and will modify the final dice total. If
				kh is set the roll will only keep the highest die roll for the score. If
				kl is set the roll will only keep the highest die roll for the score. kh
				and kl are mutually exclusive because keep highest and keep lowest are
				contradictory.
			</P>
		</div>
	);
}
