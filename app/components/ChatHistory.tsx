import { useEffect, useRef } from 'react';
import ChatLineDisplay from '~/components/ChatLineDisplay';
import {
	CommandErrorNotice,
	RollCommandNotice,
	UserChat,
} from '~/types/ChatLines';

interface ChatHistoryProps {
	chatHistory: Array<CommandErrorNotice | RollCommandNotice | UserChat>;
}

export default function ChatHistory({ chatHistory }: ChatHistoryProps) {
	const bottomRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [chatHistory]);

	return (
		<div className="h-full p-1">
			{chatHistory.map((ch) => {
				return (
					<ChatLineDisplay
						key={`${ch.userName}-${ch.timestamp}`}
						chatLine={ch}
					/>
				);
			})}
			<div ref={bottomRef} />
		</div>
	);
}
