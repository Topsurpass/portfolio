import { motion, useInView } from 'framer-motion';
import { useMemo, useRef } from 'react';
import { skills } from '@/data';
import { SectionHeading } from '@/components/section-heading';

const ease = [0.22, 1, 0.36, 1] as const;

// Preferred display order for the capability groups.
const CATEGORY_ORDER = ['Frontend', 'Styling', 'Backend', 'DevOps'];

function SkillChip({
	skill,
	index,
	inView,
}: {
	skill: (typeof skills)[number];
	index: number;
	inView: boolean;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ delay: index * 0.04, duration: 0.5, ease }}
			className="ed-skill"
			style={
				skill.featured
					? { borderColor: skill.color + '40' }
					: undefined
			}
		>
			<span
				className="ed-skill-icon"
				style={{ color: skill.color }}
				aria-hidden="true"
			>
				{skill.svg}
			</span>
			<span className="min-w-0">
				<span
					className="block font-bold truncate"
					style={{
						fontFamily: "'Syne', sans-serif",
						fontSize: '0.95rem',
						color: 'var(--ed-text-hi)',
						letterSpacing: '-0.01em',
					}}
				>
					{skill.name}
				</span>
				<span
					className="ed-mono block"
					style={{
						fontSize: 10,
						color: 'var(--ed-text-dim)',
						letterSpacing: '0.05em',
					}}
				>
					{skill.years}y experience
				</span>
			</span>
		</motion.div>
	);
}

export function SkillsSection() {
	const innerRef = useRef<HTMLDivElement>(null);
	const inView = useInView(innerRef, { once: true, margin: '-80px' });

	// Group skills by category, preserving the preferred order.
	const groups = useMemo(() => {
		type Skill = (typeof skills)[number];
		const byCat = new Map<string, Skill[]>();
		skills.forEach((s) => {
			const list = byCat.get(s.category) ?? [];
			list.push(s);
			byCat.set(s.category, list);
		});
		const ordered = [...byCat.keys()].sort(
			(a, b) => CATEGORY_ORDER.indexOf(a) - CATEGORY_ORDER.indexOf(b)
		);
		return ordered.map((cat) => ({ cat, items: byCat.get(cat)! }));
	}, []);

	return (
		<section
			id="skills"
			className="skills-section py-28 relative z-10"
			style={{ background: 'var(--ed-surface)' }}
		>
			<div className="skills-grid-bg" />
			<div className="skills-noise" />

			<div className="ed-container z-10" ref={innerRef}>
				<SectionHeading
					index="02"
					kicker="Capabilities"
					title={
						<>
							The tooling behind{' '}
							<span className="ed-name-accent">the work</span>
						</>
					}
					lead="A focused, production-tested stack — refined across years of shipping real web and mobile products."
					inView={inView}
				/>

				<div className="mt-6">
					{groups.map(({ cat, items }, gi) => (
						<motion.div
							key={cat}
							initial={{ opacity: 0 }}
							animate={inView ? { opacity: 1 } : {}}
							transition={{ delay: gi * 0.1, duration: 0.5 }}
							className="grid lg:grid-cols-[200px_1fr] gap-5 lg:gap-8 py-8"
							style={{ borderTop: '1px solid var(--ed-line)' }}
						>
							<div className="flex lg:flex-col items-baseline lg:items-start justify-between gap-2">
								<span className="ed-kicker">{cat}</span>
								<span
									className="ed-mono"
									style={{ fontSize: 11, color: 'var(--ed-text-dim)' }}
								>
									{String(items.length).padStart(2, '0')} tools
								</span>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
								{items.map((skill, i) => (
									<SkillChip
										key={skill.name}
										skill={skill}
										index={i}
										inView={inView}
									/>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
