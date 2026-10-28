import { Reveal } from './reveal';

interface SectionHeadingProps {
	/** Short label shown above the rule, e.g. "Selected work" */
	label: string;
	/** Right-aligned counter or note beside the label */
	meta?: string;
	title: React.ReactNode;
	lead?: React.ReactNode;
}

/** Shared section header: label row with a hairline, then a large title. */
export function SectionHeading({
	label,
	meta,
	title,
	lead,
}: SectionHeadingProps) {
	return (
		<header className="mb-14 md:mb-20">
			<Reveal className="flex items-center justify-between border-b border-line pb-4">
				<span className="eyebrow">{label}</span>
				{meta && <span className="eyebrow">{meta}</span>}
			</Reveal>
			<div className="mt-10 grid gap-6 md:grid-cols-12">
				<Reveal delay={0.05} className="md:col-span-7">
					<h2 className="text-balance text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.035em]">
						{title}
					</h2>
				</Reveal>
				{lead && (
					<Reveal
						delay={0.12}
						className="md:col-span-4 md:col-start-9 md:self-end"
					>
						<p className="text-pretty text-base leading-relaxed text-fg-muted">
							{lead}
						</p>
					</Reveal>
				)}
			</div>
		</header>
	);
}
