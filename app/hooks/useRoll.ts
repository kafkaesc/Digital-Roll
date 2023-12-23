import { useDiceSet } from '~/hooks/useDiceSet';
import type { MatchRoll, TargetRoll, TotalRoll } from '~/types/Rolls';
import type {
	MatchRollResult,
	TargetRollResult,
	TotalRollResult,
} from '~/types/RollResults';

export function useRoll() {
	const diceSet = useDiceSet();

	function roll(
		rollObj: MatchRoll | TargetRoll | TotalRoll
	): MatchRollResult | TargetRollResult | TotalRollResult {
		if (rollObj.rollType === 'match') {
			return rollForMatch(rollObj);
		}
		if (rollObj.rollType === 'target') {
			return rollForTarget(rollObj);
		}
		if (rollObj.rollType === 'total') {
			return rollForTotal(rollObj);
		}
		throw Error(`No valid roll type defined`);
	}

	function rollForHighest(result: TotalRollResult) {
		const { diceCount, sideCount } = result;
		let high;
		for (let i = 0; i < diceCount; i++) {
			const n = diceSet.dx(sideCount);
			if (!high || n > high) {
				high = n;
			}
			result.diceResults.push(n);
			i + 1 === diceCount
				? (result.display += '' + n)
				: (result.display += n + ', ');
		}
		if (!high) {
			throw Error(`Unable to select the hightest roll`);
		}
		result.display += ']';
		result.score = high;
		return result;
	}

	function rollForLowest(result: TotalRollResult) {
		const { diceCount, sideCount } = result;
		let low;
		for (let i = 0; i < diceCount; i++) {
			const n = diceSet.dx(sideCount);
			if (!low || n < low) {
				low = n;
			}
			result.diceResults.push(n);
			i + 1 === diceCount
				? (result.display += '' + n)
				: (result.display += n + ', ');
		}
		if (!low) {
			throw Error(`Unable to select the lowest roll`);
		}
		result.display += ']';
		result.score = low;
		return result;
	}

	function rollForStandardTotal(result: TotalRollResult) {
		const { diceCount, sideCount } = result;
		for (let i = 0; i < diceCount; i++) {
			const n = diceSet.dx(sideCount);
			result.diceResults.push(n);
			i + 1 === diceCount
				? (result.display += '' + n)
				: (result.display += n + ', ');
			result.score += n;
		}
		result.display += ']';
		return result;
	}

	function rollForMatch(rollObj: MatchRoll): MatchRollResult {
		const { diceCount, margin, sideCount, target } = rollObj;

		if (diceCount < 1) {
			throw new RangeError('Dice count for a roll must be 1 or greater');
		}
		if (diceCount > 64) {
			throw new RangeError('Dice count for a roll cannot be greater than 64');
		}
		if (sideCount < 1) {
			throw new RangeError('Side count for a die must be 1 or greater');
		}
		if (sideCount > 512) {
			throw new RangeError('Side count for a die cannot be greater than 512');
		}
		if (target < 1) {
			throw new RangeError('Target for a match roll must be 1 or greater');
		}
		if (target > 6400) {
			throw new RangeError(
				'Target for a match roll cannot be greater than 6400'
			);
		}
		if (margin && margin < 1) {
			throw new RangeError('Margin for a match roll must be 1 or greater');
		}
		if (margin && margin > 64) {
			throw new RangeError('Margin for a match roll cannot be greater than 64');
		}

		let result: MatchRollResult = {
			diceCount: diceCount,
			diceResults: [],
			display: '[',
			rollType: 'match',
			score: 0,
			sideCount: sideCount,
			target: target,
			total: 0,
		};

		for (let i = 0; i < diceCount; i++) {
			const n = diceSet.dx(sideCount);
			result.diceResults.push(n);
			result.total += n;
			i + 1 === diceCount
				? (result.display += '' + n)
				: (result.display += n + ', ');
		}
		result.display += ']; Total: ' + result.total + '; ';

		const score = margin
			? scoreWithMargin(target, margin, result.total)
			: result.total - result.target;

		if (score > 0) {
			result.display += 'Score: +' + score;
		} else if (score <= 0) {
			result.display += 'Score: ' + score;
		}

		return result;
	}

	function rollForTarget(rollObj: TargetRoll): TargetRollResult {
		const {
			bonusAmount,
			bonusTarget,
			diceCount,
			penaltyAmount,
			penaltyTarget,
			sideCount,
			target,
		} = rollObj;

		if (diceCount < 1) {
			throw new RangeError('Dice count for a roll must be 1 or greater');
		}
		if (diceCount > 64) {
			throw new RangeError('Dice count for a roll cannot be greater than 64');
		}
		if (sideCount < 1) {
			throw new RangeError('Side count for a die must be 1 or greater');
		}
		if (sideCount > 512) {
			throw new RangeError('Side count for a die cannot be greater than 512');
		}
		if (target < 1) {
			throw new RangeError('Target for a roll must be 1 or greater');
		}
		if (target > 512) {
			throw new RangeError('Target for a roll cannot be greater than 512');
		}
		if (bonusAmount && bonusAmount < 1) {
			throw new RangeError('Bonus amount for a roll must be 1 or greater');
		}
		if (bonusAmount && bonusAmount > 64) {
			throw new RangeError('Bonus amount for a roll cannot be greater than 64');
		}
		if (bonusTarget && bonusTarget < 1) {
			throw new RangeError('Bonus target for a roll must be 1 or greater');
		}
		if (bonusTarget && bonusTarget > 512) {
			throw new RangeError(
				'Bonus target for a roll cannot be greater than 512'
			);
		}
		if (penaltyAmount && penaltyAmount < 1) {
			throw new RangeError('Penalty amount for a roll must be 1 or greater');
		}
		if (penaltyAmount && penaltyAmount > 64) {
			throw new RangeError(
				'Penalty amount for a roll cannot be greater than 64'
			);
		}
		if (penaltyTarget && penaltyTarget < 1) {
			throw new RangeError('Bonus target for a roll must be 1 or greater');
		}
		if (penaltyTarget && penaltyTarget > 512) {
			throw new RangeError(
				'Bonus target for a roll cannot be greater than 512'
			);
		}

		let result: TargetRollResult = {
			diceCount: diceCount,
			diceResults: [],
			display: '[',
			rollType: 'target',
			sideCount: sideCount,
			target: target,
			score: 0,
		};

		for (let i = 0; i < diceCount; i++) {
			const n = diceSet.dx(sideCount);
			result.diceResults.push(n);
			i + 1 === diceCount
				? (result.display += '' + n)
				: (result.display += n + ', ');
		}
		result.display += ']';

		for (let i = 0; i < result.diceResults.length; i++) {
			const num = result.diceResults[i];
			if (num >= target) {
				result.score += 1;
			}
			if (bonusTarget && num >= bonusTarget) {
				result.score += bonusAmount || 1;
			}
			if (penaltyTarget && num <= penaltyTarget) {
				result.score -= penaltyAmount || 1;
			}
		}
		result.display += `; Score: ${result.score}.`;
		return result;
	}

	function rollForTotal(rollObj: TotalRoll): TotalRollResult {
		const { diceCount, keepHigh, keepLow, modifier, sideCount } = rollObj;
		if (diceCount < 1) {
			throw new RangeError('Dice count for a roll must be 1 or greater');
		}
		if (diceCount > 64) {
			throw new RangeError('Dice count for a roll cannot be greater than 64');
		}
		if (sideCount < 1) {
			throw new RangeError('Side count for a die must be 1 or greater');
		}
		if (sideCount > 512) {
			throw new RangeError('Side count for a die cannot be greater than 512');
		}
		if (modifier && modifier > 64) {
			throw new RangeError('The modifier for a roll cannot be greater than 64');
		}
		if (modifier && modifier < -64) {
			throw new RangeError('The modifier for a roll cannot be less than -64');
		}
		if (keepHigh && keepLow) {
			throw new Error(`Cannot keep low and keep high for a roll`);
		}

		// Initiate our results object then fill in as rolls go
		let result: TotalRollResult = {
			...rollObj,
			diceResults: [],
			display: '[',
			score: 0,
		};

		if (keepHigh) {
			result = rollForHighest(result);
		} else if (keepLow) {
			result = rollForLowest(result);
		} else {
			result = rollForStandardTotal(result);
		}

		if (modifier) {
			result.score += modifier;
			if (modifier > 0) {
				result.display += ' + ' + modifier;
			}
			if (modifier < 0) {
				result.display += ' - ' + Math.abs(modifier);
			}
		}
		result.display += `; Score: ${result.score}.`;
		return result;
	}

	/**
	 *
	 * @param {number} target - The target number the total hopes to match
	 * @param {number} margin - The margin +/- the target that also counts as a match
	 * @param {number} total - The total from a dice roll
	 * @returns {number} - A score based on how far the total is from the margin
	 */
	function scoreWithMargin(
		target: number,
		margin: number,
		total: number
	): number {
		const floor = target - margin;
		const ceiling = target + margin;
		if (total >= floor && total <= ceiling) {
			return 0;
		} else if (total < floor) {
			return total - floor;
		} else if (total > ceiling) {
			return total - ceiling;
		} else {
			return -500;
		}
	}

	return { roll };
}
