/**
 * The intrinsic features of a roll result are:
 * - diceCount, the amount of dice that were rolled,
 * - diceResults, the individual dice results,
 * - display, a string to display the results to users,
 * - score, the calculated score for the roll, and
 * - sideCount - the number of sides on the dice that were rolled
 */
type RollResult = {
	diceCount: number;
	diceResults: Array<number>;
	display: string; // TODO: Break off display and use a printing hook
	score: number;
	sideCount: number;
};

/**
 * A MatchRollResult inherits RollResult features with extra attributes
 * to reflect the results of a match roll:
 * - margin, establishes a margin +/- the target that counts as a match
 * - rollType, included on all RollResult children to identify type at runtime
 * - target, the number indicating an exact match on the roll that scores 0
 * - total, the total from the dice roll
 */
export type MatchRollResult = RollResult & {
	margin?: number;
	rollType: 'match';
	target: number;
	total: number;
};

/**
 * A TargetRollResult inherits RollResult features with extra attributes
 * to reflect the results of a target roll:
 * - target, the number indicating what minimum roll will score a point,
 * - bonusTarget, a dice result that will score extra points,
 * - bonusAmount, the number of extra points to score if there is a bonus target,
 * - penaltyTarget, a dice result that will lose points,
 * - penaltyAmount, the number of points to subtract if there is a penalty target,
 * - rollType, included on all RollResult children to identify type at runtime
 */
export type TargetRollResult = RollResult & {
	bonusAmount?: number;
	bonusTarget?: number;
	penaltyAmount?: number;
	penaltyTarget?: number;
	rollType: 'target';
	target: number;
};

/**
 * A TotalRollResult inherits RollResult features with extra attributes
 * to reflect the results of a total roll:
 * - keepHigh, optional boolean to use the highest roll among the dice for
 * the final score
 * - keepLow, optional boolean to use the lowest roll among the dice for
 * the final score
 * - modifier, optional number for a bonus on top of the dice results
 * - rollType, included on all RollResult children to identify type at runtime
 */
export type TotalRollResult = RollResult & {
	keepHigh?: boolean;
	keepLow?: boolean;
	modifier?: number;
	rollType: 'total';
};
