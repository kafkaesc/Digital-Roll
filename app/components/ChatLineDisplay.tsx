import P from '~/elements/P';

import {
	CommandErrorNotice,
	RollCommandNotice,
	UserChat,
} from '~/types/ChatLines';

interface ChatLineDisplayProps {
	chatLine: CommandErrorNotice | RollCommandNotice | UserChat;
}

export default function ChatLineDisplay({ chatLine }: ChatLineDisplayProps) {
	return chatLine && 'isError' in chatLine ? (
		<P>
			<span className="italic">{chatLine.errorObj.message}</span>
		</P>
	) : chatLine && 'isCommand' in chatLine ? (
		<P>
			<span className="italic">
				{chatLine.displayName} rolled {chatLine.rollResult.userInput}, Result:{' '}
				{chatLine.rollResult?.display}
			</span>
		</P>
	) : (
		<P>
			<>
				<span className="font-bold">{chatLine.displayName}:</span>{' '}
				{chatLine.message}
			</>
		</P>
	);
}
