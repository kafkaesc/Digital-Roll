import { MetaFunction } from '@remix-run/react';

import H1 from '~/elements/H1';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Test : Digital Roll : Built by Jared Hettinger' },
		{
			name: 'description',
			content:
				'Hey! How did you get here? This is a test page for Digital Roll.',
		},
	];
};

export default function Test() {
	/*
	header, full width
		left 50%, fill height
		right 50%, fill height
	footer, full-width
	*/
	return (
		<div style={{ height: '100vh' }}>
			<div
				style={{
					border: 'solid 1px #f00',
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
				}}
			>
				{/* Header */}
				<div>
					<H1>Hello world: flex test</H1>
				</div>
				{/* Flex grow content area */}
				<div
					style={{
						border: 'solid 1px #000',
						flex: '1 1 auto',
					}}
				>
					<div
						style={{
							border: 'solid 1px #00f',
							display: 'inline-block',
							width: '50%',
							overflowY: 'scroll',
						}}
					>
						Column A
					</div>
					<div
						style={{
							border: 'solid 1px #0f0',
							display: 'inline-block',
							width: '50%',
							overflowY: 'scroll',
						}}
					>
						Column B
					</div>
				</div>
				{/* _jh: Footer is optional and not a great idea for the chatroom */}
				{/*<div>footer</div>*/}
			</div>
		</div>
	);
}
