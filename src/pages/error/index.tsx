import { useRouteError } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ErrorPage() {
	const error = useRouteError() as
		| { statusText?: string; message?: string }
		| undefined;

	return (
		<main className="container-site flex min-h-screen flex-col justify-center">
			<p className="eyebrow">Error 404</p>
			<h1 className="mt-6 max-w-[14ch] text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[1] tracking-[-0.045em]">
				This page{' '}
				<span className="font-serif font-normal italic text-brand">
					doesn&apos;t exist.
				</span>
			</h1>
			<p className="mt-6 max-w-md text-lg text-fg-muted">
				{error?.statusText ||
					error?.message ||
					'The link may be broken, or the page may have moved.'}
			</p>
			<a href="/" className="btn-secondary mt-10 self-start">
				<ArrowLeft className="h-4 w-4" />
				Back home
			</a>
		</main>
	);
}
