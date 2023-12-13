import ChatInfo from './ChatInfo';
import WriterLorem from './WriterLorem';

// TODO: Up this to be second column on large displays,
// hide off screen and slide up on small displays
export default function RoomInfoArea() {
	return (
		<div className="p-2">
			<ChatInfo />
			{/*<WriterLorem writer={'all'} />*/}
		</div>
	);
}
