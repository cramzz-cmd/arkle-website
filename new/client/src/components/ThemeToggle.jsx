import { useEffect, useState } from 'react';
import './ThemeToggle.css';

const STORAGE_KEY = 'arkle-theme';

const THEMES = [
	{ id: 'light', label: 'Light' },
	{ id: 'night', label: 'Night' },
];

const normalizeTheme = (value) => (value === 'dark' ? 'night' : value);

const resolveInitialTheme = () => {
	if (typeof window === 'undefined') {
		return 'light';
	}

	const stored = window.localStorage.getItem(STORAGE_KEY);
	if (stored) {
		const normalized = normalizeTheme(stored);
		if (normalized !== stored) {
			window.localStorage.setItem(STORAGE_KEY, normalized);
		}
		if (THEMES.some(({ id }) => id === normalized)) {
			return normalized;
		}
	}

	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'light';
};

const ThemeToggle = () => {
	const [theme, setTheme] = useState(() => {
		const initial = resolveInitialTheme();

		if (typeof document !== 'undefined') {
			document.documentElement.setAttribute('data-theme', initial);
		}

		return initial;
	});

	useEffect(() => {
		if (typeof document === 'undefined') {
			return;
		}

		document.documentElement.setAttribute('data-theme', theme);

		if (typeof window !== 'undefined') {
			window.localStorage.setItem(STORAGE_KEY, theme);
		}
	}, [theme]);

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

		const handlePreferenceChange = (event) => {
			const stored = window.localStorage.getItem(STORAGE_KEY);

			if (stored) {
				const normalized = normalizeTheme(stored);
				if (normalized !== stored) {
					window.localStorage.setItem(STORAGE_KEY, normalized);
				}
				if (THEMES.some(({ id }) => id === normalized)) {
					return;
				}
			}

			setTheme(event.matches ? 'night' : 'light');
		};

		mediaQuery.addEventListener('change', handlePreferenceChange);
		return () => mediaQuery.removeEventListener('change', handlePreferenceChange);
	}, []);

	const handleSelect = (nextTheme) => {
		setTheme(nextTheme);
	};

	return (
		<fieldset className="theme-toggle" aria-label="Select theme">
			<legend className="theme-toggle__legend">Theme selection</legend>
			<div className="theme-toggle__options">
				{THEMES.map(({ id, label }) => (
					<button
						key={id}
						type="button"
						className={`theme-toggle__option${theme === id ? ' active' : ''}`}
						onClick={() => handleSelect(id)}
						aria-pressed={theme === id}
					>
						{label}
					</button>
				))}
			</div>
		</fieldset>
	);
};

export default ThemeToggle;
