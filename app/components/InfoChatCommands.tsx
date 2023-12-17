import CodeSpan from '~/elements/CodeSpan';
import H2 from '~/elements/H2';
import P from '~/elements/P';

export default function InfoChatCommands() {
	return (
		<div>
			<H2>Chat Commands</H2>
			<P>
				<CodeSpan>/help</CodeSpan>
			</P>
			<P>
				<CodeSpan>/roll</CodeSpan>
			</P>
		</div>
	);
}
