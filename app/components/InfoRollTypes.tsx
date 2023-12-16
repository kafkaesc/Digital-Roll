import H2 from '~/elements/H2';
import P from '~/elements/P';

export default function InfoRollTypes() {
	return (
		<div>
			<H2>Roll Types</H2>
			<P>There are match rolls, target rolls, and total rolls.</P>
			<P>
				A match roll scores based on how far the dice total is from a given
				target.
			</P>
			<P>
				A target roll scores based on how many dice match or exceed a given
				target.
			</P>
			<P>A total roll scores based on the total rolled on the dice.</P>
		</div>
	);
}
