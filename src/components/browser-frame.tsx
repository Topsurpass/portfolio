interface BrowserFrameProps {
	src: string;
	alt: string;
	url: string;
	className?: string;
}

/** Screenshot presented inside a minimal browser window. */
export function BrowserFrame({
	src,
	alt,
	url,
	className = '',
}: BrowserFrameProps) {
	return (
		<figure
			className={`overflow-hidden rounded-xl border border-line-strong bg-panel shadow-[var(--shadow)] ${className}`}
		>
			<div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
				<div className="flex gap-1.5" aria-hidden="true">
					<span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
					<span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
					<span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
				</div>
				<span className="mx-auto truncate rounded-md bg-line px-3 py-0.5 font-mono text-[11px] text-fg-subtle">
					{url}
				</span>
				<span className="w-[42px]" aria-hidden="true" />
			</div>
			<div className="aspect-[16/10] overflow-hidden">
				<img
					src={src}
					alt={alt}
					loading="lazy"
					decoding="async"
					width={1440}
					height={900}
					className="h-full w-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
				/>
			</div>
		</figure>
	);
}
