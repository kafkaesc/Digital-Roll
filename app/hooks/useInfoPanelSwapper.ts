import { usePanelSwapper } from './usePanelSwapper';

const panelCodes = [
	'home',
	'chatCommands',
	'rollTypes',
	'targetRoll',
	'totalRoll',
];

const panels = {
	home: 'home',
	chatCommands: 'chatCommands',
	rollTypes: 'rollTypes',
	targetRoll: 'targetRoll',
	totalRoll: 'totalRoll',
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
