/**
 * The intrinsic features of a roll are the amount of dice to roll
 * and the number of sides on those dice.
 */
type Roll = {
	diceCount: number;
	sideCount: number;
};

/**
 * A match roll provides the necessary information for a rol whose score is the
 * difference between the total rolled and the target number. E.g., rolling two
 * 1s on two six-sided dice when the target was 7 will receive a score of -5.
 * The optional margin will broaden the target, e.g., target 20 with a margin
 * of 2 will score based on difference from 18 and 22.
 */
export type MatchRoll = Roll & {
	margin?: number;
	rollType: 'match';
	target: number;
};

/**
 * A target roll provides the necessary information for a roll that scores
 * points per dice that meets the target number. E.g., rolling four ten-sided
 * dice with a target of 6, two of the dice come up 6, and two of the dice
 * come up 3 will, receives a score of 2 for the two 6 results.
 */
export type TargetRoll = Roll & {
	bonusAmount?: number;
	bonusTarget?: number;
	penaltyAmount?: number;
	penaltyTarget?: number;
	rollType: 'target';
	target: number;
};

/**
 * A total roll provides the necessary information for a roll that is a
 * total of the dice results. E.g., rolling two six-sided dice that both
 * come up 5 will produce a total of 10.
 */
export type TotalRoll = Roll & {
	keepHigh?: boolean;
	keepLow?: boolean;
	modifier?: number;
	rollType: 'total';
};
