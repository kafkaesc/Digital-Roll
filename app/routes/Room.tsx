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

/** @returns {JSX.Element} Page-level component for a Digital Roll chatroom */
export default function Room(): JSX.Element {
	return (
		<div>
			<RoomLayout />
		</div>
	);
}
