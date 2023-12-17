interface InfoNavProps {
	panels: any;
	setPanel: Function;
}

export default function InfoNav({ panels, setPanel }: InfoNavProps) {
	return (
		<ul className="text-center mb-2">
			<li
				className="cursor-pointer inline-block"
				onClick={() => setPanel(panels.home)}
			>
				Home
			</li>{' '}
			🎲{' '}
			<li
				className="cursor-pointer inline-block"
				onClick={() => setPanel(panels.chatCommands)}
			>
				Chat Commands
			</li>{' '}
			🎲{' '}
			<li
				className="cursor-pointer inline-block"
				onClick={() => setPanel(panels.walkthrough)}
			>
				Rolls Walkthrough
			</li>
			<br />
			<li
				className="cursor-pointer inline-block"
				onClick={() => setPanel(panels.rollTypes)}
			>
				Roll Types
			</li>{' '}
			🎲{' '}
			<li
				className="cursor-pointer inline-block"
				onClick={() => setPanel(panels.matchRoll)}
			>
				Match Rolls
			</li>{' '}
			🎲{' '}
			<li
				className="cursor-pointer inline-block"
				onClick={() => setPanel(panels.targetRoll)}
			>
				Target Rolls
			</li>{' '}
			🎲{' '}
			<li
				className="cursor-pointer inline-block"
				onClick={() => setPanel(panels.totalRoll)}
			>
				Total Rolls
			</li>
		</ul>
	);
}
