import { useEffect, useState } from 'react';
import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from 'framer-motion';
import { User, Briefcase, Code2, Mail, Menu, X, Terminal } from 'lucide-react';

interface NavItem {
	label: string;
	num: string;
	id: string;
	icon: React.ReactNode;
	accent: string;
}

const navItems: NavItem[] = [
	{ label: 'Profile', num: '01', id: 'profile', icon: <User size={14} />, accent: '#63B3ED' },
	{ label: 'Skills', num: '02', id: 'skills', icon: <Code2 size={14} />, accent: '#68D391' },
	{ label: 'Work', num: '03', id: 'projects', icon: <Briefcase size={14} />, accent: '#C084FC' },
	{ label: 'Contact', num: '04', id: 'contact', icon: <Mail size={14} />, accent: '#F6AD55' },
];

export const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeId, setActiveId] = useState<string>('profile');
	const [hoverIndex, setHoverIndex] = useState<number | null>(null);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 30));

	// ── Scroll-spy: mark the section crossing the viewport's middle band ──
	useEffect(() => {
		const sections = navItems
			.map((i) => document.getElementById(i.id))
			.filter((el): el is HTMLElement => el !== null);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActiveId(entry.target.id);
				});
			},
			{ rootMargin: '-45% 0px -50% 0px', threshold: 0 }
		);

		sections.forEach((s) => observer.observe(s));
		return () => observer.disconnect();
	}, []);

	return (
		<>
			<style>{`
				.nav-root {
					font-family: 'Syne', sans-serif;
					position: fixed; top: 0; width: 100%; z-index: 100;
					transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
				}
				.nav-blur-bg {
					position: absolute; inset: 0;
					backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
					transition: background 0.4s, border-color 0.4s, box-shadow 0.4s;
				}
				.nav-item-btn {
					position: relative; display: inline-flex; align-items: center; gap: 7px;
					padding: 7px 14px; border-radius: 10px; font-size: 13px; font-weight: 600;
					letter-spacing: 0.02em; background: transparent; border: 1px solid transparent;
					cursor: pointer; text-decoration: none;
					transition: color 0.2s, background 0.2s, border-color 0.2s;
					font-family: 'Syne', sans-serif; white-space: nowrap;
				}
				.mobile-menu-item {
					display: flex; align-items: center; gap: 14px; width: 100%;
					padding: 14px 20px; border-radius: 12px; font-size: 15px; font-weight: 700;
					font-family: 'Syne', sans-serif; background: transparent;
					border: 1px solid transparent; cursor: pointer; text-align: left;
					text-decoration: none; transition: all 0.2s;
				}
				.cta-nav-btn {
					font-family: 'Syne', sans-serif; display: inline-flex; align-items: center;
					gap: 7px; padding: 8px 18px; border-radius: 10px; font-size: 13px; font-weight: 700;
					background: linear-gradient(135deg, #1d4ed8, #3b82f6); color: white; border: none;
					cursor: pointer; text-decoration: none;
					transition: transform 0.2s, box-shadow 0.3s;
					box-shadow: 0 2px 14px rgba(59,130,246,0.3); letter-spacing: 0.02em; white-space: nowrap;
				}
				.cta-nav-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 20px rgba(59,130,246,0.45); }
				.logo-mark { animation: logo-pulse 3s ease-in-out infinite; }
				@keyframes logo-pulse {
					0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }
					50% { box-shadow: 0 0 0 5px rgba(59,130,246,0); }
				}
			`}</style>

			<nav className="nav-root" aria-label="Primary">
				<div
					className="nav-blur-bg"
					style={{
						background: scrolled ? 'rgba(7,11,18,0.85)' : 'transparent',
						borderBottom: scrolled
							? '1px solid var(--ed-line)'
							: '1px solid transparent',
						boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
					}}
				/>

				<motion.div
					className="absolute top-0 left-0 h-px z-10"
					style={{
						width: '100%',
						background:
							'linear-gradient(90deg, transparent 0%, #3b82f6 40%, #63b3ed 70%, transparent 100%)',
						opacity: scrolled ? 0.5 : 0,
						transition: 'opacity 0.4s',
					}}
				/>

				<div className="max-w-6xl mx-auto px-5 relative z-10">
					<div className="flex items-center justify-between h-16">
						{/* ── Logo ── */}
						<a
							href="#profile"
							className="flex items-center gap-2.5 group"
							aria-label="Olowosuyi Temitope — back to top"
							style={{ textDecoration: 'none' }}
						>
							<div
								className="logo-mark flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300 group-hover:scale-105"
								style={{
									background: 'rgba(59,130,246,0.12)',
									border: '1px solid rgba(59,130,246,0.25)',
								}}
							>
								<Terminal size={16} style={{ color: '#63b3ed' }} />
							</div>
							<div className="flex flex-col -space-y-0.5">
								<span
									style={{
										fontFamily: "'Syne', sans-serif",
										fontWeight: 800,
										fontSize: '15px',
										letterSpacing: '-0.02em',
										color: 'var(--ed-text-hi)',
										lineHeight: 1.2,
									}}
								>
									Olowosuyi T.
								</span>
								<span
									style={{
										fontFamily: "'DM Mono', monospace",
										fontSize: '9px',
										letterSpacing: '0.18em',
										color: '#3b82f6',
										textTransform: 'uppercase',
									}}
								>
									Frontend Dev
								</span>
							</div>
						</a>

						{/* ── Desktop Nav ── */}
						<div className="hidden md:flex items-center gap-1">
							{navItems.map((item, i) => {
								const active = activeId === item.id;
								return (
									<a
										key={item.id}
										href={`#${item.id}`}
										className="nav-item-btn"
										aria-current={active ? 'page' : undefined}
										onMouseEnter={() => setHoverIndex(i)}
										onMouseLeave={() => setHoverIndex(null)}
										style={{
											color: active
												? item.accent
												: hoverIndex === i
													? 'var(--ed-text-hi)'
													: 'var(--ed-text-mid)',
											background: active
												? `${item.accent}10`
												: hoverIndex === i
													? 'rgba(255,255,255,0.04)'
													: 'transparent',
											borderColor: active
												? `${item.accent}25`
												: 'transparent',
										}}
									>
										<span
											style={{
												fontFamily: "'DM Mono', monospace",
												fontSize: '9px',
												letterSpacing: '0.08em',
												color: active
													? item.accent + 'aa'
													: 'var(--ed-text-dim)',
											}}
										>
											{item.num}
										</span>
										<span style={{ color: active ? item.accent : 'inherit' }}>
											{item.icon}
										</span>
										{item.label}
										{active && (
											<motion.div
												layoutId="nav-active"
												className="absolute bottom-0 left-0 right-0 h-px rounded-full"
												style={{ background: item.accent }}
												transition={{
													type: 'spring',
													stiffness: 400,
													damping: 35,
												}}
											/>
										)}
									</a>
								);
							})}

							<a href="#contact" className="cta-nav-btn ml-2">
								<Mail size={13} />
								Hire Me
							</a>
						</div>

						{/* ── Mobile Hamburger ── */}
						<button
							className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl transition-all"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
							aria-expanded={isMenuOpen}
							aria-controls="mobile-menu"
							style={{
								background: isMenuOpen
									? 'rgba(255,255,255,0.08)'
									: 'rgba(255,255,255,0.04)',
								border: '1px solid rgba(255,255,255,0.08)',
								color: 'var(--ed-text-mid)',
								cursor: 'pointer',
							}}
						>
							<AnimatePresence mode="wait">
								<motion.div
									key={isMenuOpen ? 'close' : 'open'}
									initial={{ rotate: -90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: 90, opacity: 0 }}
									transition={{ duration: 0.18 }}
								>
									{isMenuOpen ? <X size={18} /> : <Menu size={18} />}
								</motion.div>
							</AnimatePresence>
						</button>
					</div>
				</div>

				{/* ── Mobile Menu ── */}
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							id="mobile-menu"
							initial={{ opacity: 0, y: -8 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -8 }}
							transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
							className="md:hidden absolute w-full"
							style={{
								background: 'rgba(7,11,18,0.97)',
								backdropFilter: 'blur(24px)',
								borderBottom: '1px solid var(--ed-line)',
								boxShadow: '0 16px 48px rgba(0,0,0,0.6)',
							}}
						>
							<div className="px-4 py-4 space-y-1">
								{navItems.map((item) => {
									const active = activeId === item.id;
									return (
										<a
											key={item.id}
											href={`#${item.id}`}
											className="mobile-menu-item"
											aria-current={active ? 'page' : undefined}
											onClick={() => setIsMenuOpen(false)}
											style={{
												color: active
													? item.accent
													: 'var(--ed-text-mid)',
												background: active
													? `${item.accent}0d`
													: 'transparent',
												borderColor: active
													? `${item.accent}20`
													: 'transparent',
											}}
										>
											<span
												style={{
													fontFamily: "'DM Mono', monospace",
													fontSize: '9px',
													letterSpacing: '0.1em',
													color: item.accent + '88',
													minWidth: 20,
												}}
											>
												{item.num}
											</span>
											<span
												className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0"
												style={{
													background: `${item.accent}14`,
													border: `1px solid ${item.accent}25`,
													color: item.accent,
												}}
											>
												{item.icon}
											</span>
											{item.label}
											<span
												className="ml-auto"
												style={{ color: item.accent + '55', fontSize: 14 }}
											>
												→
											</span>
										</a>
									);
								})}

								<div className="pt-2">
									<a
										href="#contact"
										className="cta-nav-btn w-full justify-center"
										onClick={() => setIsMenuOpen(false)}
										style={{ width: '100%', padding: '12px 18px' }}
									>
										<Mail size={14} />
										Get in Touch
									</a>
								</div>
							</div>

							<div
								className="px-6 py-3"
								style={{ borderTop: '1px solid var(--ed-line)' }}
							>
								<p
									style={{
										fontFamily: "'DM Mono', monospace",
										fontSize: '9px',
										letterSpacing: '0.15em',
										color: 'var(--ed-text-dim)',
										textTransform: 'uppercase',
									}}
								>
									© {new Date().getFullYear()} · Olowosuyi Temitope · Lagos, NG
								</p>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</>
	);
};
