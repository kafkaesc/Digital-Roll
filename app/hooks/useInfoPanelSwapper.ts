import { usePanelSwapper } from '~/hooks/usePanelSwapper';

const panelCodes = [
	'home',
	'chatCommands',
	'matchRoll',
	'rollTypes',
	'targetRoll',
	'totalRoll',
	'walkthrough',
];

const panels = {
	home: 'home',
	chatCommands: 'chatCommands',
	matchRoll: 'matchRoll',
	rollTypes: 'rollTypes',
	targetRoll: 'targetRoll',
	totalRoll: 'totalRoll',
	walkthrough: 'walkthrough',
};

/**
 * Hook to manage the state of the info panel.
 * @returns
 * - panel, string panel code of the current panel
 * - panels, object containing a key for each panel
 * - setPanel, function for setting the current panel
 */
export function useInfoPanelSwapper() {
	const { panel, setPanel } = usePanelSwapper(panelCodes);
	return { panel, panels, setPanel };
}
