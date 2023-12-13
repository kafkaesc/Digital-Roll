import { useState } from 'react';
import Button from '~/elements/Button';
import { useMessageHistory } from '~/hooks/useMessageHistory';

interface ChatInputProps {
	submit: Function;
}

interface ChatInputForm {
	chatInput: string;
}

// TODO: Identify /roll commands and submit rolls into chat instead of messages
export default function ChatInput({ submit }: ChatInputProps) {
	const [formState, setFormState] = useState<ChatInputForm>({ chatInput: '' });
	const previousMessages = useMessageHistory();

	function handleChange(name: keyof ChatInputForm, value: any): void {
		setFormState((prev) => {
			let newData = { ...prev };
			newData[name] = value;
			return newData;
		});
	}

	function handleKeyUp(e: React.KeyboardEvent): void {
		if (e.key === 'ArrowDown') {
			setChatInput(previousMessages.down());
		}
		if (e.key === 'ArrowUp') {
			setChatInput(previousMessages.up());
		}
		if (e.key === 'Escape') {
			previousMessages.reset();
			setChatInput('');
		}
	}

	function handleSubmit(e: React.FormEvent): void {
		e.preventDefault();
		if (!formState.chatInput || formState.chatInput.length === 0) {
			return;
		}
		submit(formState.chatInput);
		previousMessages.push(formState.chatInput);
		previousMessages.reset();
		setChatInput('');
	}

	function setChatInput(st: string): void {
		setFormState((prev) => {
			let newData = { ...prev };
			newData.chatInput = st;
			return newData;
		});
	}

	return (
		<form onSubmit={handleSubmit} autoComplete="off">
			<input
				className="px-2 py-1 border"
				name="chatInput"
				onChange={(e) => handleChange('chatInput', e.target.value)}
				onKeyUp={handleKeyUp}
				type="text"
				value={formState.chatInput}
			/>
			<Button>Submit</Button>
		</form>
	);
}
