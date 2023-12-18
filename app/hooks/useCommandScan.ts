/**
 * @returns A collection of functions that can scan for chat commands
 * at the beginning of a string
 */
export default function useCommandScan() {
	/**
	 * @param {string} st Possible chat command
	 * @returns {boolean} true if the string starts with the '/' command character, otherwise false
	 */
	function scanForCommand(st: string): boolean {
		if (st.toLocaleLowerCase().substring(0, 1) === '/') {
			return true;
		}
		return false;
	}

	/**
	 * @param {string} st Possible chat command
	 * @returns {boolean} true if the string starts with the '/help' command, otherwise false
	 */
	function scanForHelp(st: string): boolean {
		if (st.toLocaleLowerCase().substring(0, 5) === '/help') {
			return true;
		}
		return false;
	}

	/**
	 * @param {string} st Possible chat command
	 * @returns {boolean} true if the string starts with the '/roll' command, otherwise false
	 */
	function scanForRoll(st: string): boolean {
		if (st.toLocaleLowerCase().substring(0, 5) === '/roll') {
			return true;
		}
		return false;
	}

	return { scanForCommand, scanForHelp, scanForRoll };
}
