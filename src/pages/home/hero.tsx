import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Download, ArrowRight, Github, Linkedin } from 'lucide-react';
import cv from './Olowosuyi_Temitope.pdf';
import { useScramble } from '@/hooks/useScramble';

// ─── RAF counter (ease-out cubic) ─────────────────────────────────────────────
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
	const [val, setVal] = useState(0);
	const rafRef = useRef<number>(0);
	const reduce = useReducedMotion();

	useEffect(() => {
		if (reduce) {
			setVal(to);
			return;
		}
		const DELAY = 700;
		const DURATION = 1400;
		const startAt = performance.now() + DELAY;
		const tick = (now: number) => {
			if (now < startAt) {
				rafRef.current = requestAnimationFrame(tick);
				return;
			}
			const t = Math.min((now - startAt) / DURATION, 1);
			const eased = 1 - Math.pow(1 - t, 3);
			setVal(Math.round(eased * to));
			if (t < 1) rafRef.current = requestAnimationFrame(tick);
		};
		rafRef.current = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(rafRef.current);
	}, [to, reduce]);

	return (
		<span>
			{val}
			{suffix}
		</span>
	);
}

const stats = [
	{ value: 5, suffix: '+', label: 'Years building' },
	{ value: 40, suffix: '+', label: 'Projects shipped' },
	{ value: 20, suffix: '+', label: 'Clients served' },
];

const specs: [string, React.ReactNode][] = [
	['Role', 'Frontend Developer'],
	['Stack', 'React · Next.js · React Native · TS'],
	['Focus', 'Performance & scalability'],
	['Based', 'Lagos, Nigeria · UTC+1'],
];

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
	const scrambled = useScramble('Frontend Developer', 600);
	const reduce = useReducedMotion();

	return (
		<section
			id="profile"
			className="hero-section relative min-h-screen flex items-center pt-28 pb-20"
			style={{ background: 'var(--ed-surface)' }}
		>
			<div className="hero-dot-grid" />
			<div className="hero-noise" />
			<div
				className="absolute pointer-events-none"
				style={{
					top: '-10%',
					left: '-5%',
					width: 620,
					height: 620,
					borderRadius: '50%',
					filter: 'blur(120px)',
					background:
						'radial-gradient(circle, rgba(91,157,249,0.12) 0%, transparent 70%)',
				}}
			/>

			<div className="ed-container w-full z-10">
				<div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
					{/* ── Left: editorial intro ── */}
					<div className="lg:col-span-7 min-w-0">
						<motion.div
							initial={{ opacity: 0, y: 14 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease }}
							className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full"
							style={{
								background: 'rgba(34,197,94,0.08)',
								border: '1px solid rgba(34,197,94,0.22)',
							}}
						>
							<motion.span
								className="w-2 h-2 rounded-full"
								style={{ background: '#4ade80' }}
								animate={reduce ? {} : { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
								transition={{ duration: 2, repeat: Infinity }}
							/>
							<span
								className="ed-mono"
								style={{
									fontSize: 11,
									letterSpacing: '0.18em',
									color: '#86efac',
									textTransform: 'uppercase',
								}}
							>
								Open to opportunities
							</span>
						</motion.div>

						<p className="ed-label mb-4">Hi there, I&apos;m</p>

						<motion.h1
							className="ed-display"
							initial={{ opacity: 0, y: 18 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, ease }}
						>
							Olowosuyi
							<br />
							<span className="ed-name-accent">Temitope</span>
						</motion.h1>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.25, duration: 0.5 }}
							className="flex items-center gap-3 mt-7"
						>
							<span
								style={{
									width: 34,
									height: 2,
									borderRadius: 2,
									background:
										'linear-gradient(90deg, var(--ed-accent), transparent)',
								}}
							/>
							<span
								className="ed-mono text-lg md:text-xl"
								style={{ color: 'var(--ed-accent)', letterSpacing: '0.06em' }}
							>
								{scrambled || ' '}
							</span>
						</motion.div>

						<motion.p
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.35, duration: 0.6 }}
							className="ed-lead mt-7 max-w-xl"
						>
							I design and engineer{' '}
							<span style={{ color: 'var(--ed-text-hi)', fontWeight: 600 }}>
								production-grade web and mobile systems
							</span>{' '}
							with React, Next.js, React Native and TypeScript — built for
							performance, accessibility and scale.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.45, duration: 0.6 }}
							className="flex flex-col sm:flex-row gap-3 mt-9"
						>
							<a href="#projects" className="ed-btn ed-btn-primary">
								View my work
								<ArrowRight className="w-4 h-4" />
							</a>
							<a href={cv} download className="ed-btn ed-btn-ghost">
								<Download className="w-4 h-4" />
								Download CV
							</a>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.6, duration: 0.6 }}
							className="flex items-center gap-4 mt-7"
						>
							<a
								href="https://github.com/Topsurpass"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub profile"
								className="ed-social-icon"
							>
								<Github className="w-[18px] h-[18px]" />
							</a>
							<a
								href="https://linkedin.com/in/temitope-olowosuyi"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn profile"
								className="ed-social-icon"
							>
								<Linkedin className="w-[18px] h-[18px]" />
							</a>
						</motion.div>
					</div>

					{/* ── Right: editorial spec sheet ── */}
					<motion.aside
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.7, ease }}
						className="lg:col-span-5 min-w-0"
						aria-label="At a glance"
					>
						<div
							className="rounded-2xl overflow-hidden"
							style={{
								background: 'var(--ed-raised)',
								border: '1px solid var(--ed-line)',
								backdropFilter: 'blur(10px)',
							}}
						>
							<div
								className="flex items-center justify-between px-5 py-3"
								style={{ borderBottom: '1px solid var(--ed-line)' }}
							>
								<span className="ed-label">Profile</span>
								<span
									className="ed-mono"
									style={{ fontSize: 10, color: '#86efac', letterSpacing: '0.12em' }}
								>
									● AVAILABLE
								</span>
							</div>

							<dl className="px-5 py-2">
								{specs.map(([k, v]) => (
									<div
										key={k}
										className="flex items-start justify-between gap-4 py-3"
										style={{ borderBottom: '1px solid var(--ed-line)' }}
									>
										<dt className="ed-label" style={{ paddingTop: 2 }}>
											{k}
										</dt>
										<dd
											className="ed-mono text-right"
											style={{ fontSize: 13, color: 'var(--ed-text)' }}
										>
											{v}
										</dd>
									</div>
								))}
							</dl>

							<div className="grid grid-cols-3">
								{stats.map((s) => (
									<div
										key={s.label}
										className="px-3 py-5 text-center"
										style={{ borderRight: '1px solid var(--ed-line)' }}
									>
										<p
											className="font-extrabold"
											style={{
												fontFamily: "'Syne', sans-serif",
												fontSize: '1.6rem',
												color: 'var(--ed-text-hi)',
												lineHeight: 1,
												fontVariantNumeric: 'tabular-nums',
											}}
										>
											<Counter to={s.value} suffix={s.suffix} />
										</p>
										<p
											className="ed-mono mt-1.5"
											style={{
												fontSize: 9,
												letterSpacing: '0.1em',
												color: 'var(--ed-text-dim)',
												textTransform: 'uppercase',
											}}
										>
											{s.label}
										</p>
									</div>
								))}
							</div>
						</div>
					</motion.aside>
				</div>
			</div>
		</section>
	);
}
