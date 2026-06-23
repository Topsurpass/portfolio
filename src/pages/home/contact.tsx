import { motion } from 'framer-motion';
import { useState } from 'react';
import {
	Mail,
	Phone,
	MapPin,
	Github,
	Linkedin,
	ArrowUpRight,
	Send,
	CheckCircle2,
	Loader2,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

// Set VITE_FORMSPREE_ENDPOINT in your .env to a free Formspree form
// (https://formspree.io) to receive submissions. Until then the form falls
// back to opening the visitor's email client.
const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as
	| string
	| undefined;
const EMAIL = 'temitopeabiodun685@gmail.com';

const ease = [0.22, 1, 0.36, 1] as const;

const directLinks = [
	{
		icon: <Mail className="w-[18px] h-[18px]" />,
		label: 'Email',
		value: EMAIL,
		href: `mailto:${EMAIL}`,
		accent: '#5b9df9',
	},
	{
		icon: <Phone className="w-[18px] h-[18px]" />,
		label: 'Phone',
		value: '+234 810 730 4148',
		href: 'tel:+2348107304148',
		accent: '#68D391',
	},
	{
		icon: <MapPin className="w-[18px] h-[18px]" />,
		label: 'Location',
		value: 'Lagos, Nigeria',
		href: undefined,
		accent: '#FC8181',
	},
];

const socials = [
	{
		icon: <Linkedin className="w-[18px] h-[18px]" />,
		label: 'LinkedIn',
		href: 'https://linkedin.com/in/temitope-olowosuyi',
		accent: '#60A5FA',
	},
	{
		icon: <Github className="w-[18px] h-[18px]" />,
		label: 'GitHub',
		href: 'https://github.com/Topsurpass',
		accent: '#CBD5E1',
	},
];

type Status = 'idle' | 'submitting' | 'success' | 'error';
type Errors = { name?: string; email?: string; message?: string };

function validate(v: { name: string; email: string; message: string }): Errors {
	const errs: Errors = {};
	if (!v.name.trim()) errs.name = 'Please enter your name.';
	if (!v.email.trim()) errs.email = 'Please enter your email.';
	else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
		errs.email = 'Enter a valid email address.';
	if (!v.message.trim() || v.message.trim().length < 10)
		errs.message = 'Tell me a little more (10+ characters).';
	return errs;
}

export function ContactSection() {
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
			window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
				`Portfolio enquiry from ${values.name}`
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
			if (res.ok) {
				setStatus('success');
				form.reset();
			} else {
				setStatus('error');
			}
		} catch {
			setStatus('error');
		}
	}

	return (
		<section
			id="contact"
			className="contact-section py-28 relative z-10"
			style={{ background: 'var(--ed-surface)' }}
		>
			<div className="contact-grid-bg" />
			<div className="contact-radial-glow" />

			<div className="ed-container z-10">
				<SectionHeading
					index="04"
					kicker="Contact"
					title={
						<>
							Let&apos;s build{' '}
							<span className="ed-name-accent">something</span>
						</>
					}
					lead="Have a role, a project, or just a question? Send a note — I usually reply within a day."
				/>

				<div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 mt-12">
					{/* ── Form ── */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-80px' }}
						transition={{ duration: 0.6, ease }}
					>
						{status === 'success' ? (
							<div
								role="status"
								className="flex flex-col items-start gap-4 rounded-2xl p-8"
								style={{
									background: 'var(--ed-raised)',
									border: '1px solid rgba(104,211,145,0.3)',
								}}
							>
								<CheckCircle2 className="w-10 h-10" style={{ color: '#68D391' }} />
								<h3
									className="font-bold"
									style={{
										fontFamily: "'Syne', sans-serif",
										fontSize: '1.4rem',
										color: 'var(--ed-text-hi)',
									}}
								>
									Message sent — thank you!
								</h3>
								<p className="ed-body">
									I&apos;ve got your message and will get back to you shortly.
								</p>
							</div>
						) : (
							<form onSubmit={handleSubmit} noValidate className="space-y-5">
								<div className="grid sm:grid-cols-2 gap-5">
									<div>
										<label htmlFor="name" className="ed-label block mb-2">
											Name
										</label>
										<input
											id="name"
											name="name"
											type="text"
											autoComplete="name"
											className="ed-field"
											placeholder="Your name"
											aria-invalid={!!errors.name}
											aria-describedby={errors.name ? 'name-err' : undefined}
										/>
										{errors.name && (
											<p id="name-err" className="ed-mono mt-1.5" style={errStyle}>
												{errors.name}
											</p>
										)}
									</div>
									<div>
										<label htmlFor="email" className="ed-label block mb-2">
											Email
										</label>
										<input
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											className="ed-field"
											placeholder="you@company.com"
											aria-invalid={!!errors.email}
											aria-describedby={errors.email ? 'email-err' : undefined}
										/>
										{errors.email && (
											<p id="email-err" className="ed-mono mt-1.5" style={errStyle}>
												{errors.email}
											</p>
										)}
									</div>
								</div>

								<div>
									<label htmlFor="message" className="ed-label block mb-2">
										Message
									</label>
									<textarea
										id="message"
										name="message"
										rows={5}
										className="ed-field resize-y"
										placeholder="Tell me about the role or project…"
										aria-invalid={!!errors.message}
										aria-describedby={errors.message ? 'message-err' : undefined}
									/>
									{errors.message && (
										<p id="message-err" className="ed-mono mt-1.5" style={errStyle}>
											{errors.message}
										</p>
									)}
								</div>

								{status === 'error' && (
									<p role="alert" className="ed-mono" style={errStyle}>
										Something went wrong sending your message. Please email me
										directly at {EMAIL}.
									</p>
								)}

								<button
									type="submit"
									disabled={status === 'submitting'}
									className="ed-btn ed-btn-primary w-full sm:w-auto disabled:opacity-60"
								>
									{status === 'submitting' ? (
										<>
											<Loader2 className="w-4 h-4 animate-spin" />
											Sending…
										</>
									) : (
										<>
											<Send className="w-4 h-4" />
											Send message
										</>
									)}
								</button>
							</form>
						)}
					</motion.div>

					{/* ── Direct contact ── */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-80px' }}
						transition={{ delay: 0.1, duration: 0.6, ease }}
						className="space-y-3"
					>
						{directLinks.map((m) => {
							const inner = (
								<div className="flex items-center gap-4 rounded-2xl p-4 ed-contact-row">
									<span
										className="flex items-center justify-center w-11 h-11 rounded-xl flex-shrink-0"
										style={{
											background: `${m.accent}15`,
											border: `1px solid ${m.accent}30`,
											color: m.accent,
										}}
									>
										{m.icon}
									</span>
									<span>
										<span className="ed-label block">{m.label}</span>
										<span
											style={{
												color: 'var(--ed-text-hi)',
												fontSize: 14,
												fontWeight: 600,
											}}
										>
											{m.value}
										</span>
									</span>
								</div>
							);
							return m.href ? (
								<a key={m.label} href={m.href} className="block">
									{inner}
								</a>
							) : (
								<div key={m.label}>{inner}</div>
							);
						})}

						<div className="flex gap-3 pt-2">
							{socials.map((s) => (
								<a
									key={s.label}
									href={s.href}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 px-4 py-2.5 rounded-xl ed-contact-row"
									style={{ fontSize: 13 }}
								>
									<span style={{ color: s.accent }}>{s.icon}</span>
									<span style={{ color: 'var(--ed-text)' }}>{s.label}</span>
									<ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
								</a>
							))}
						</div>
					</motion.div>
				</div>

				<motion.div
					className="divider-line mt-20 mb-8"
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				/>
				<p
					className="ed-mono text-center"
					style={{ fontSize: 12, color: 'var(--ed-text-dim)', letterSpacing: '0.05em' }}
				>
					© {new Date().getFullYear()} · Olowosuyi Temitope · Crafted with care in
					Lagos, Nigeria
				</p>
			</div>
		</section>
	);
}

const errStyle: React.CSSProperties = {
	fontSize: 11,
	color: '#fca5a5',
	letterSpacing: '0.02em',
};
