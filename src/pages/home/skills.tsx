import { motion, useInView } from 'framer-motion';
import {
	forwardRef,
	type ForwardedRef,
	useRef,
	useEffect,
	useState,
	useMemo,
	useCallback,
} from 'react';
import { skills } from '@/data';

const CATEGORY_COLORS: Record<string, string> = {
	Frontend: '#63B3ED',
	Styling: '#38BDF8',
	Backend: '#68D391',
	DevOps: '#C084FC',
};

// ─── AnimatedBar ──────────────────────────────────────────────────────────────
// Unchanged — CSS transition is already composited; no React hot path here.
function AnimatedBar({
	value,
	color,
	inView,
}: {
	value: number;
	color: string;
	inView: boolean;
}) {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		if (!inView) return;
		const t = setTimeout(() => setWidth(value), 200);
		return () => clearTimeout(t);
	}, [inView, value]);

	return (
		<div
			className="relative h-1 w-full rounded-full overflow-hidden"
			style={{ background: 'rgba(255,255,255,0.06)' }}
		>
			<div
				className="absolute inset-y-0 left-0 rounded-full"
				style={{
					width: `${width}%`,
					transition: 'width 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
					background: `linear-gradient(90deg, ${color}99, ${color})`,
					boxShadow: `0 0 8px ${color}60`,
				}}
			/>
		</div>
	);
}

// ─── SkillCard ────────────────────────────────────────────────────────────────
function SkillCard({
	skill,
	index,
	inView,
}: {
	skill: (typeof skills)[number];
	index: number;
	inView: boolean;
}) {
	const cardRef = useRef<HTMLDivElement>(null);
	const cachedRect = useRef<DOMRect | null>(null);

	useEffect(() => {
		const el = cardRef.current;
		if (!el) return;
		const update = () => {
			cachedRect.current = el.getBoundingClientRect();
		};
		update();
		window.addEventListener('resize', update, { passive: true });
		return () => window.removeEventListener('resize', update);
	}, []);

	const rafPending = useRef(false);

	const handleMouseMove = useCallback((e: React.MouseEvent) => {
		if (rafPending.current) return;
		rafPending.current = true;
		const cx = e.clientX;
		const cy = e.clientY;

		requestAnimationFrame(() => {
			const r = cachedRect.current;
			if (r && cardRef.current) {
				const x = ((cx - r.left) / r.width) * 100;
				const y = ((cy - r.top) / r.height) * 100;
				cardRef.current.style.setProperty('--spot-x', `${x}%`);
				cardRef.current.style.setProperty('--spot-y', `${y}%`);
			}
			rafPending.current = false;
		});
	}, []);

	return (
		<motion.div
			ref={cardRef}
			initial={{ opacity: 0, y: 28 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{
				delay: index * 0.08,
				duration: 0.7,
				ease: [0.22, 1, 0.36, 1],
			}}
			className="skill-card relative group cursor-default"
			onMouseMove={handleMouseMove}
		>
			<div className="skill-card-inner relative h-full rounded-2xl p-5 overflow-hidden">
				<div
					className="skill-card-spotlight absolute inset-0 pointer-events-none"
					style={
						{ '--skill-color': skill.color } as React.CSSProperties
					}
				/>

				<div
					className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
					style={{
						background: `radial-gradient(circle at 100% 0%, ${skill.color}20, transparent 70%)`,
					}}
				/>

				{/* Top row */}
				<div className="flex items-start justify-between mb-4">
					<div
						className="skill-card-icon flex items-center justify-center w-12 h-12 rounded-xl transition-transform duration-300"
						style={{
							background: `${skill.color}12`,
							border: `1px solid ${skill.color}25`,
						}}
					>
						{skill.svg}
					</div>
					<span
						className="text-xs px-2.5 py-1 rounded-full"
						style={{
							fontFamily: "'DM Mono', monospace",
							fontSize: '9px',
							letterSpacing: '0.12em',
							color: CATEGORY_COLORS[skill.category] + 'cc',
							background: CATEGORY_COLORS[skill.category] + '12',
							border: `1px solid ${CATEGORY_COLORS[skill.category]}25`,
						}}
					>
						{skill.category.toUpperCase()}
					</span>
				</div>

				{/* Name + years */}
				<div className="mb-1 flex items-baseline justify-between gap-2">
					<h3
						className="font-bold text-white"
						style={{
							fontFamily: "'Syne', sans-serif",
							fontSize: '1.05rem',
							letterSpacing: '-0.01em',
						}}
					>
						{skill.name}
					</h3>
					<span
						style={{
							fontFamily: "'DM Mono', monospace",
							fontSize: '10px',
							color: skill.color + '99',
							letterSpacing: '0.05em',
							whiteSpace: 'nowrap',
						}}
					>
						{skill.years}y exp
					</span>
				</div>

				{/* Description */}
				<p
					className="mb-4 leading-relaxed"
					style={{
						fontFamily: "'DM Mono', monospace",
						fontSize: '11px',
						color: '#475569',
						lineHeight: 1.6,
					}}
				>
					{skill.description}
				</p>

				{/* Bar + percent */}
				<div>
					<div className="flex items-center justify-between mb-1.5">
						<span
							style={{
								fontFamily: "'DM Mono', monospace",
								fontSize: '10px',
								color: '#475569',
								letterSpacing: '0.1em',
							}}
						>
							PROFICIENCY
						</span>
						<span
							style={{
								fontFamily: "'DM Mono', monospace",
								fontSize: '11px',
								color: skill.color,
								fontWeight: 500,
							}}
						>
							{skill.proficiency}%
						</span>
					</div>
					<AnimatedBar
						value={skill.proficiency}
						color={skill.color}
						inView={inView}
					/>
				</div>
			</div>
		</motion.div>
	);
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export const SkillsSection = forwardRef(
	(_props, ref: ForwardedRef<HTMLElement>) => {
		const innerRef = useRef<HTMLDivElement>(null);
		const inView = useInView(innerRef, { once: true, margin: '-80px' });

		// ── FIX 4: Memoize derived data — these were recomputed on every render ──
		const categories = useMemo(
			() => [...new Set(skills.map((s) => s.category))],
			[]
		);

		// ── FIX 5: Memoize doubled ticker array (avoids array alloc on every render) ──
		const tickerSkills = useMemo(() => [...skills, ...skills], []);

		// ── FIX 6: Memoize summary stats array ────────────────────────────────
		const summaryStats = useMemo(
			() => [
				{
					label: 'Technologies',
					value: skills.length + '+',
					color: '#63b3ed',
				},
				{
					label: 'Avg Proficiency',
					value:
						Math.round(
							skills.reduce((a, s) => a + s.proficiency, 0) /
								skills.length
						) + '%',
					color: '#68d391',
				},
				{ label: 'Years Coding', value: '5+', color: '#f6ad55' },
				{
					label: 'Specialization',
					value: 'Frontend',
					color: '#c084fc',
				},
			],
			[]
		);

		return (
			<section ref={ref} className="skills-section py-28 relative z-10">
				{/* BG layers */}
				<div className="skills-grid-bg" />
				<div className="skills-noise" />

				{/* Top glow */}
				<div
					className="absolute pointer-events-none"
					style={{
						top: '-120px',
						left: '50%',
						transform: 'translateX(-50%)',
						width: '600px',
						height: '350px',
						background:
							'radial-gradient(ellipse, rgba(29,78,216,0.1) 0%, transparent 70%)',
					}}
				/>

				<div
					className="max-w-6xl mx-auto px-6 relative z-10"
					ref={innerRef}
				>
					{/* ── Header ── */}
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
						className="text-center mb-16"
					>
						<div className="inline-flex items-center gap-2 mb-5">
							<div
								className="h-px w-10"
								style={{
									background:
										'linear-gradient(90deg, transparent, #63b3ed)',
								}}
							/>
							<span
								style={{
									fontFamily: "'DM Mono', monospace",
									fontSize: '10px',
									letterSpacing: '0.25em',
									color: '#63b3ed',
									textTransform: 'uppercase',
								}}
							>
								Technical Arsenal
							</span>
							<div
								className="h-px w-10"
								style={{
									background:
										'linear-gradient(90deg, #63b3ed, transparent)',
								}}
							/>
						</div>

						<h2
							className="font-extrabold text-white mb-4"
							style={{
								fontSize: 'clamp(2rem, 5vw, 3.5rem)',
								letterSpacing: '-0.03em',
								lineHeight: 1.1,
							}}
						>
							Skills &{' '}
							<span
								style={{
									background:
										'linear-gradient(135deg, #63b3ed, #3b82f6)',
									WebkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent',
									backgroundClip: 'text',
								}}
							>
								Expertise
							</span>
						</h2>

						<p
							className="max-w-lg mx-auto"
							style={{
								fontFamily: "'DM Mono', monospace",
								fontSize: '13px',
								color: '#475569',
								lineHeight: 1.7,
							}}
						>
							Tools and technologies I use to craft exceptional
							digital experiences — refined through years of
							real-world projects.
						</p>

						{/* Category pills */}
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.2, duration: 0.6 }}
							className="flex flex-wrap justify-center gap-2 mt-8"
						>
							{categories.map((cat) => (
								<span
									key={cat}
									className="cat-pill"
									style={{
										color: CATEGORY_COLORS[cat] + 'cc',
										background: CATEGORY_COLORS[cat] + '10',
										border: `1px solid ${CATEGORY_COLORS[cat]}25`,
									}}
								>
									{cat}
								</span>
							))}
						</motion.div>
					</motion.div>

					{/* Divider */}
					<motion.div
						initial={{ scaleX: 0 }}
						animate={inView ? { scaleX: 1 } : {}}
						transition={{ duration: 0.8, delay: 0.15 }}
						className="divider-line mb-12"
					/>

					{/* ── Skill Cards Grid ── */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
						{skills.map((skill, i) => (
							<SkillCard
								key={skill.name}
								skill={skill}
								index={i}
								inView={inView}
							/>
						))}
					</div>

					{/* ── Scrolling ticker ── */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={inView ? { opacity: 1 } : {}}
						transition={{ delay: 0.8, duration: 0.8 }}
						className="mt-16"
					>
						<div className="divider-line mb-8" />
						<div className="skills-ticker">
							{/* ── FIX 7: animation driven by CSS, not JS.
							    `will-change: transform` keeps it on the compositor thread. ── */}
							<div
								className="ticker-inner"
								style={{ willChange: 'transform' }}
							>
								{tickerSkills.map((s, i) => (
									<span
										key={i}
										className="flex items-center gap-2 whitespace-nowrap"
										style={{
											fontFamily: "'DM Mono', monospace",
											fontSize: '11px',
											color: '#1e293b',
											letterSpacing: '0.08em',
										}}
									>
										<span
											style={{
												color: s.color,
												fontSize: '16px',
												lineHeight: 1,
											}}
										>
											◆
										</span>
										{s.name.toUpperCase()}
									</span>
								))}
							</div>
						</div>
					</motion.div>

					{/* ── Summary bar ── */}
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.6, duration: 0.7 }}
						className="mt-10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6"
						style={{
							background: 'rgba(255,255,255,0.02)',
							border: '1px solid rgba(255,255,255,0.06)',
							backdropFilter: 'blur(10px)',
						}}
					>
						{summaryStats.map(({ label, value, color }) => (
							<div key={label} className="text-center flex-1">
								<p
									className="font-extrabold"
									style={{
										fontFamily: "'Syne', sans-serif",
										fontSize: '1.8rem',
										color,
										letterSpacing: '-0.02em',
										lineHeight: 1,
									}}
								>
									{value}
								</p>
								<p
									style={{
										fontFamily: "'DM Mono', monospace",
										fontSize: '10px',
										color: '#334155',
										letterSpacing: '0.15em',
										marginTop: 4,
									}}
								>
									{label.toUpperCase()}
								</p>
							</div>
						))}
					</motion.div>
				</div>
			</section>
		);
	}
);

SkillsSection.displayName = 'SkillsSection';