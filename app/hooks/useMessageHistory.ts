import { useRef } from 'react';

/**
 * Hook that stores the history of messages its passed onto a stack. It
 * provides functions for moving around the stack and adding new messages
 * onto the stack.
 * @returns functions for navigating the stack and adding messages to it
 */
export function useMessageHistory() {
	const _curr = useRef<number>(0);
	const _stack = useRef<Array<string>>([]);

	/**
	 * Move up the stack of previous messages.
	 * @returns {string} The message at the new position in the message history
	 */
	function up(): string {
		if (_stack.current.length === 0) {
			return '';
		}
		if (_curr.current < _stack.current.length) {
			const ret = _stack.current[_curr.current];
			_curr.current = _curr.current + 1;
			return ret;
		} else {
			return _stack.current[_curr.current - 1];
		}
	}

	/**
	 * Move down the stack of previous messages.
	 * @returns {string} The message at the new position in the message history
	 */
	function down(): string {
		if (_curr.current > 1) {
			_curr.current = _curr.current - 1;
			const ret = _stack.current[_curr.current - 1];
			return ret;
		}
		_curr.current = 0;
		return '';
	}

	/**
	 * Push a new message onto the internal stack.
	 * @param {string} st The new message to push
	 */
	function push(st: string): void {
		_stack.current.unshift(st);
	}

	/** Reset the current position on the stack back to the beginning. */
	function reset(): void {
		_curr.current = 0;
	}

	return { down, push, reset, up };
}
