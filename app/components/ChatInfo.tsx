import InfoChatCommands from '~/components/InfoChatCommands';
import InfoMatchRoll from './InfoMatchRoll';
import InfoNav from '~/components/InfoNav';
import InfoRollTypes from '~/components/InfoRollTypes';
import InfoTargetRoll from '~/components/InfoTargetRoll';
import InfoTotalRoll from '~/components/InfoTotalRoll';
import InfoWalkthrough from './InfoWalkthrough';

import { useInfoPanelSwapper } from '~/hooks/useInfoPanelSwapper';

export default function ChatInfo() {
	const { panel, panels, setPanel } = useInfoPanelSwapper();
	return (
		<div>
			<InfoNav panels={panels} setPanel={setPanel} />
			{panel === panels.home ? (
				<></>
			) : panel === panels.chatCommands ? (
				<InfoChatCommands />
			) : panel === panels.walkthrough ? (
				<InfoWalkthrough />
			) : panel === panels.rollTypes ? (
				<InfoRollTypes />
			) : panel === panels.matchRoll ? (
				<InfoMatchRoll />
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
