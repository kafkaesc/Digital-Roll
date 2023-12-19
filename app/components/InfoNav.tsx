interface InfoNavProps {
	panels: any;
	setPanel: Function;
}

export default function InfoNav({ panels, setPanel }: InfoNavProps) {
	return (
		<ul className="mb-2 text-center">
			<li
				className="inline-block cursor-pointer"
				onClick={() => setPanel(panels.home)}
			>
				Home
			</li>{' '}
			🎲{' '}
			<li
				className="inline-block cursor-pointer"
				onClick={() => setPanel(panels.chatCommands)}
			>
				Chat Commands
			</li>{' '}
			🎲{' '}
			<li
				className="inline-block cursor-pointer"
				onClick={() => setPanel(panels.walkthrough)}
			>
				Rolls Walkthrough
			</li>
			<br />
			<li
				className="inline-block cursor-pointer"
				onClick={() => setPanel(panels.rollTypes)}
			>
				Roll Types
			</li>{' '}
			🎲{' '}
			<li
				className="inline-block cursor-pointer"
				onClick={() => setPanel(panels.matchRoll)}
			>
				Match Rolls
			</li>{' '}
			🎲{' '}
			<li
				className="inline-block cursor-pointer"
				onClick={() => setPanel(panels.targetRoll)}
			>
				Target Rolls
			</li>{' '}
			🎲{' '}
			<li
				className="inline-block cursor-pointer"
				onClick={() => setPanel(panels.totalRoll)}
			>
				Total Rolls
			</li>
		</ul>
	);
}
