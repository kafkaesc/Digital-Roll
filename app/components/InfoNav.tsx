import InfoNavItem from './InfoNavItem';

interface InfoNavProps {
	panels: any;
	setPanel: Function;
}

/**
 * @param {Object} panels An object with attributes holding the key to each panel section
 * @param {Function} setPanel Function to set which panel is active
 * @returns {JSX.Element} Component with list items changing which info panel is active
 */
export default function InfoNav({ panels, setPanel }: InfoNavProps) {
	return (
		<ul className="mb-2 text-center">
			<InfoNavItem clickFn={() => setPanel(panels.home)}>Home</InfoNavItem> 🎲{' '}
			<InfoNavItem clickFn={() => setPanel(panels.chatCommands)}>
				Chat Commands
			</InfoNavItem>{' '}
			🎲{' '}
			<InfoNavItem clickFn={() => setPanel(panels.walkthrough)}>
				Rolls Walkthrough
			</InfoNavItem>
			<br />
			<InfoNavItem clickFn={() => setPanel(panels.rollTypes)}>
				Roll Types
			</InfoNavItem>{' '}
			🎲{' '}
			<InfoNavItem clickFn={() => setPanel(panels.matchRoll)}>
				Match Rolls
			</InfoNavItem>{' '}
			🎲{' '}
			<InfoNavItem clickFn={() => setPanel(panels.targetRoll)}>
				Target Rolls
			</InfoNavItem>{' '}
			🎲{' '}
			<InfoNavItem clickFn={() => setPanel(panels.totalRoll)}>
				Total Rolls
			</InfoNavItem>
		</ul>
	);
}
