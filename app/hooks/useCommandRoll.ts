import type { TargetRollResult, TotalRollResult } from '~/types/RollResults';
import { useRoll } from './useRoll';

export default function useCommandRoll(): any {
	const { roll } = useRoll();

	/**
	 * Takes string st in the format xdy+z or xdy-z representing a dice roll,
	 * where x represents the number of dice to roll, y represents how many
	 * sides the dice have, and z represents a modifier for the result. These
	 * numbers will be returned on an object in the form:
	 * {diceCount, sideCount, modifier }
	 * @param {string} st - A string (dy | xdy | xdy+z | xdy-z)
	 * where x, y, and z are numbers
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
	 * @param {string} st - A string (bx) where b is a number
	 */
	function splitBonusString(st: string) {
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
	 * Takes string st in the format px representing a dice roll option to
	 * target the number x as a lower bound to subtract the penalty amount from
	 * the roll total. Ex.: /5d10 t6 p2 means each die that rolls 2 or lower
	 * will subtract the penalty amount from the roll total. The default penalty
	 * amount is 1.
	 * @param {string} st - A string (px) where x is a number
	 */
	function splitPenaltyString(st: string) {
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
	 * @param {string} st - A string (tx) where x is a number
	 */
	function splitTargetString(st: string) {
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
	 * @param {string} st - A string representing the details of the roll.
	 * @returns
	 */
	function runRoll(st: string): TargetRollResult | TotalRollResult {
		const commandParts: Array<string> = st.split(' ');
		const diceString = commandParts[1];

		const { diceCount, sideCount, modifier } = splitDiceString(diceString);

		let totalRoll = false;
		let targetRoll = false;

		if (modifier) {
			totalRoll = true;
		}

		let kh, kl, t, b, p;
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

		if (totalRoll && targetRoll) {
			throw Error(
				`Invalid combination of roll parameters. ` +
					`Run /help to find out how to format a /roll command.`
			);
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
			});
			return result;
		}
	}

	return { runRoll };
}
