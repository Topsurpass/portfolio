import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Github, Globe, Check } from 'lucide-react';
import { projects } from '@/data';
import { useProjectSnapshot } from '@/hooks/useProjectSnapshot';
import { SectionHeading } from '@/components/section-heading';

const ease = [0.22, 1, 0.36, 1] as const;

const TECH_COLORS: Record<string, string> = {
	'Next.js': '#FFFFFF',
	TypeScript: '#3178C6',
	Tailwind: '#38BDF8',
	React: '#61DAFB',
	Python: '#F6AD55',
	Django: '#44B78B',
	Docker: '#2496ED',
	'Node.js': '#68D391',
};

function TechTag({ name }: { name: string }) {
	const color = TECH_COLORS[name] ?? '#94a3b8';
	return (
		<span
			className="inline-flex items-center px-2.5 py-1 rounded-md ed-mono whitespace-nowrap"
			style={{
				fontSize: '10px',
				letterSpacing: '0.06em',
				color: color + 'dd',
				background: color + '12',
				border: `1px solid ${color}25`,
			}}
		>
			{name}
		</span>
	);
}

function CaseStudy({
	project,
	index,
	inView,
}: {
	project: (typeof projects)[number];
	index: number;
	inView: boolean;
}) {
	const reversed = index % 2 === 1;
	const {
		src: screenshotSrc,
		loading,
		error,
	} = useProjectSnapshot(project.link);

	return (
		<motion.article
			initial={{ opacity: 0, y: 32 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ delay: index * 0.12, duration: 0.7, ease }}
			className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center"
		>
			{/* ── Preview ── */}
			<div className={reversed ? 'lg:order-2' : ''}>
				<div
					className="ed-case-frame group"
					style={{ '--accent': project.accent } as React.CSSProperties}
				>
					{loading ? (
						<div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
							<div
								className="w-8 h-8 rounded-full border-2 animate-spin"
								style={{
									borderColor: `${project.accent}30`,
									borderTopColor: project.accent,
								}}
							/>
							<span
								className="ed-mono"
								style={{
									fontSize: 9,
									letterSpacing: '0.18em',
									color: project.accent + '88',
									textTransform: 'uppercase',
								}}
							>
								Loading preview
							</span>
						</div>
					) : !error && screenshotSrc ? (
						<img
							src={screenshotSrc}
							alt={`Screenshot of ${project.title}`}
							loading="lazy"
							className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
						/>
					) : (
						project.illustration
					)}
				</div>
			</div>

			{/* ── Content ── */}
			<div className={reversed ? 'lg:order-1' : ''}>
				<div className="flex items-center gap-4 mb-5">
					<span className="ed-case-index">
						{String(project.caseStudy).padStart(2, '0')}
					</span>
					<span
						className="px-2.5 py-1 rounded-full ed-mono"
						style={{
							fontSize: 9,
							letterSpacing: '0.15em',
							color: project.accent + 'dd',
							background: project.accent + '18',
							border: `1px solid ${project.accent}35`,
							textTransform: 'uppercase',
						}}
					>
						{project.tag}
					</span>
					<span className="ed-mono" style={{ fontSize: 11, color: 'var(--ed-text-dim)' }}>
						{project.year}
					</span>
				</div>

				<h3 className="ed-case-title">{project.title}</h3>

				<p
					className="ed-mono mt-2 mb-5"
					style={{ fontSize: 12, letterSpacing: '0.05em', color: project.accent }}
				>
					{project.role}
				</p>

				<p className="ed-body mb-5 max-w-xl">{project.problem}</p>

				<ul className="space-y-2.5 mb-6">
					{project.highlights.map((h) => (
						<li key={h} className="flex items-start gap-2.5">
							<Check
								className="w-4 h-4 mt-0.5 flex-shrink-0"
								style={{ color: project.accent }}
							/>
							<span style={{ color: 'var(--ed-text)', fontSize: 14, lineHeight: 1.55 }}>
								{h}
							</span>
						</li>
					))}
				</ul>

				<div className="flex flex-wrap gap-1.5 mb-7">
					{project.tech.map((t) => (
						<TechTag key={t} name={t} />
					))}
				</div>

				<div className="flex items-center gap-5">
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 ed-mono font-semibold group/link"
						style={{ fontSize: 13, color: project.accent }}
					>
						<Globe className="w-4 h-4" />
						<span className="group-hover/link:underline underline-offset-4">
							Live demo
						</span>
						<ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
					</a>
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 ed-mono group/link"
						style={{ fontSize: 13, color: 'var(--ed-text-mid)' }}
					>
						<Github className="w-4 h-4" />
						<span className="group-hover/link:text-ed-hi group-hover/link:underline underline-offset-4">
							Source
						</span>
					</a>
				</div>
			</div>
		</motion.article>
	);
}

export function ProjectsSection() {
	const innerRef = useRef<HTMLDivElement>(null);
	const inView = useInView(innerRef, { once: true, margin: '-60px' });

	return (
		<section
			id="projects"
			className="projects-section py-28 relative z-10"
			style={{ background: 'var(--ed-surface)' }}
		>
			<div className="projects-grid-bg" />
			<div className="projects-noise" />

			<div className="ed-container z-10" ref={innerRef}>
				<SectionHeading
					index="03"
					kicker="Selected Work"
					title={
						<>
							Things I&apos;ve designed{' '}
							<span className="ed-name-accent">&amp; shipped</span>
						</>
					}
					lead="A close look at real, production builds — the problem, what I built, and how it shipped."
					inView={inView}
				/>

				<div className="mt-10 space-y-24">
					{projects.map((project, i) => (
						<CaseStudy
							key={project.title}
							project={project}
							index={i}
							inView={inView}
						/>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.4, duration: 0.6 }}
					className="flex justify-center mt-20"
				>
					<a
						href="https://github.com/Topsurpass"
						target="_blank"
						rel="noopener noreferrer"
						className="ed-btn ed-btn-ghost"
					>
						More on GitHub
						<ArrowUpRight className="w-4 h-4" />
					</a>
				</motion.div>
			</div>
		</section>
	);
}
