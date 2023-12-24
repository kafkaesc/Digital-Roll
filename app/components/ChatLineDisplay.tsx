import CodeSpan from '~/elements/CodeSpan';
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
			<span className="italic text-red-700">{chatLine.errorObj.message}</span>
		</P>
	) : chatLine && 'isCommand' in chatLine ? (
		<P>
			<span className="italic">
				{chatLine.displayName} rolled{' '}
				<CodeSpan>{chatLine.rollResult.userInput}</CodeSpan>, Result:{' '}
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
