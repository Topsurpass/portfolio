import { motion, useMotionValue, useSpring } from 'framer-motion';
import {
	forwardRef,
	type ForwardedRef,
	useEffect,
	useState,
	useRef,
	useCallback,
	lazy,
	Suspense,
} from 'react';
import { Download, Code2, Layers } from 'lucide-react';
import cv from './Olowosuyi_Temitope.pdf';
import { useScramble } from '@/hooks/useScramble';
import { orbitTagData } from '@/data';

// ─── Lazy-load the heavy orbit panel (hidden on mobile anyway) ────────────────
const OrbitTag = lazy(() => import('@/components/orbit-tag'));

// ─── Counter: RAF-based tween — no framer-motion `animate` import needed ─────
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
	const [val, setVal] = useState(0);
	const rafRef = useRef<number>(0);

	useEffect(() => {
		// Mirror the original 1.2 s delay + 1.6 s duration, ease-out cubic
		const DELAY = 1200;
		const DURATION = 1600;
		const startAt = performance.now() + DELAY;

		const tick = (now: number) => {
			if (now < startAt) {
				rafRef.current = requestAnimationFrame(tick);
				return;
			}
			const t = Math.min((now - startAt) / DURATION, 1);
			const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
			setVal(Math.round(eased * to));
			if (t < 1) rafRef.current = requestAnimationFrame(tick);
		};

		rafRef.current = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(rafRef.current);
	}, [to]);

	return (
		<span>
			{val}
			{suffix}
		</span>
	);
}

// ─── Hero ────────────────────────────────────────────────────────────────────
export const HeroSection = forwardRef<HTMLElement>(
	(_props, ref: ForwardedRef<HTMLElement>) => {
		const scrambled = useScramble('Frontend Developer', 600);

		// Motion values for the parallax blobs
		const mouseX = useMotionValue(0);
		const mouseY = useMotionValue(0);
		const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
		const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });

		// ── FIX 1: Cache bounding rect; only re-read on resize, not per-move ──
		const sectionRef = useRef<HTMLElement | null>(null);
		const cachedRect = useRef<{
			left: number;
			top: number;
			width: number;
			height: number;
		} | null>(null);

		useEffect(() => {
			const updateRect = () => {
				if (!sectionRef.current) return;
				const r = sectionRef.current.getBoundingClientRect();
				cachedRect.current = {
					left: r.left,
					top: r.top,
					width: r.width,
					height: r.height,
				};
			};
			updateRect();
			window.addEventListener('resize', updateRect, { passive: true });
			return () => window.removeEventListener('resize', updateRect);
		}, []);

		const rafPending = useRef(false);

		const handleMouseMove = useCallback(
			(e: React.MouseEvent) => {
				if (rafPending.current) return;
				rafPending.current = true;
				const cx = e.clientX;
				const cy = e.clientY;

				requestAnimationFrame(() => {
					const r = cachedRect.current;
					if (r) {
						mouseX.set(((cx - r.left) / r.width - 0.5) * 30);
						mouseY.set(((cy - r.top) / r.height - 0.5) * 30);
					}
					rafPending.current = false;
				});
			},
			[mouseX, mouseY]
		);

		const setRef = useCallback(
			(node: HTMLElement | null) => {
				sectionRef.current = node;
				if (typeof ref === 'function') ref(node);
				else if (ref) ref.current = node;
			},
			[ref]
		);

		const stats = [
			{ value: 5, suffix: '+', label: 'Years Exp.' },
			{ value: 40, suffix: '+', label: 'Projects' },
			{ value: 20, suffix: '+', label: 'Clients' },
		];

		return (
			<section
				ref={setRef}
				className="hero-section relative min-h-screen flex items-center pt-20 pb-16 px-4 z-10"
				onMouseMove={handleMouseMove}
			>
				<div className="hero-dot-grid" />
				<div className="hero-noise" />
				<div className="hero-beam" />
				<div className="hero-beam-2" />

				<motion.div
					className="hero-glow-blob"
					style={{
						background:
							'radial-gradient(circle, rgba(29,78,216,0.12) 0%, transparent 70%)',
						top: '-15%',
						left: '-10%',
						x: smoothX,
						y: smoothY,
						willChange: 'transform',
					}}
				/>
				<motion.div
					className="hero-glow-blob"
					style={{
						background:
							'radial-gradient(circle, rgba(99,179,237,0.07) 0%, transparent 70%)',
						bottom: '-20%',
						right: '-10%',
						x: smoothX,
						y: smoothY,
						willChange: 'transform',
					}}
				/>

				<div className="max-w-7xl mx-auto w-full relative z-10">
					<div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
						<div className="lg:w-1/2 space-y-8 text-center lg:text-left">
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									delay: 0.1,
									duration: 0.6,
									ease: [0.22, 1, 0.36, 1],
								}}
								className="inline-flex items-center gap-2"
							>
								<span
									className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
									style={{
										background: 'rgba(34,197,94,0.08)',
										border: '1px solid rgba(34,197,94,0.25)',
										color: '#4ade80',
										fontFamily: "'DM Mono', monospace",
										letterSpacing: '0.12em',
									}}
								>
									<motion.span
										className="w-2 h-2 rounded-full bg-green-400"
										animate={{
											scale: [1, 1.5, 1],
											opacity: [1, 0.5, 1],
										}}
										transition={{
											duration: 2,
											repeat: Infinity,
										}}
									/>
									OPEN TO OPPORTUNITIES
								</span>
							</motion.div>

							<div>
								<p
									style={{
										fontFamily: "'DM Mono', monospace",
										fontSize: '11px',
										letterSpacing: '0.25em',
										color: '#64748b',
										textTransform: 'uppercase',
										marginBottom: '10px',
									}}
								>
									Hi there, I'm
								</p>
								<motion.h1
									className="hero-name font-extrabold leading-none tracking-tight"
									style={{
										fontSize: 'clamp(2.6rem, 6vw, 4.5rem)',
										letterSpacing: '-0.03em',
									}}
									initial={{ opacity: 0, y: 12 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										delay: 0,
										duration: 0.5,
										ease: [0.22, 1, 0.36, 1],
									}}
								>
									Olowosuyi
									<br />
									Temitope
								</motion.h1>
							</div>

							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.25, duration: 0.5 }}
								className="flex items-center gap-3 justify-center lg:justify-start"
							>
								<div
									style={{
										width: 36,
										height: 2,
										background:
											'linear-gradient(90deg, #3b82f6, transparent)',
										borderRadius: 2,
										flexShrink: 0,
									}}
								/>
								<span
									className="scramble-text text-lg md:text-xl"
									style={{
										color: '#63b3ed',
										letterSpacing: '0.08em',
									}}
								>
									{scrambled || '\u00A0'}
								</span>
							</motion.div>
							<p
								className="text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 hero-desc-fade"
								style={{ color: '#94a3b8', fontWeight: 400 }}
							>
								I design and engineer{' '}
								<span
									style={{
										color: '#cbd5e1',
										fontWeight: 600,
									}}
								>
									production-grade web and mobile systems
								</span>{' '}
								using{' '}
								<span
									style={{
										color: '#cbd5e1',
										fontWeight: 600,
									}}
								>
									React, Next.js, React Native, and TypeScript
								</span>
								, with a focus on performance and scalability.
							</p>

							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5, duration: 0.5 }}
								className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
							>
								<a href={cv} download>
									<motion.button
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.97 }}
										className="hero-btn-outline w-full sm:w-auto"
									>
										<Download className="w-4 h-4" />
										Download CV
									</motion.button>
								</a>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 16 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.7, duration: 0.6 }}
								className="grid grid-cols-3 gap-3 max-w-sm mx-auto lg:mx-0"
							>
								{stats.map((s) => (
									<div key={s.label} className="stat-card">
										<p
											className="font-extrabold text-2xl text-white mb-0.5"
											style={{
												fontVariantNumeric:
													'tabular-nums',
											}}
										>
											<Counter
												to={s.value}
												suffix={s.suffix}
											/>
										</p>
										<p
											className="text-xs uppercase tracking-widest"
											style={{
												color: '#64748b',
												fontFamily:
													"'DM Mono', monospace",
											}}
										>
											{s.label}
										</p>
									</div>
								))}
							</motion.div>
						</div>
						<motion.div
							initial={{ opacity: 0, scale: 0.88 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								delay: 0.3,
								duration: 1,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="relative lg:w-1/2 hidden md:flex items-center justify-center"
							style={{ minHeight: 480 }}
						>
							<motion.div
								className="absolute rounded-full"
								style={{
									width: 440,
									height: 440,
									border: '1px dashed rgba(99,179,237,0.12)',
									willChange: 'transform',
								}}
								animate={{ rotate: 360 }}
								transition={{
									duration: 60,
									repeat: Infinity,
									ease: 'linear',
								}}
							/>
							<motion.div
								className="absolute rounded-full"
								style={{
									width: 340,
									height: 340,
									border: '1px solid rgba(99,179,237,0.08)',
									willChange: 'transform',
								}}
								animate={{ rotate: -360 }}
								transition={{
									duration: 45,
									repeat: Infinity,
									ease: 'linear',
								}}
							/>

							<Suspense fallback={null}>
								{orbitTagData.map((tag) => (
									<OrbitTag key={tag.label} {...tag} />
								))}
							</Suspense>

							<motion.div
								style={{
									width: 220,
									height: 220,
									borderRadius: '50%',
									background:
										'linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 50%, #0f172a 100%)',
									animation:
										'avatar-pulse 4s ease-in-out infinite',
									border: '1px solid rgba(99,179,237,0.2)',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									flexDirection: 'column',
									position: 'relative',
									zIndex: 2,
									willChange: 'transform',
								}}
								whileHover={{ scale: 1.04 }}
								transition={{ duration: 0.4 }}
							>
								<div
									style={{
										position: 'absolute',
										inset: '20%',
										borderRadius: '50%',
										background:
											'radial-gradient(circle, rgba(99,179,237,0.15) 0%, transparent 70%)',
									}}
								/>
								<motion.div
									animate={{ rotate: [0, 10, -10, 0] }}
									transition={{
										duration: 8,
										repeat: Infinity,
										ease: 'easeInOut',
									}}
									style={{ willChange: 'transform' }}
								>
									<Code2
										style={{
											width: 72,
											height: 72,
											color: 'rgba(99,179,237,0.9)',
										}}
									/>
								</motion.div>
								<span
									style={{
										fontFamily: "'DM Mono', monospace",
										fontSize: '10px',
										letterSpacing: '0.2em',
										color: 'rgba(99,179,237,0.6)',
										textTransform: 'uppercase',
										marginTop: 8,
									}}
								>
									Frontend Engineer
								</span>
							</motion.div>

							<motion.div
								className="absolute"
								style={{ bottom: 90, right: -15, zIndex: 4 }}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 1.7, duration: 0.5 }}
							>
								<div
									className="code-card flex items-center gap-2"
									style={{ padding: '10px 14px' }}
								>
									<Layers
										style={{
											width: 14,
											height: 14,
											color: '#a78bfa',
										}}
									/>
									<span
										style={{
											color: '#a78bfa',
											fontSize: 12,
										}}
									>
										5+ Years
									</span>
									<span
										style={{
											color: '#334155',
											fontSize: 12,
										}}
									>
										experience
									</span>
								</div>
							</motion.div>
						</motion.div>
					</div>

					{/* Scroll indicator */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.8 }}
						className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
					>
						<span
							style={{
								fontFamily: "'DM Mono', monospace",
								fontSize: '9px',
								letterSpacing: '0.2em',
								color: '#334155',
								textTransform: 'uppercase',
							}}
						>
							scroll
						</span>
						<div
							style={{
								width: 22,
								height: 36,
								border: '1px solid rgba(99,179,237,0.2)',
								borderRadius: 12,
								display: 'flex',
								justifyContent: 'center',
								paddingTop: 6,
							}}
						>
							<div
								className="scroll-dot"
								style={{
									width: 4,
									height: 8,
									borderRadius: 2,
									background: 'rgba(99,179,237,0.5)',
								}}
							/>
						</div>
					</motion.div>
				</div>
			</section>
		);
	}
);

HeroSection.displayName = 'HeroSection';