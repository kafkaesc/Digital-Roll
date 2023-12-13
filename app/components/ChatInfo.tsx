import InfoChatCommands from '~/components/InfoChatCommands';
import InfoRollTypes from '~/components/InfoRollTypes';
import InfoTargetRoll from '~/components/InfoTargetRoll';
import InfoTotalRoll from '~/components/InfoTotalRoll';

import { useInfoPanelSwapper } from '~/hooks/useInfoPanelSwapper';

export default function ChatInfo() {
	const { panel, panels, setPanel } = useInfoPanelSwapper();
	return (
		<div>
			<ul>
				<li onClick={() => setPanel(panels.home)}>Home</li>
				<li onClick={() => setPanel(panels.chatCommands)}>Chat Commands</li>
				<li onClick={() => setPanel(panels.rollTypes)}>Different Rolls</li>
				<li onClick={() => setPanel(panels.targetRoll)}>Target Rolls</li>
				<li onClick={() => setPanel(panels.totalRoll)}>Total Rolls</li>
			</ul>
			{panel === panels.home ? (
				<></>
			) : panel === panels.chatCommands ? (
				<InfoChatCommands />
			) : panel === panels.rollTypes ? (
				<InfoRollTypes />
			) : panel === panels.targetRoll ? (
				<InfoTargetRoll />
			) : panel === panels.totalRoll ? (
				<InfoTotalRoll />
			) : (
				<></>
			)}
		</div>
	);
}
