import { motion } from 'framer-motion';

interface SectionHeadingProps {
	/** Two-digit section index, e.g. "02" */
	index: string;
	/** Mono kicker label above the title */
	kicker: string;
	/** The large editorial title (string or rich nodes) */
	title: React.ReactNode;
	/** Optional supporting line under the title */
	lead?: React.ReactNode;
	/** Whether the parent section is in view (drives the reveal) */
	inView?: boolean;
}

/**
 * Shared editorial section header: numbered index, a thin rule, a mono kicker
 * and a large display title. Used across Skills / Projects / Contact so every
 * section shares one typographic system instead of bespoke inline markup.
 */
export function SectionHeading({
	index,
	kicker,
	title,
	lead,
	inView = true,
}: SectionHeadingProps) {
	return (
		<div>
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				className="ed-section-head"
			>
				<span className="ed-section-index">{index}</span>
				<span className="ed-kicker">{kicker}</span>
				<span className="ed-rule" aria-hidden="true" />
			</motion.div>

			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{
					delay: 0.08,
					duration: 0.7,
					ease: [0.22, 1, 0.36, 1],
				}}
				className="ed-h2 max-w-3xl"
			>
				{title}
			</motion.h2>

			{lead && (
				<motion.p
					initial={{ opacity: 0, y: 16 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.16, duration: 0.7 }}
					className="ed-body mt-5 max-w-xl text-base"
				>
					{lead}
				</motion.p>
			)}
		</div>
	);
}
