import A from '~/elements/A';
import CodeSpan from '~/elements/CodeSpan';
import H2 from '~/elements/H2';
import H3 from '~/elements/H3';
import P from '~/elements/P';
import WriterLorem from './WriterLorem';

export default function InfoWalkthrough() {
	return (
		<div>
			<H2>A Walkthrough of the Roll Commands</H2>
			<P>
				The <CodeSpan>/roll</CodeSpan> command contains three different types of
				rolls each with optional parameters. This walkthrough will take you
				through all these different options, step-by-step, so that you'll have
				an understanding of <CodeSpan>/roll</CodeSpan>'s capabilities at the
				end.
			</P>
			<P>
				Two basic attributes for all dice rolls is (1) the number of dice to
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
				different range. For example a ten-sided die will select a random number
				on the range [1-10].
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
			<H3>Total Roll</H3>
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
				"with advantage." Rolling with advantage means the player rolls two d20s
				and uses the higher roll as their result while ignoring the other one.
				For example if a player rolls a 5 on the first d20 and a 10 on the
				second d20, they would use 10 as their score. Digital Roll can account
				for this. You can add <CodeSpan>kh</CodeSpan> to a roll to "keep
				highest" among the rolled dice. A player rolling a d20 at advantage
				would enter <CodeSpan>/roll 2d20 kh</CodeSpan>.
			</P>
			<P>
				There is a reverse concept in Dungeons & Dragons when a player has to
				roll "with disadvantage." This means the player rolls to d20s and has to
				keep the lowers score as their result. Digital Roll can account for this
				as well. You can add <CodeSpan>kl</CodeSpan> to a roll to "keep lowest"
				among the rolled dice. A player rolling a d20 at disadvantage would
				enter <CodeSpan>/roll 2d20 kl</CodeSpan>.
			</P>
			<P>
				It is worth noting that <CodeSpan>kh</CodeSpan> and{' '}
				<CodeSpan>kl</CodeSpan> are flexible beyond the advantage roles from
				Dungeons & Dragons. A user can just as easily enter{' '}
				<CodeSpan>/roll 5d6 kh</CodeSpan>, which will use the highest roll from
				among the five d6. (At tht point your odds of a good roll are pretty
				high!)
			</P>
			<P>
				These features can also be mixed in different ways. For example, a user
				can enter <CodeSpan>/roll 3d10+5 kh</CodeSpan> for a +3 bonus on the
				highest roll among three d10. The one exception is that{' '}
				<CodeSpan>kh</CodeSpan> and <CodeSpan>kl</CodeSpan> cannot be combined
				because the two concepts are contradictory.
			</P>
			<H3>Target Roll</H3>
			<WriterLorem writer="melville" />
			<H3>Match Roll</H3>
			<WriterLorem writer="poe" />
		</div>
	);
}
