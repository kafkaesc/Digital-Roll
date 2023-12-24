import type {
	MatchRollResult,
	TargetRollResult,
	TotalRollResult,
} from '~/types/RollResults';
import { useRoll } from '~/hooks/useRoll';

/**
 * Hook returns the runRoll function, an omni function that will take a string,
 * parse the necessary roll parameters, construct the appropriate roll object,
 * and use that object to run the roll function from `useRoll`.
 * @see useRoll
 * @returns runRoll, a function to run a roll from chat input
 */
export default function useCommandRoll() {
	const { roll } = useRoll();

	/**
	 * Takes string st in the format xdy+z or xdy-z representing a dice roll,
	 * where x represents the number of dice to roll, y represents how many
	 * sides the dice have, and z represents a modifier for the result. These
	 * numbers will be returned on an object in the form:
	 * {diceCount, sideCount, modifier }
	 * @param {string} st A string (dy | xdy | xdy+z | xdy-z) where
	 * x, y, and z are numbers
	 * @returns An object containing the diceCount, sideCount, and modifier
	 * values from the string
	 */
	function splitDiceString(st: string) {
		// Default dice count is 1 if user does not specify
		if (st.charAt(0).toLocaleLowerCase() === 'd') {
			st = '1' + st;
		}

		// Split the string around the d
		let rollParts = st.includes('d') ? st.split('d') : st.split('D');

		// Check for a +/- roll modifier
		if (rollParts[1].includes('+')) {
			rollParts = [rollParts[0], ...rollParts[1].split('+')];
		} else if (rollParts[1].includes('-')) {
			rollParts = [rollParts[0], ...rollParts[1].split('-')];
			rollParts[rollParts.length - 1] = '-' + rollParts[rollParts.length - 1];
		} else {
			rollParts.push('0');
		}

		// After all appropriate splits, check the results are valid numbers
		if (isNaN(+rollParts[0])) {
			throw TypeError(`Expected a number and received: ${rollParts[0]}`);
		}
		if (isNaN(+rollParts[1])) {
			throw TypeError(`Expected a number and received: ${rollParts[1]}`);
		}
		if (isNaN(+rollParts[2])) {
			throw TypeError(`Expected a number and received: ${rollParts[2]}`);
		}

		return {
			diceCount: Math.floor(+rollParts[0]),
			sideCount: Math.floor(+rollParts[1]),
			modifier: +rollParts[2] === 0 ? undefined : Math.floor(+rollParts[2]),
		};
	}

	/**
	 * Takes string st in the format bx representing a dice roll option to
	 * target the number x for extra points on the roll according to the bonus
	 * amount value. Ex.: /roll 5d10 t6 b9 means each die that rolls 9 or
	 * greater will add bonusAmount to the roll total. The default bonus
	 * amount is 1
	 * @param {string} st A string (bx) where b is a number
	 * @returns {number} The bonus value from the string
	 */
	function splitBonusString(st: string): number {
		const bonusTarget = st.includes('b') ? st.split('b') : st.split('B');
		const num = Math.floor(+bonusTarget[1]);
		if (isNaN(num)) {
			throw TypeError(`Expected a number and received: ${bonusTarget[1]}`);
		}
		if (num < 0) {
			throw RangeError(`The bonus roll target must be greater than 0`);
		}
		return num;
	}

	/**
	 * Takes string st in the format wx representing a match roll option to
	 * widen the target of the roll by x. Ex.: /roll 2d6 m7 w2 will score zero
	 * for a roll within [5-7].
	 * @param {string} st A string (wx) where x is a number
	 * @returns {number} The margin value from the string
	 */
	function splitMarginString(st: string): number {
		const margin = st.includes('w') ? st.split('w') : st.split('W');
		const num = Math.floor(+margin[1]);
		if (isNaN(num)) {
			throw TypeError(`Expected a number and received: ${margin[1]}`);
		}
		if (num < 1) {
			throw RangeError(`The match target must be greater than 0`);
		}
		if (num > 64) {
			throw RangeError(`The match target cannot be greater than 64`);
		}
		return num;
	}

	/**
	 * Takes string st in the format mx representing a dice roll option for the
	 * number the roll result attempts to match. Ex.: /roll 2d6 m7 will score
	 * based on the roll total's distance from 7.
	 * @param {string} st A string (mx) where x is a number
	 * @returns {number} The target match value from the string
	 */
	function splitMatchString(st: string): number {
		const target = st.includes('m') ? st.split('m') : st.split('M');
		const num = Math.floor(+target[1]);
		if (isNaN(num)) {
			throw TypeError(`Expected a number and received: ${target[1]}`);
		}
		if (num < 1) {
			throw RangeError(`The match target must be greater than 0`);
		}
		if (num > 6400) {
			throw RangeError(`The match target cannot be greater than 6400`);
		}
		return num;
	}

	/**
	 * Takes string st in the format px representing a dice roll option to
	 * target the number x as a lower bound to subtract the penalty amount from
	 * the roll total. Ex.: /5d10 t6 p2 means each die that rolls 2 or lower
	 * will subtract the penalty amount from the roll total. The default penalty
	 * amount is 1.
	 * @param {string} st A string (px) where x is a number
	 * @returns {number} The penalty value from the string
	 */
	function splitPenaltyString(st: string): number {
		const target = st.includes('p') ? st.split('p') : st.split('P');
		const num = Math.floor(+target[1]);
		if (isNaN(num)) {
			throw TypeError(`Expected a number and received: ${target[1]}`);
		}
		if (num < 0) {
			throw RangeError(`The roll target must be greater than 0`);
		}
		return num;
	}

	/**
	 * Takes string st in the format tx representing a dice roll option to
	 * target the number x for a successful roll. Ex.: /roll 5d10 t6 means each
	 * die that rolls 6 or greater will result in +1 for the success count
	 * @param {string} st A string (tx) where x is a number
	 * @returns {number} The target value from the string
	 */
	function splitTargetString(st: string): number {
		const target = st.includes('t') ? st.split('t') : st.split('T');
		const num = Math.floor(+target[1]);
		if (isNaN(num)) {
			throw TypeError(`Expected a number and received: ${target[1]}`);
		}
		if (num < 0) {
			throw RangeError(`The roll target must be greater than 0`);
		}
		return num;
	}

	/**
	 * Parses the provided string to execute a dice roll and return the results.
	 * @param {string} st A string representing the details of the roll.
	 * @returns {MatchRollResult | TargetRollResult | TotalRollResult} Result
	 * object indicating the results of the roll
	 */
	function runRoll(
		st: string
	): MatchRollResult | TargetRollResult | TotalRollResult {
		const userInput = `${st}`;
		const commandParts: Array<string> = st.split(' ');
		const diceString = commandParts[1];

		const { diceCount, sideCount, modifier } = splitDiceString(diceString);

		let matchRoll = false;
		let totalRoll = false;
		let targetRoll = false;

		if (modifier) {
			totalRoll = true;
		}

		let kh, kl, m, w, t, b, p;
		if (commandParts.length > 2) {
			for (let i = 2; i < commandParts.length; i++) {
				if (commandParts[i].toLocaleLowerCase() === 'kh') {
					kh = true;
					totalRoll = true;
				}
				if (commandParts[i].toLocaleLowerCase() === 'kl') {
					kl = true;
					totalRoll = true;
				}
				if (commandParts[i].charAt(0).toLocaleLowerCase() === 'm') {
					m = splitMatchString(commandParts[i]);
					matchRoll = true;
				}
				if (commandParts[i].charAt(0).toLocaleLowerCase() === 'w') {
					w = splitMarginString(commandParts[i]);
					matchRoll = true;
				}
				if (commandParts[i].charAt(0).toLocaleLowerCase() === 't') {
					t = splitTargetString(commandParts[i]);
					targetRoll = true;
				}
				if (commandParts[i].charAt(0).toLocaleLowerCase() === 'b') {
					b = splitBonusString(commandParts[i]);
					targetRoll = true;
				}
				if (commandParts[i].charAt(0).toLocaleLowerCase() === 'p') {
					p = splitPenaltyString(commandParts[i]);
					targetRoll = true;
				}
			}
		}

		let typeCount = 0;
		if (matchRoll) typeCount++;
		if (targetRoll) typeCount++;
		if (totalRoll) typeCount++;

		if (typeCount > 1) {
			throw Error(
				`Invalid combination of roll parameters. ` +
					`Run /help to find out how to format a /roll command.`
			);
		} else if (matchRoll) {
			if (!m) {
				throw Error(
					`Invalid combination of roll parameters. If a match roll is ` +
						`being made, a match value must be provided via 'mx', where ` +
						`x is a number.`
				);
			}
			const result = roll({
				diceCount: diceCount,
				margin: w,
				rollType: 'match',
				sideCount: sideCount,
				target: m,
				userInput: userInput,
			});
			return result;
		} else if (targetRoll) {
			if (!t) {
				throw Error(
					`Invalid combination of roll parameters. If a target roll is ` +
						`being made a target value must be provided via 'tx', where ` +
						`x is a number.`
				);
			}
			const result = roll({
				bonusTarget: b,
				diceCount: diceCount,
				penaltyTarget: p,
				rollType: 'target',
				sideCount: sideCount,
				target: t,
				userInput: userInput,
			});
			return result;
		} else {
			const result = roll({
				diceCount: diceCount,
				keepHigh: kh,
				keepLow: kl,
				modifier: modifier,
				rollType: 'total',
				sideCount: sideCount,
				userInput: userInput,
			});
			return result;
		}
	}

	return { runRoll };
}
