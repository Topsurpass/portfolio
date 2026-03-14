import { useEffect, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

export function useScramble(target: string, startDelay = 800) {
	const [text, setText] = useState('');
	useEffect(() => {
		let frame = 0;
		let timeout: ReturnType<typeof setTimeout>;
		timeout = setTimeout(() => {
			const interval = setInterval(() => {
				setText(
					target
						.split('')
						.map((char, i) => {
							if (i < Math.floor(frame / 2)) return char;
							if (char === ' ') return ' ';
							return CHARS[
								Math.floor(Math.random() * CHARS.length)
							];
						})
						.join('')
				);
				frame++;
				if (frame > target.length * 2 + 4) {
					setText(target);
					clearInterval(interval);
				}
			}, 40);
		}, startDelay);
		return () => {
			clearTimeout(timeout);
		};
	}, [target, startDelay]);
	return text;
}
