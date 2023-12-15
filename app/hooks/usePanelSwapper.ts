import { useState } from 'react';

/**
 * Hook to manage the state of a UI panel that can be swapped for a user but
 * should not do any route updates. For example, a side panel on the chat page
 * that would confuse the main focus of the page away from the chat.
 * @returns
 * - panel, string of the current panel code
 * - setPanel, function to set the panel
 */
export function usePanelSwapper(panelCodes: string[]) {
	const [__activePanel, __setActivePanel] = useState<string>('home');

	/** Reset the panel to the home state */
	function reset(): void {
		__setActivePanel('home');
	}

	/** @param {string} st panel code to set the UI */
	function setPanel(st: string): void {
		if (!st || !validCode(st)) {
			__setActivePanel('home');
		} else {
			__setActivePanel(st);
		}
	}

	/**
	 * @param {string} st The string to test if present in the panelCodes
	 * @returns {boolean} true if st is contained within the panel codes, otherwise false
	 */
	function validCode(st: string): boolean {
		for (let i = 0; i < panelCodes.length; i++) {
			if (panelCodes[i] === st) {
				return true;
			}
		}
		return false;
	}

	return { panel: __activePanel, reset, setPanel };
}
