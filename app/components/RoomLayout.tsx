import { useState } from 'react';
import H1 from '~/elements/H1';
import ChatHistory from '~/components/ChatHistory';
import ChatInput from '~/components/ChatInput';
import RoomInfoArea from '~/components/RoomInfoArea';
import Nav from './layout/Nav';
import useCommandRoll from '~/hooks/useCommandRoll';
import useCommandScan from '~/hooks/useCommandScan';

import { DonQuixote } from '~/data/ConversationSeeds';

const activeUser = 'Aeroa';
const quixote = DonQuixote;

export default function RoomLayout() {
	const [chatHistory, setChatHistory] = useState(quixote);
	const commandScanner = useCommandScan();
	const commandRoll = useCommandRoll();

	function handleChatSubmit(st: string) {
		if (commandScanner.scanForHelp(st)) {
			console.log('A help command was entered: ' + st);
			return;
		}

		if (commandScanner.scanForRoll(st)) {
			const result = commandRoll.runRoll(st);
			setChatHistory((prev) => [
				...prev,
				{
					displayName: activeUser,
					isCommand: true,
					message: `rolled ${st}, Result: ${result.display}`,
					timestamp: new Date().toUTCString(),
				},
			]);
			return;
		}

		setChatHistory((prev) => [
			...prev,
			{
				displayName: activeUser,
				isCommand: false,
				message: st,
				timestamp: 'now',
			},
		]);
	}

	// https://medium.com/@susiekim9/how-to-compensate-for-the-ios-viewport-unit-bug-46e78d54af0d
	return (
		<div className="flex flex-col h-[100dvh]">
			{/* Room Heading */}
			<div>
				<H1>Chat Room</H1>
				<Nav />
			</div>
			<div className="flex-auto overflow-y-hidden">
				{/* Left Column */}
				<div className="inline-block w-1/2 h-full overflow-y-auto align-top">
					<div className="flex flex-col h-full">
						<div className="flex-auto p-1 m-1 overflow-y-scroll border">
							<ChatHistory chatHistory={chatHistory} />
						</div>
						<div className="m-1">
							<ChatInput submit={handleChatSubmit} />
						</div>
					</div>
				</div>
				{/* Right Column */}
				<div className="inline-block w-1/2 h-full p-1 align-top">
					<div className="h-full p-1 overflow-y-scroll border">
						<RoomInfoArea />
					</div>
				</div>
			</div>
		</div>
	);
}
