import type { MetaFunction } from '@remix-run/node';

import RoomLayout from '~/components/RoomLayout';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Chatroom | Digital Roll' },
		{
			name: 'description',
			content:
				'Digital Roll provides an online experience for tabletop dice rolls between friends',
		},
	];
};

export default function Room() {
	return (
		<div>
			<RoomLayout />
		</div>
	);
}
