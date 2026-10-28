import { useEffect, useState } from 'react';
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '@/data';
import { ThemeToggle } from './theme-toggle';
import { ease } from './reveal';

const navItems = [
	{ label: 'Work', id: 'work' },
	{ label: 'Experience', id: 'experience' },
	{ label: 'Capabilities', id: 'capabilities' },
	{ label: 'Contact', id: 'contact' },
];

export function Navigation() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeId, setActiveId] = useState('');
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24));

	// Scroll-spy: highlight the section crossing the middle of the viewport.
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) =>
				entries.forEach(
					(e) => e.isIntersecting && setActiveId(e.target.id)
				),
			{ rootMargin: '-45% 0px -50% 0px' }
		);
		navItems.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		const onKey = (e: KeyboardEvent) =>
			e.key === 'Escape' && setOpen(false);
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [open]);

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
				scrolled || open
					? 'border-b border-line bg-[color-mix(in_srgb,var(--canvas)_82%,transparent)] backdrop-blur-xl'
					: 'border-b border-transparent'
			}`}
		>
			<nav
				className="container-site flex h-16 items-center justify-between"
				aria-label="Primary"
			>
				<a
					href="#top"
					className="group flex items-baseline gap-2"
					onClick={() => setOpen(false)}
				>
					<span className="text-[15px] font-semibold tracking-[-0.02em]">
						{profile.name}
					</span>
					<span className="hidden font-mono text-[11px] text-fg-subtle transition-colors group-hover:text-fg-muted sm:inline">
						/ {profile.role}
					</span>
				</a>

				<div className="hidden items-center gap-1 md:flex">
					{navItems.map((item) => (
						<a
							key={item.id}
							href={`#${item.id}`}
							aria-current={
								activeId === item.id ? 'true' : undefined
							}
							className={`relative isolate rounded-full px-3.5 py-1.5 text-sm transition-colors ${
								activeId === item.id
									? 'text-fg'
									: 'text-fg-muted hover:text-fg'
							}`}
						>
							{activeId === item.id && (
								<motion.span
									layoutId="nav-pill"
									className="absolute inset-0 -z-10 rounded-full bg-line"
									transition={{ duration: 0.4, ease }}
								/>
							)}
							{item.label}
						</a>
					))}
				</div>

				<div className="flex items-center gap-1.5">
					<ThemeToggle />
					<a
						href={profile.cv}
						target="_blank"
						rel="noopener noreferrer"
						className="hidden h-9 items-center gap-1.5 rounded-full border border-line-strong px-4 text-sm transition-colors hover:border-fg sm:inline-flex"
					>
						Résumé
						<ArrowUpRight className="h-3.5 w-3.5" />
					</a>
					<button
						type="button"
						onClick={() => setOpen((o) => !o)}
						aria-expanded={open}
						aria-controls="mobile-menu"
						aria-label={open ? 'Close menu' : 'Open menu'}
						className="grid h-9 w-9 place-items-center rounded-full text-fg transition-colors hover:bg-line md:hidden"
					>
						{open ? (
							<X className="h-[18px] w-[18px]" />
						) : (
							<Menu className="h-[18px] w-[18px]" />
						)}
					</button>
				</div>
			</nav>

			<AnimatePresence>
				{open && (
					<motion.div
						id="mobile-menu"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: '100dvh' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.45, ease }}
						className="overflow-hidden md:hidden"
					>
						<div className="container-site flex flex-col pb-10 pt-6">
							{navItems.map((item, i) => (
								<motion.a
									key={item.id}
									href={`#${item.id}`}
									onClick={() => setOpen(false)}
									initial={{ opacity: 0, y: 16 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										delay: 0.08 + i * 0.05,
										duration: 0.5,
										ease,
									}}
									className="flex items-baseline justify-between border-b border-line py-5 text-3xl font-medium tracking-[-0.03em]"
								>
									{item.label}
									<span className="font-mono text-xs text-fg-subtle">
										0{i + 1}
									</span>
								</motion.a>
							))}
							<a
								href={profile.cv}
								target="_blank"
								rel="noopener noreferrer"
								className="btn-primary mt-8"
							>
								View résumé
								<ArrowUpRight className="h-4 w-4" />
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
