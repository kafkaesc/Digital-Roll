import CodeSpan from '~/elements/CodeSpan';
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
			<P>
				<CodeSpan>/roll [x]d[y] t[i] b[j]? p[k]?</CodeSpan>
			</P>
			<P>Parameters followed by ? are optional.</P>
			<P>
				<CodeSpan>[x]</CodeSpan> and <CodeSpan>[y]</CodeSpan> are numbers.{' '}
				<CodeSpan>[x]</CodeSpan> indicates the amount of dice to roll and
				<CodeSpan>[y]</CodeSpan> indicates how many sides are on those dice.
				Using 2d6 would roll two six-sided dice.
			</P>
			<P>
				<CodeSpan>[i]</CodeSpan>, <CodeSpan>[j]</CodeSpan>, and{' '}
				<CodeSpan>[k]</CodeSpan> are numbers. Any die result greater than or
				equal to <CodeSpan>[i]</CodeSpan> is +1 to the roll's score. If b/bonus
				is set, then any die result equal to or greater than{' '}
				<CodeSpan>[j]</CodeSpan> is another +1 to the roll's score. If p/penalty
				is set, then any die result less than or equal to{' '}
				<CodeSpan>[k]</CodeSpan> is -1 to the roll's score.
			</P>
		</div>
	);
}
