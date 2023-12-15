/**
 * @returns A standard set of dice functions, d*, where * is a number
 * indicating the sides of the die being rolled. Also returns dx which takes
 * an argument, x, that creates a custom sided die, e.g., dx(22) will roll on
 * range [1-22]
 */
export function useDiceSet() {
	/** @returns {number} A random number [1-4] */
	function d4(): number {
		return Math.floor(Math.random() * 4) + 1;
	}

	/** @returns {number} A random number [1-6] */
	function d6(): number {
		return Math.floor(Math.random() * 6) + 1;
	}

	/** @returns {number} A random number [1-8] */
	function d8(): number {
		return Math.floor(Math.random() * 8) + 1;
	}

	/** @returns {number} A random number [1-10] */
	function d10(): number {
		return Math.floor(Math.random() * 10) + 1;
	}

	/** @returns {number} A random number [1-12] */
	function d12(): number {
		return Math.floor(Math.random() * 12) + 1;
	}

	/** @returns {number} A random number [1-20] */
	function d20(): number {
		return Math.floor(Math.random() * 20) + 1;
	}

	/** @returns {number} A random number [1-100] */
	function d100(): number {
		return Math.floor(Math.random() * 100) + 1;
	}

	/**
	 * @param {number} x - Top bound of the random number
	 * @returns {number} A random number within [1-x]
	 */
	function dx(x: number): number {
		return Math.floor(Math.random() * x) + 1;
	}

	return { d4, d6, d8, d10, d12, d20, d100, dx };
}
