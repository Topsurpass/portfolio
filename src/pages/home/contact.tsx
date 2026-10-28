import { useState } from 'react';
import { ArrowUp, ArrowUpRight, Check, Copy, Loader2 } from 'lucide-react';
import { profile } from '@/data';
import { Reveal } from '@/components/reveal';

// Set VITE_FORMSPREE_ENDPOINT in your .env to a free Formspree form
// (https://formspree.io) to receive submissions. Until then the form falls
// back to opening the visitor's email client.
const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as
	| string
	| undefined;

type Status = 'idle' | 'submitting' | 'success' | 'error';
type Errors = { name?: string; email?: string; message?: string };

function validate(v: { name: string; email: string; message: string }): Errors {
	const errs: Errors = {};
	if (!v.name.trim()) errs.name = 'Please enter your name.';
	if (!v.email.trim()) errs.email = 'Please enter your email.';
	else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
		errs.email = 'Enter a valid email address.';
	if (v.message.trim().length < 10)
		errs.message = 'Tell me a little more (10+ characters).';
	return errs;
}

const channels = [
	{ label: 'LinkedIn', href: profile.linkedin },
	{ label: 'GitHub', href: profile.github },
	{ label: 'Résumé', href: profile.cv },
];

function CopyEmail() {
	const [copied, setCopied] = useState(false);

	async function copy() {
		try {
			await navigator.clipboard.writeText(profile.email);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 2000);
		} catch {
			window.location.href = `mailto:${profile.email}`;
		}
	}

	return (
		<button
			type="button"
			onClick={copy}
			className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-3 py-1.5 text-xs text-fg-muted transition-colors hover:border-fg hover:text-fg"
		>
			{copied ? (
				<Check className="h-3.5 w-3.5 text-brand" />
			) : (
				<Copy className="h-3.5 w-3.5" />
			)}
			<span aria-live="polite">{copied ? 'Copied' : 'Copy email'}</span>
		</button>
	);
}

function Field({
	id,
	label,
	error,
	children,
}: {
	id: string;
	label: string;
	error?: string;
	children: React.ReactNode;
}) {
	return (
		<div>
			<label htmlFor={id} className="mb-2 block text-sm text-fg-muted">
				{label}
			</label>
			{children}
			{error && (
				<p id={`${id}-err`} className="mt-1.5 text-xs text-brand">
					{error}
				</p>
			)}
		</div>
	);
}

function ContactForm() {
	const [status, setStatus] = useState<Status>('idle');
	const [errors, setErrors] = useState<Errors>({});

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.currentTarget;
		const fd = new FormData(form);
		const values = {
			name: String(fd.get('name') ?? ''),
			email: String(fd.get('email') ?? ''),
			message: String(fd.get('message') ?? ''),
		};

		const errs = validate(values);
		setErrors(errs);
		if (Object.keys(errs).length > 0) return;

		// No backend configured → fall back to the visitor's mail client.
		if (!FORM_ENDPOINT) {
			window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
				`Project enquiry from ${values.name}`
			)}&body=${encodeURIComponent(values.message)}`;
			return;
		}

		setStatus('submitting');
		try {
			const res = await fetch(FORM_ENDPOINT, {
				method: 'POST',
				body: fd,
				headers: { Accept: 'application/json' },
			});
			setStatus(res.ok ? 'success' : 'error');
			if (res.ok) form.reset();
		} catch {
			setStatus('error');
		}
	}

	if (status === 'success') {
		return (
			<div
				role="status"
				className="rounded-2xl border border-line-strong bg-panel p-8"
			>
				<Check className="h-6 w-6 text-brand" />
				<p className="mt-6 text-2xl font-medium tracking-[-0.02em]">
					Thanks — message received.
				</p>
				<p className="mt-2 text-fg-muted">
					I&apos;ll get back to you within one working day.
				</p>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} noValidate className="space-y-5">
			<div className="grid gap-5 sm:grid-cols-2">
				<Field id="name" label="Name" error={errors.name}>
					<input
						id="name"
						name="name"
						type="text"
						autoComplete="name"
						className="field"
						placeholder="Ada Lovelace"
						aria-invalid={!!errors.name}
						aria-describedby={errors.name ? 'name-err' : undefined}
					/>
				</Field>
				<Field id="email" label="Email" error={errors.email}>
					<input
						id="email"
						name="email"
						type="email"
						autoComplete="email"
						className="field"
						placeholder="you@company.com"
						aria-invalid={!!errors.email}
						aria-describedby={
							errors.email ? 'email-err' : undefined
						}
					/>
				</Field>
			</div>
			<Field
				id="message"
				label="What are you building?"
				error={errors.message}
			>
				<textarea
					id="message"
					name="message"
					rows={5}
					className="field resize-y"
					placeholder="A short note on the product, timeline and where I can help."
					aria-invalid={!!errors.message}
					aria-describedby={
						errors.message ? 'message-err' : undefined
					}
				/>
			</Field>

			{status === 'error' && (
				<p role="alert" className="text-sm text-brand">
					Something went wrong. Please email me directly at{' '}
					{profile.email}.
				</p>
			)}

			<button
				type="submit"
				disabled={status === 'submitting'}
				className="btn-primary w-full disabled:opacity-60 sm:w-auto"
			>
				{status === 'submitting' ? (
					<>
						<Loader2 className="h-4 w-4 animate-spin" />
						Sending…
					</>
				) : (
					<>
						Send message
						<ArrowUpRight className="h-4 w-4" />
					</>
				)}
			</button>
		</form>
	);
}

export function ContactSection() {
	return (
		<section
			id="contact"
			className="border-t border-line pb-10 pt-24 md:pt-36"
		>
			<div className="container-site">
				<Reveal className="flex items-center justify-between border-b border-line pb-4">
					<span className="eyebrow">Contact</span>
					<span className="eyebrow">Replies within a day</span>
				</Reveal>

				<div className="mt-12 grid gap-16 md:mt-16 lg:grid-cols-12">
					<div className="lg:col-span-6">
						<Reveal>
							<h2 className="text-balance text-[clamp(2.4rem,5.5vw,4.5rem)] font-medium leading-[1] tracking-[-0.045em]">
								Have a product that needs a{' '}
								<span className="font-serif font-normal italic text-brand">
									careful
								</span>{' '}
								frontend?
							</h2>
						</Reveal>
						<Reveal delay={0.08}>
							<p className="mt-8 max-w-md text-pretty text-lg leading-relaxed text-fg-muted">
								I&apos;m open to freelance projects, contract
								work and full-time frontend roles — remote or in
								Lagos.
							</p>
						</Reveal>

						<Reveal delay={0.14} className="mt-12 space-y-6">
							<div className="flex items-center gap-4">
								<span className="h-14 w-14 flex-none overflow-hidden rounded-full border border-line-strong">
									<img
										src={profile.photo}
										alt=""
										width={56}
										height={56}
										loading="lazy"
										className="h-full w-full origin-[51%_26%] scale-[2.2] object-cover"
									/>
								</span>
								<div>
									<p className="font-medium">
										{profile.name}
									</p>
									<p className="text-sm text-fg-muted">
										You&apos;ll be talking to me directly —
										no agency, no handoff.
									</p>
								</div>
							</div>
							<div>
								<p className="eyebrow mb-3">Email</p>
								<div className="flex flex-wrap items-center gap-4">
									<a
										href={`mailto:${profile.email}`}
										className="link-underline break-all text-xl font-medium tracking-[-0.02em] sm:text-2xl"
									>
										{profile.email}
									</a>
									<CopyEmail />
								</div>
							</div>
							<div>
								<p className="eyebrow mb-3">Phone</p>
								<a
									href={profile.phoneHref}
									className="link-underline text-lg"
								>
									{profile.phone}
								</a>
							</div>
							<ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
								{channels.map((c) => (
									<li key={c.label}>
										<a
											href={c.href}
											target="_blank"
											rel="noopener noreferrer"
											className="link-underline inline-flex items-center gap-1 text-fg-muted hover:text-fg"
										>
											{c.label}
											<ArrowUpRight className="h-3.5 w-3.5" />
										</a>
									</li>
								))}
							</ul>
						</Reveal>
					</div>

					<Reveal
						delay={0.1}
						className="lg:col-span-5 lg:col-start-8"
					>
						<ContactForm />
					</Reveal>
				</div>

				<footer className="mt-28 flex flex-col gap-4 border-t border-line pt-8 text-sm text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
					<p>
						© {new Date().getFullYear()} {profile.name}. Designed
						&amp; built in {profile.location}.
					</p>
					<a
						href="#top"
						className="inline-flex items-center gap-1.5 transition-colors hover:text-fg"
					>
						Back to top
						<ArrowUp className="h-3.5 w-3.5" />
					</a>
				</footer>
			</div>
		</section>
	);
}
