import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { profile } from '@/data';
import { ease } from '@/components/reveal';

const headline =
	'Frontend engineer building fast, *dependable* interfaces for products people rely on.'.split(
		' '
	);

function LocalTime() {
	const format = () =>
		new Intl.DateTimeFormat('en-GB', {
			hour: '2-digit',
			minute: '2-digit',
			timeZone: profile.timeZone,
		}).format(new Date());
	const [time, setTime] = useState(format);

	useEffect(() => {
		const id = window.setInterval(() => setTime(format()), 30_000);
		return () => window.clearInterval(id);
	}, []);

	return <span className="tabular-nums">{time}</span>;
}

const facts: [string, React.ReactNode][] = [
	['Currently', 'Frontend Developer at Cross Africa'],
	['Previously', 'Lead Frontend Developer at Flexwork'],
	['Core stack', 'React · Next.js · TypeScript'],
	[
		'Based in',
		<>
			Lagos · <LocalTime /> WAT
		</>,
	],
];

function Portrait() {
	return (
		<motion.figure
			initial={{ opacity: 0, clipPath: 'inset(12% 0% 0% 0% round 20px)' }}
			animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 20px)' }}
			transition={{ duration: 1.2, delay: 0.35, ease }}
			className="group relative overflow-hidden rounded-[20px] border border-line-strong bg-panel shadow-[var(--shadow)]"
		>
			<div className="overflow-hidden">
				<motion.img
					src={profile.photo}
					alt={`Portrait of ${profile.name} at a desk in a bright office`}
					width={960}
					height={960}
					fetchPriority="high"
					initial={{ scale: 1.12 }}
					animate={{ scale: 1 }}
					transition={{ duration: 1.6, delay: 0.35, ease }}
					className="aspect-[4/3] w-full object-cover object-[55%_22%] sm:aspect-[4/5]"
				/>
			</div>
			{/* Bottom fade so the caption stays legible over the bright desk. */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 via-black/25 to-transparent"
			/>
			<figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white">
				<span>
					<span className="block text-[15px] font-medium tracking-[-0.01em]">
						{profile.name}
					</span>
					<span className="block font-mono text-[11px] text-white/75">
						{profile.role} · Lagos
					</span>
				</span>
				<span className="inline-flex flex-none items-center gap-1.5 whitespace-nowrap rounded-full bg-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] backdrop-blur-md">
					<span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
					Open to work
				</span>
			</figcaption>
		</motion.figure>
	);
}

export function HeroSection() {
	return (
		<section
			id="top"
			className="relative isolate overflow-hidden pb-16 pt-28 md:pb-24 md:pt-40"
		>
			{/* Soft, low-contrast backdrop: a faint grid that fades out from the top. */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 -z-10 opacity-60"
				style={{
					backgroundImage:
						'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
					backgroundSize: '72px 72px',
					maskImage:
						'radial-gradient(ellipse 70% 60% at 50% 0%, #000 30%, transparent 75%)',
					WebkitMaskImage:
						'radial-gradient(ellipse 70% 60% at 50% 0%, #000 30%, transparent 75%)',
				}}
			/>

			<div className="container-site">
				<div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
					<div className="lg:col-span-8">
						<motion.a
							href="#contact"
							initial={{ opacity: 0, y: 8 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease }}
							className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-line-strong py-1.5 pl-3 pr-4 text-[13px] text-fg-muted transition-colors hover:border-fg hover:text-fg"
						>
							<span className="relative flex h-2 w-2">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60 motion-reduce:hidden" />
								<span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
							</span>
							Available for new projects &amp; roles
						</motion.a>

						<h1 className="text-[clamp(2.5rem,5.6vw,5.25rem)] font-medium leading-[0.98] tracking-[-0.045em]">
							<span className="sr-only">
								{headline.join(' ').replace(/\*/g, '')}
							</span>
							<span aria-hidden="true">
								{headline.map((word, i) => {
									const italic = word.startsWith('*');
									return (
										<span
											key={i}
											className="inline-block overflow-hidden pb-[0.08em] align-bottom"
										>
											<motion.span
												className={`inline-block ${
													italic
														? 'font-serif font-normal italic tracking-[-0.02em] text-brand'
														: ''
												}`}
												initial={{ y: '105%' }}
												animate={{ y: 0 }}
												transition={{
													duration: 0.9,
													delay: 0.1 + i * 0.045,
													ease,
												}}
											>
												{word.replace(/\*/g, '')}
											</motion.span>
											{' '}
										</span>
									);
								})}
							</span>
						</h1>

						<motion.p
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.65, ease }}
							className="mt-10 max-w-xl text-pretty text-lg leading-relaxed text-fg-muted md:text-xl"
						>
							I&apos;m Temitope — a frontend engineer with 3+
							years shipping React, Next.js and TypeScript
							products for logistics, fintech and SaaS teams. I
							care about the details users feel: speed, clarity
							and interfaces that hold up under real data.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.75, ease }}
							className="mt-10 flex flex-wrap gap-3"
						>
							<a href="#work" className="btn-primary group">
								See selected work
								<ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
							</a>
							<a href="#contact" className="btn-secondary group">
								Start a conversation
								<ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
							</a>
						</motion.div>
					</div>

					<div className="mx-auto w-full max-w-md lg:col-span-4 lg:max-w-none">
						<Portrait />
					</div>
				</div>

				<motion.dl
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.9 }}
					className="mt-20 grid grid-cols-2 border-t border-line md:mt-24 md:grid-cols-4"
				>
					{facts.map(([label, value], i) => (
						<div
							key={label}
							className={`border-line py-5 pr-4 ${i % 2 === 1 ? 'pl-4 md:pl-0' : ''} ${
								i < 2 ? 'border-b md:border-b-0' : ''
							} ${i % 2 === 0 ? 'border-r md:border-r-0' : ''}`}
						>
							<dt className="eyebrow mb-2">{label}</dt>
							<dd className="text-[15px] leading-snug">
								{value}
							</dd>
						</div>
					))}
				</motion.dl>
			</div>
		</section>
	);
}
