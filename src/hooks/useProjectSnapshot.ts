import { useState, useEffect } from 'react';

export function useProjectSnapshot(url: string) {
	const [src, setSrc] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (!url) return;
		setLoading(true);
		setError(false);
		setSrc(null);

		const endpoint =
			`https://api.microlink.io/?url=${encodeURIComponent(url)}` +
			`&screenshot=true&meta=false&embed=screenshot.url`;

		const img = new Image();
		img.onload = () => {
			setSrc(endpoint);
			setLoading(false);
		};
		img.onerror = () => {
			setError(true);
			setLoading(false);
		};
		img.src = endpoint;
	}, [url]);

	return { src, loading, error };
}
