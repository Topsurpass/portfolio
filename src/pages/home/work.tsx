import { ArrowUpRight } from 'lucide-react';
import { otherWork, profile, projects, type Project } from '@/data';
import { BrowserFrame } from '@/components/browser-frame';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';

function CaseStudy({ project, index }: { project: Project; index: number }) {
	const [primary, ...rest] = project.links;

	return (
		<article className="border-t border-line pt-10 md:pt-14">
			<Reveal className="mb-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 md:mb-10">
				<div className="flex items-baseline gap-4">
					<span className="font-mono text-xs text-fg-subtle">
						{String(index + 1).padStart(2, '0')}
					</span>
					<h3 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium tracking-[-0.035em]">
						{project.title}
					</h3>
				</div>
				<p className="eyebrow">{project.kind}</p>
			</Reveal>

			<Reveal delay={0.05}>
				<a
					href={primary.href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`Open ${project.title} — ${primary.label}`}
					className={`group block ${project.images.length > 1 ? 'grid gap-4 md:grid-cols-2' : ''}`}
				>
					{project.images.map((img) => (
						<BrowserFrame key={img.src} {...img} />
					))}
				</a>
			</Reveal>

			<div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12">
				<Reveal className="md:col-span-5">
					<p className="text-pretty text-lg leading-relaxed md:text-xl">
						{project.summary}
					</p>
					<dl className="mt-8 space-y-4 text-sm">
						<div>
							<dt className="eyebrow mb-1.5">Role</dt>
							<dd className="text-fg-muted">{project.role}</dd>
						</div>
						<div>
							<dt className="eyebrow mb-2">Stack</dt>
							<dd className="flex flex-wrap gap-1.5">
								{project.stack.map((s) => (
									<span
										key={s}
										className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-fg-muted"
									>
										{s}
									</span>
								))}
							</dd>
						</div>
					</dl>
				</Reveal>

				<Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
					<p className="eyebrow mb-4">What I built</p>
					<ul className="divide-y divide-line border-y border-line">
						{project.highlights.map((h) => (
							<li
								key={h}
								className="flex gap-4 py-4 text-[15px] leading-relaxed text-fg-muted"
							>
								<span
									aria-hidden="true"
									className="mt-[0.6em] h-1 w-1 flex-none rounded-full bg-brand"
								/>
								{h}
							</li>
						))}
					</ul>

					<div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
						<a
							href={primary.href}
							target="_blank"
							rel="noopener noreferrer"
							className="btn-primary group"
						>
							{primary.label}
							<ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
						</a>
						{rest.map((l) => (
							<a
								key={l.href}
								href={l.href}
								target="_blank"
								rel="noopener noreferrer"
								className="link-underline inline-flex items-center gap-1 text-sm text-fg-muted hover:text-fg"
							>
								{l.label}
								<ArrowUpRight className="h-3.5 w-3.5" />
							</a>
						))}
						{project.note && (
							<span className="text-sm text-fg-subtle">
								{project.note}
							</span>
						)}
					</div>
				</Reveal>
			</div>
		</article>
	);
}

export function WorkSection() {
	return (
		<section id="work" className="py-24 md:py-36">
			<div className="container-site">
				<SectionHeading
					label="Selected work"
					meta={`(${String(projects.length).padStart(2, '0')})`}
					title={
						<>
							Products I&apos;ve designed, built{' '}
							<span className="font-serif font-normal italic">
								and shipped.
							</span>
						</>
					}
					lead="A closer look at recent builds — what the product needed, what I built, and the stack behind it."
				/>

				<div className="space-y-24 md:space-y-36">
					{projects.map((p, i) => (
						<CaseStudy key={p.slug} project={p} index={i} />
					))}
				</div>

				<Reveal className="mt-24 grid gap-6 border-t border-line pt-8 md:mt-32 md:grid-cols-12">
					<p className="eyebrow md:col-span-3">Also built</p>
					<ul className="md:col-span-6">
						{otherWork.map((w) => (
							<li
								key={w.title}
								className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4"
							>
								<span className="whitespace-nowrap font-medium">{w.title}</span>
								<span className="text-sm text-fg-muted">
									{w.description}
								</span>
								<span className="font-mono text-[11px] text-fg-subtle sm:ml-auto sm:whitespace-nowrap">
									{w.stack}
								</span>
							</li>
						))}
					</ul>
					<a
						href={profile.github}
						target="_blank"
						rel="noopener noreferrer"
						className="link-underline inline-flex items-center gap-1 self-start text-sm md:col-span-3 md:justify-self-end"
					>
						More on GitHub
						<ArrowUpRight className="h-3.5 w-3.5" />
					</a>
				</Reveal>
			</div>
		</section>
	);
}
