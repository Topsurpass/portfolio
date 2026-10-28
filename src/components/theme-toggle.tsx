import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';

function currentTheme(): Theme {
	const set = document.documentElement.getAttribute('data-theme');
	if (set === 'light' || set === 'dark') return set;
	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
}

export function ThemeToggle() {
	const [theme, setTheme] = useState<Theme>('light');

	useEffect(() => setTheme(currentTheme()), []);

	function toggle() {
		const next: Theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-theme', next);
		try {
			localStorage.setItem('theme', next);
		} catch {
			/* storage unavailable — theme still applies for this visit */
		}
		setTheme(next);
	}

	return (
		<button
			type="button"
			onClick={toggle}
			aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
			className="grid h-9 w-9 place-items-center rounded-full text-fg-muted transition-colors hover:bg-line hover:text-fg"
		>
			{theme === 'dark' ? (
				<Sun className="h-4 w-4" />
			) : (
				<Moon className="h-4 w-4" />
			)}
		</button>
	);
}
