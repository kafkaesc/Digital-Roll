import CodeSpan from '~/elements/CodeSpan';
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
			<P>
				<CodeSpan>/roll [x]d[y] m[i] w[j]?</CodeSpan>
			</P>
			<P>Parameters followed by ? are optional.</P>
			<P>
				<CodeSpan>[x]</CodeSpan> and <CodeSpan>[y]</CodeSpan> are numbers.{' '}
				<CodeSpan>[x]</CodeSpan> indicates the amount of dice to roll and
				<CodeSpan>[y]</CodeSpan> indicates how many sides are on those dice.
				Using 2d6 would roll two six-sided dice.
			</P>
			<P>
				<CodeSpan>[i]</CodeSpan> and <CodeSpan>[j]</CodeSpan> are numbers.{' '}
				<CodeSpan>[m]</CodeSpan> indicates the number the dice roll hopes to
				match.
			</P>
		</div>
	);
}
