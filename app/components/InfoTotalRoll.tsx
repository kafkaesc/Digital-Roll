import CodeSpan from '~/elements/CodeSpan';
import H2 from '~/elements/H2';
import P from '~/elements/P';

export default function InfoTotalRoll() {
	return (
		<div>
			<H2>Total Roll</H2>
			<P>A total roll scores based on the total rolled on the dice.</P>
			<P>
				<CodeSpan>/roll [x]d[y]+[z]? kh? kl?</CodeSpan>
			</P>
			<P>Parameters followed by ? are optional.</P>
			<P>
				<CodeSpan>[x]</CodeSpan>, <CodeSpan>[y]</CodeSpan>, and{' '}
				<CodeSpan>[z]</CodeSpan> are numbers.
			</P>
			<P>
				<CodeSpan>[x]</CodeSpan> indicates the amount of dice to roll and{' '}
				<CodeSpan>[y]</CodeSpan> indicates how many sides are on those dice.
				Using 2d6 would roll two six-sided dice.
			</P>
			<P>
				<CodeSpan>[z]</CodeSpan> can be added or subtracted and will modify the
				final dice total. If
				<CodeSpan>kh</CodeSpan> is set the roll will only keep the highest die
				roll for the score. If
				<CodeSpan>kl</CodeSpan> is set the roll will only keep the highest die
				roll for the score. kh and kl are mutually exclusive because keep
				highest and keep lowest are contradictory.
			</P>
		</div>
	);
}
