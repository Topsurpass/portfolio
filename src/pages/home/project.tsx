import { motion, useInView } from 'framer-motion';
import { forwardRef, type ForwardedRef, useRef, useState } from 'react';
import { ArrowUpRight, Github, Globe, ExternalLink } from 'lucide-react';
import { projects } from '@/data';
import { useProjectSnapshot } from '@/hooks/useProjectSnapshot';

// ─── Tech Tag ─────────────────────────────────────────────────────────────────
const TECH_COLORS: Record<string, string> = {
    'Next.js': '#FFFFFF',
    TypeScript: '#3178C6',
    Tailwind: '#38BDF8',
    Stripe: '#635BFF',
    React: '#61DAFB',
    Python: '#F6AD55',
    TensorFlow: '#FF8C00',
    AWS: '#F97316',
    'Node.js': '#68D391',
    WebSockets: '#F6AD55',
    Redis: '#FC8181',
    GraphQL: '#E535AB',
    Kafka: '#C084FC',
    Kubernetes: '#3B82F6',
};

function TechTag({ name }: { name: string }) {
    const color = TECH_COLORS[name] ?? '#94a3b8';
    return (
        <span
            className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap"
            style={{
                fontFamily: "'DM Mono', monospace",
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

function ProjectCard({
    project,
    index,
    inView,
}: {
    project: (typeof projects)[number];
    index: number;
    inView: boolean;
}) {
    const [hovered, setHovered] = useState(false);
    const [spotPos, setSpotPos] = useState({ x: 50, y: 50 });
    const cardRef = useRef<HTMLDivElement>(null);

    const { src: screenshotSrc, loading: screenshotLoading, error: screenshotError } =
        useProjectSnapshot(project.link);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const r = cardRef.current.getBoundingClientRect();
        setSpotPos({
            x: ((e.clientX - r.left) / r.width) * 100,
            y: ((e.clientY - r.top) / r.height) * 100,
        });
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
                delay: index * 0.1,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={handleMouseMove}
            className="group relative flex flex-col"
            style={{ cursor: 'default' }}
        >
            <div
                className="relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                    background: hovered
                        ? `radial-gradient(circle at ${spotPos.x}% ${spotPos.y}%, ${project.accent}0d 0%, rgba(255,255,255,0.02) 60%)`
                        : 'rgba(255,255,255,0.025)',
                    border: `1px solid ${hovered ? project.accent + '35' : 'rgba(255,255,255,0.07)'}`,
                    backdropFilter: 'blur(10px)',
                    transform: hovered ? 'translateY(-5px)' : 'none',
                }}
            >
                {/* ── Illustration / Preview ── */}
                <div
                    className="relative overflow-hidden"
                    style={{
                        background: `linear-gradient(145deg, ${project.accent}08, #060d18)`,
                        borderBottom: `1px solid ${hovered ? project.accent + '25' : 'rgba(255,255,255,0.05)'}`,
                        aspectRatio: '16/9',
                    }}
                >
                    {/* Screenshot / skeleton / fallback */}
                    {screenshotLoading ? (
                        // ── Skeleton shimmer ──
                        <div
                            className="w-full h-full flex flex-col items-center justify-center gap-3"
                            style={{
                                background: `linear-gradient(145deg, ${project.accent}08, #060d18)`,
                            }}
                        >
                            <div
                                className="w-8 h-8 rounded-full border-2 animate-spin"
                                style={{
                                    borderColor: `${project.accent}30`,
                                    borderTopColor: project.accent,
                                }}
                            />
                            <span
                                style={{
                                    fontFamily: "'DM Mono', monospace",
                                    fontSize: '9px',
                                    letterSpacing: '0.18em',
                                    color: project.accent + '55',
                                    textTransform: 'uppercase',
                                }}
                            >
                                Loading Preview
                            </span>
                        </div>
                    ) : !screenshotError && screenshotSrc ? (
                        <img
                            src={screenshotSrc}
                            alt={`${project.title} preview`}
                            className="w-full h-full object-cover object-top transition-transform duration-700"
                            style={{
                                transform: hovered ? 'scale(1.05)' : 'scale(1)',
                            }}
                        />
                    ) : (
                        project.illustration
                    )}


                    {/* Tag badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span
                            className="px-2.5 py-1 rounded-full text-xs font-semibold"
                            style={{
                                fontFamily: "'DM Mono', monospace",
                                fontSize: '9px',
                                letterSpacing: '0.15em',
                                color: project.accent + 'cc',
                                background: project.accent + '22',
                                border: `1px solid ${project.accent}40`,
                                backdropFilter: 'blur(8px)',
                            }}
                        >
                            {project.tag.toUpperCase()}
                        </span>
                    </div>

                  
                </div>

                {/* ── Content ── */}
                <div className="flex flex-col flex-1 p-5">
                    {/* Title */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                        <h3
                            className="font-bold text-white leading-tight"
                            style={{
                                fontFamily: "'Syne', sans-serif",
                                fontSize: '1.05rem',
                                letterSpacing: '-0.01em',
                            }}
                        >
                            {project.title}
                        </h3>
                    </div>

                    {/* Description */}
                    <p
                        className="mb-4 leading-relaxed flex-1"
                        style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: '11.5px',
                            color: '#475569',
                            lineHeight: 1.65,
                        }}
                    >
                        {project.description}
                    </p>


                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tech.map((t) => (
                            <TechTag key={t} name={t} />
                        ))}
                    </div>

                    {/* Bottom links */}
                    <div
                        className="flex items-center justify-between pt-4"
                        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
                    >
                        <a
                            href={project.link}
                            className="flex items-center gap-1.5 transition-all group/link"
                            style={{
                                color: project.accent + '99',
                                fontSize: '12px',
                                fontFamily: "'DM Mono', monospace",
                            }}
                        >
                            <Globe className="w-3.5 h-3.5" />
                            <span
                                className="group-hover/link:underline underline-offset-2"
                                style={{ color: project.accent }}
                            >
                                Live Demo
                            </span>
                            <ExternalLink className="w-3 h-3 opacity-50" />
						</a>
						<a
                        
                            href={project.github}
                            className="flex items-center gap-1.5 transition-all group/link"
                            style={{
                                fontSize: '12px',
                                fontFamily: "'DM Mono', monospace",
                                color: '#475569',
                            }}
                        >
                            <Github className="w-3.5 h-3.5" />
                            <span className="group-hover/link:text-white group-hover/link:underline underline-offset-2">
                                Source
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// ─── Projects Section ──────────────────────────────────────────────────────────
export const ProjectsSection = forwardRef(
    (_props, ref: ForwardedRef<HTMLElement>) => {
        const innerRef = useRef<HTMLDivElement>(null);
        const inView = useInView(innerRef, { once: true, margin: '-60px' });

        return (
            <section ref={ref} className="projects-section py-28 relative z-10">
                <div className="projects-grid-bg" />
                <div className="projects-noise" />

                {/* Top glow */}
                <div
                    className="absolute pointer-events-none"
                    style={{
                        top: '-100px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '700px',
                        height: '350px',
                        background:
                            'radial-gradient(ellipse, rgba(192,132,252,0.06) 0%, transparent 70%)',
                    }}
                />

                <div className="max-w-6xl mx-auto px-6 relative z-10" ref={innerRef}>
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
                                    background: 'linear-gradient(90deg, transparent, #c084fc)',
                                }}
                            />
                            <span
                                style={{
                                    fontFamily: "'DM Mono', monospace",
                                    fontSize: '10px',
                                    letterSpacing: '0.25em',
                                    color: '#c084fc',
                                    textTransform: 'uppercase',
                                }}
                            >
                                Selected Work
                            </span>
                            <div
                                className="h-px w-10"
                                style={{
                                    background: 'linear-gradient(90deg, #c084fc, transparent)',
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
                            Projects &{' '}
                            <span
                                style={{
                                    background: 'linear-gradient(135deg, #c084fc, #818cf8)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                Case Studies
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
                            A curated selection of real-world builds — spanning
                            commerce, data, collaboration, and infrastructure.
                        </p>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="divider-line mb-12"
                    />

                    {/* ── Grid ── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {projects.map((project, i) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                index={i}
                                inView={inView}
                            />
                        ))}
                    </div>

                    {/* ── View All CTA ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="flex justify-center mt-14"
                    >
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all"
                            style={{
                                fontFamily: "'Syne', sans-serif",
                                background: 'rgba(192,132,252,0.08)',
                                border: '1px solid rgba(192,132,252,0.25)',
                                color: '#c084fc',
                                letterSpacing: '0.02em',
                            }}
                        >
                            View all projects
                            <ArrowUpRight className="w-4 h-4" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        );
    }
);

ProjectsSection.displayName = 'ProjectsSection';