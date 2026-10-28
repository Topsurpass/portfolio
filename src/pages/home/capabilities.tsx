import { capabilities } from '@/data';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';

export function CapabilitiesSection() {
	return (
		<section id="capabilities" className="py-24 md:py-36">
			<div className="container-site">
				<SectionHeading
					label="Capabilities"
					title={
						<>
							What I bring{' '}
							<span className="font-serif font-normal italic">
								to a team.
							</span>
						</>
					}
					lead="A focused, production-tested toolkit — and the judgement to know when each piece earns its place."
				/>

				<div className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
					{capabilities.map((c, i) => (
						<Reveal
							key={c.title}
							delay={i * 0.06}
							className="flex flex-col border-b border-r border-line p-6 transition-colors duration-500 hover:bg-panel md:p-8"
						>
							<span className="font-mono text-xs text-fg-subtle">
								0{i + 1}
							</span>
							<h3 className="mt-10 text-xl font-medium tracking-[-0.02em]">
								{c.title}
							</h3>
							<p className="mt-3 flex-1 text-[15px] leading-relaxed text-fg-muted">
								{c.body}
							</p>
							<ul className="mt-8 flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[11px] text-fg-subtle">
								{c.tools.map((t) => (
									<li key={t}>{t}</li>
								))}
							</ul>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
