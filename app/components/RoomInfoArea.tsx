import H2 from '~/elements/H2';
import WriterLorem from './WriterLorem';

// TODO: Up this to be second column on large displays,
// hide off screen and slide up on small displays
export default function RoomInfoArea() {
	return (
		<div className="p-2">
			<H2>Info</H2>
			<WriterLorem writer={'all'} />
		</div>
	);
}
