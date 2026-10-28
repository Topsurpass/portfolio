import shwPreset from './src/@plugins/global-preset';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	prefix: '',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				mono: [
					'"Geist Mono"',
					'ui-monospace',
					'SFMono-Regular',
					'monospace',
				],
				serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
			},
			colors: {
				canvas: 'var(--canvas)',
				panel: 'var(--panel)',
				fg: {
					DEFAULT: 'var(--fg)',
					muted: 'var(--fg-muted)',
					subtle: 'var(--fg-subtle)',
				},
				line: {
					DEFAULT: 'var(--line)',
					strong: 'var(--line-strong)',
				},
				brand: 'var(--brand)',
			},
			maxWidth: {
				site: '1200px',
			},
			transitionTimingFunction: {
				out: 'cubic-bezier(0.22, 1, 0.36, 1)',
			},
		},
	},
	presets: [shwPreset],
};

export default config;
