/**
 * The intrinsic features of a roll are the amount of dice to roll
 * and the number of sides on those dice.
 */
type Roll = {
	diceCount: number;
	sideCount: number;
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
