import { education, experience } from '@/data';
import { motion } from 'framer-motion';
import { Reveal, ease } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';

export function ExperienceSection() {
	return (
		<section
			id="experience"
			className="border-t border-line bg-panel py-24 md:py-36"
		>
			<div className="container-site">
				<SectionHeading
					label="Experience"
					meta="2022 — Now"
					title={
						<>
							Shipping production frontends{' '}
							<span className="font-serif font-normal italic">
								for real teams.
							</span>
						</>
					}
					lead="From leading a SaaS frontend to building logistics dashboards used across Africa."
				/>

				<ol>
					{experience.map((role, i) => (
						<motion.li
							key={role.company}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-80px' }}
							transition={{
								duration: 0.8,
								delay: i * 0.05,
								ease,
							}}
							className="grid gap-6 border-t border-line py-10 md:grid-cols-12 md:py-14"
						>
							<div className="md:col-span-4">
								<p className="font-mono text-xs text-fg-subtle">
									{role.period}
								</p>
								<h3 className="mt-3 text-2xl font-medium tracking-[-0.025em]">
									{role.title}
								</h3>
								<p className="mt-1 text-fg-muted">
									{role.company}
									{role.product && (
										<span className="text-fg-subtle">
											{' '}
											· {role.product}
										</span>
									)}
									<span className="text-fg-subtle">
										{' '}
										· {role.location}
									</span>
								</p>
							</div>
							<div className="md:col-span-7 md:col-start-6">
								<p className="text-pretty text-lg leading-relaxed">
									{role.summary}
								</p>
								<ul className="mt-6 space-y-3">
									{role.points.map((p) => (
										<li
											key={p}
											className="flex gap-4 text-[15px] leading-relaxed text-fg-muted"
										>
											<span
												aria-hidden="true"
												className="mt-[0.7em] h-px w-3 flex-none bg-fg-subtle"
											/>
											{p}
										</li>
									))}
								</ul>
							</div>
						</motion.li>
					))}
				</ol>

				<Reveal className="grid gap-6 border-t border-line pt-10 md:grid-cols-12">
					<p className="eyebrow md:col-span-4">Education</p>
					<ul className="grid gap-6 sm:grid-cols-2 md:col-span-7 md:col-start-6">
						{education.map((e) => (
							<li key={e.title}>
								<p className="font-medium">{e.title}</p>
								<p className="mt-1 text-sm text-fg-muted">
									{e.place}
								</p>
								<p className="mt-1 font-mono text-[11px] text-fg-subtle">
									{e.period}
								</p>
							</li>
						))}
					</ul>
				</Reveal>
			</div>
		</section>
	);
}
