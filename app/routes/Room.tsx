import type { MetaFunction } from '@remix-run/node';

import RoomLayout from '~/components/RoomLayout';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Chatroom : Digital Roll : Built by Jared Hettinger' },
		{
			name: 'description',
			content: 'Digital Roll Chatroom : Where the rolls and results happen',
		},
	];
};

/** @returns {JSX.Element} Page-level component for a Digital Roll chatroom */
export default function Room(): JSX.Element {
	return (
		<div>
			<RoomLayout />
		</div>
	);
}
