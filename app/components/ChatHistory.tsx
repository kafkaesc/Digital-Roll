import { useEffect, useRef } from 'react';
import P from '~/elements/P';

interface ChatHistoryProps {
	chatHistory: Array<any>;
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
					<P key={`${ch.displayName}-${ch.timestamp}`}>
						{ch.isCommand ? (
							<span className="italic">
								{ch.displayName} {ch.message}
							</span>
						) : (
							<>
								<span className="font-bold">{ch.displayName}:</span>{' '}
								{ch.message}
							</>
						)}
					</P>
				);
			})}
			<div ref={bottomRef} />
		</div>
	);
}
