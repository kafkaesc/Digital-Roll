import P from '~/elements/P';

interface WriterLoremProps {
	writer: string;
}

export default function WriterLorem({ writer }: WriterLoremProps) {
	if (writer === 'all') {
		return (
			<>
				<P>
					The box in question was, as I say, oblong. It was about six feet in
					length by two and a half in breadth; I observed it attentively, and
					like to be precise. Now this shape was peculiar; and no sooner had I
					seen it, than I took credit to myself for the accuracy of my guessing.
				</P>
				<P>
					Call me Ishmael. Some years ago—never mind how long precisely—having
					little or no money in my purse, and nothing particular to interest me
					on shore, I thought I would sail about a little and see the watery
					part of the world.
				</P>
				<P>
					However, it was, in general, part of fasting that these doubts were
					inextricably associated with it. For, in fact, no one was in a
					position to spend time watching the hunger artist every day and night,
					so no one could know, on the basis of his own observation, whether
					this was a case of truly uninterrupted, flawless fasting.
				</P>
				<P>
					"So he ran on down the drive, blood and breath roaring; presently he
					was in the road again though he could not see it. He could not hear
					either: the galloping mare was almost upon him before he heard her,
					and even then he held his course, as if the very urgency of his wild
					grief and need must in a moment more find him wings, waiting until the
					ultimate instant to hurl himself aside and into the weed-choked
					roadside ditch as the horse thundered past and on, for an instant in
					furious silhouette against the stars, the tranquil early summer night
					sky which, even before the shape of the horse and rider vanished,
					stained abruptly and violently upward: a long, swirling roar
					incredible and soundless, blotting the stars..."
				</P>
			</>
		);
	}
	if (writer === 'faulkner') {
		return (
			<P>
				"So he ran on down the drive, blood and breath roaring; presently he was
				in the road again though he could not see it. He could not hear either:
				the galloping mare was almost upon him before he heard her, and even
				then he held his course, as if the very urgency of his wild grief and
				need must in a moment more find him wings, waiting until the ultimate
				instant to hurl himself aside and into the weed-choked roadside ditch as
				the horse thundered past and on, for an instant in furious silhouette
				against the stars, the tranquil early summer night sky which, even
				before the shape of the horse and rider vanished, stained abruptly and
				violently upward: a long, swirling roar incredible and soundless,
				blotting the stars..."
			</P>
		);
	}
	if (writer === 'melville') {
		return (
			<P>
				Call me Ishmael. Some years ago—never mind how long precisely—having
				little or no money in my purse, and nothing particular to interest me on
				shore, I thought I would sail about a little and see the watery part of
				the world.
			</P>
		);
	}
	if (writer === 'kafka') {
		return (
			<P>
				However, it was, in general, part of fasting that these doubts were
				inextricably associated with it. For, in fact, no one was in a position
				to spend time watching the hunger artist every day and night, so no one
				could know, on the basis of his own observation, whether this was a case
				of truly uninterrupted, flawless fasting.
			</P>
		);
	}
	if (writer === 'poe') {
		return (
			<P>
				The box in question was, as I say, oblong. It was about six feet in
				length by two and a half in breadth; I observed it attentively, and like
				to be precise. Now this shape was peculiar; and no sooner had I seen it,
				than I took credit to myself for the accuracy of my guessing.
			</P>
		);
	}
}
