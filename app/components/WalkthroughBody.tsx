import A from '~/elements/A';
import CodeSpan from '~/elements/CodeSpan';
import Hx from '~/elements/Hx';
import P from '~/elements/P';

interface WalkthroughBodyProps {
	hideTopHeading?: boolean;
	initialH?: number;
}

/**
 * @param {number} initialH Number for the top level heading,
 * e.g., 2 => <h2>, default value is 1
 * @see https://www.youtube.com/watch?v=xbRZE64S3U4
 * @param {boolean} hideTopHeading If true the topmost heading does
 * not display, default is false
 * @returns {JSX.Element} A walkthrough guide explaining how to format
 * roll commands in Digital Roll.
 */
export default function WalkthroughBody({
	hideTopHeading,
	initialH,
}: WalkthroughBodyProps) {
	const heading = initialH ? initialH : 1;
	const hideTop = hideTopHeading ? hideTopHeading : false;
	return (
		<>
			{!hideTop && <Hx level={heading}>A Walkthrough of the Roll Commands</Hx>}
			<P>
				The <CodeSpan>/roll</CodeSpan> command contains three different types of
				rolls each with optional parameters. This walkthrough will take you
				through all these different options, step-by-step, so that you'll
				understand <CodeSpan>/roll</CodeSpan>'s capabilities at the end.
			</P>
			<P>
				Two basic attributes for all dice rolls are (1) the number of dice to
				roll and (2) the number of sides the dice have.
			</P>
			<P>
				If the second part of that last sentence is confusing, don't worry.
				You're probably familiar with the most common type of die:{' '}
				<A
					href="https://commons.wikimedia.org/wiki/File:6sided_dice_(cropped).jpg"
					rel="noreferrer"
					target="_blank"
				>
					six-sided
				</A>
				. Rolling a single six-sided die will select a random number in the
				range [1-6]. A die with a different number of sides will have a
				different range. For example, a ten-sided die will select a random
				number on the range [1-10].
			</P>
			<P>
				These two attributes are essential to all roll commands and can be
				structured as <CodeSpan>/roll [x]d[y]</CodeSpan>, where{' '}
				<CodeSpan>[x]</CodeSpan> and <CodeSpan>[y]</CodeSpan> are both numbers.{' '}
				<CodeSpan>[x]</CodeSpan> indicates the number of dice to roll.{' '}
				<CodeSpan>[y]</CodeSpan> represents the number of sides on the dice. For
				example, to roll two ten-sided dice you can enter{' '}
				<CodeSpan>/roll 2d10</CodeSpan>.
			</P>
			<P>
				Six-sided and ten-sided dice can also be referred to as a d6 and d10
				respectively. Other-sided dice can follow this same pattern. From now on
				this guide will favor that usage.
			</P>
			<Hx level={heading + 1}>Total Roll</Hx>
			<P>
				In the game{' '}
				<A
					href="https://boardgamegeek.com/boardgame/1406/monopoly"
					rel="noreferrer"
					target="_blank"
				>
					Monopoly
				</A>{' '}
				, you roll two d6 at the beginning of your turn and move your piece
				forward that many spaces. This is a classic total roll. The score for
				that roll is the total between the two dice. You would run the command
				on Digital Roll by entering <CodeSpan>/roll 2d6</CodeSpan>.
			</P>
			<P>
				In the game{' '}
				<A href="https://dnd.wizards.com" rel="noreferrer" target="_blank">
					Dungeons & Dragons
				</A>{' '}
				it is common for certain character classes to have a bonus for a
				particular type of roll. Rogues are sneaky and get +5 on a stealth roll.
				Players make these kinds of roll with a d20, so a Rogue player making a
				stealth roll would enter <CodeSpan>/roll 1d20+5</CodeSpan>.
			</P>
			<P>
				Dungeons & Dragons is not just a game of bonuses. A Paladin wearing
				heavy armor gets a -5 penalty on stealth rolls. A player in this
				situation would enter <CodeSpan>/roll 1d20-5</CodeSpan>.
			</P>
			<P>
				There is another feature in Dungeons & Dragons where a roll can be made
				"with advantage." Rolling with advantage means the player rolls two d20
				and uses the higher roll as their result while ignoring the other one.
				For example, if a player rolls a 5 on the first d20 and a 10 on the
				second d20, they will use 10 as their score. Digital Roll can account
				for this. You can add <CodeSpan>kh</CodeSpan> to a roll to "keep
				highest" among the rolled dice. A player rolling a d20 at advantage
				would enter <CodeSpan>/roll 2d20 kh</CodeSpan>.
			</P>
			<P>
				There is a reverse concept in Dungeons & Dragons when a player has to
				roll "with disadvantage." This means the player rolls two d20 and must
				keep the lower score as their result. Digital Roll can account for this
				as well. You can add <CodeSpan>kl</CodeSpan> to a roll to "keep lowest"
				among the rolled dice. A player rolling a d20 at disadvantage would
				enter <CodeSpan>/roll 2d20 kl</CodeSpan>.
			</P>
			<P>
				It is worth noting that <CodeSpan>kh</CodeSpan> and{' '}
				<CodeSpan>kl</CodeSpan> are flexible beyond the advantage roles from
				Dungeons & Dragons. A user can just as easily enter{' '}
				<CodeSpan>/roll 5d6 kh</CodeSpan>, which will use the highest roll from
				among the five d6. (At that point your odds of a good roll are pretty
				high!)
			</P>
			<P>
				These features can also be mixed in different ways. For example, a user
				can enter <CodeSpan>/roll 3d10+5 kh</CodeSpan> for a +3 bonus on the
				highest roll among three d10. The one exception is that{' '}
				<CodeSpan>kh</CodeSpan> and <CodeSpan>kl</CodeSpan> cannot be combined
				because the two concepts are contradictory.
			</P>
			<Hx level={heading + 1}>Target Roll</Hx>
			<P>
				In the game{' '}
				<A href="https://vtm.paradoxwikis.com" rel="noreferrer" target="_blank">
					Vampire: The Masquerade
				</A>{' '}
				players make skill rolls that score based on how many d10 roll a 6 or
				higher. For example, if a player has a strength of 4 that means they
				will roll four d10. If those four dice land on 7, 6, 5, and 4 then the
				roll results in a score of 2. A point for each die greater than or equal
				to 6 and no points for any die below that.
			</P>
			<P>
				A player in this situation would make a target roll with 6 as the target
				by entering <CodeSpan>/roll 4d10 t6</CodeSpan>.
			</P>
			<P>
				Vampire: The Masquerade also has a penalty of -1 when a die rolls a 1.
				If a player rolls two 6s and two 1s the roll would be scored as an even
				0. A play can include this penalty in a total roll by entering{' '}
				<CodeSpan>/roll 4d10 t6 p1</CodeSpan>.
			</P>
			<P>
				Note: In this case 1 is the minimum for any die roll, but when a target
				roll has a penalty value, the -1 will be applied when a roll is less
				than or equal to the penalty number. For example, p2 means the roll will
				take -1 on a 1 or 2.
			</P>
			<P>
				The game{' '}
				<A href="http://exalted.xi.co.nz" rel="noreferrer" target="_blank">
					Exalted
				</A>{' '}
				has rolls like Vampire: The Masquerade with the addition of a bonus
				point on any die that rolls 10. For example, if a player rolls two d10
				and the result is 8 and 10, that roll will score 3 points: one point for
				the 8 and two points for the 10. A player can include this penalty in
				their roll by entering <CodeSpan>/roll 2d10 t6 b10</CodeSpan>.
			</P>
			<P>
				Note: These games use d10s, so 10 is the maximum for a die roll, but
				when a target roll has a bonus value the bonus will be applied when a
				roll is greater than or equal to the penalty number. For example, a b8
				on a d10 roll will grant a bonus on 8, 9, or 10.
			</P>
			<P>
				The target is a mandatory feature of any target roll. The bonus and
				penalty are both optional and can be mixed.
			</P>
			<Hx level={heading + 1}>Match Roll</Hx>
			<P>
				A match roll takes a match value and scores the roll based on how far
				the total is from from the match value.
			</P>
			<P>
				If the match value is a 7, and the user rolls two d6 resulting in a 4
				and 5, then the score is '+2': two above the match target. If the same
				roll results in a 2 and 3, then the score is '-2': two below the match
				target. Finally, if the same roll results in a 3 and 4 then the score is
				'0': a perfect match. A player making this roll would enter{' '}
				<CodeSpan>/roll 2d6 m7</CodeSpan>.
			</P>
			<P>
				A match roll can also add a margin to the match value to widen what
				counts as a match. If the match value is 7 with a margin of 2, then any
				roll from 5 to 9 will score as 0. A player making this roll would enter{' '}
				<CodeSpan>/roll 2d6 m7 w2</CodeSpan>.
			</P>
		</>
	);
}
