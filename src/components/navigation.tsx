import { useState } from 'react';
import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from 'framer-motion';
import { User, Briefcase, Code2, Mail, Menu, X, Terminal } from 'lucide-react';
import { RefObject } from 'react';

interface NavigationProps {
	scrollToSection: (ref: RefObject<HTMLElement>) => void;
	refs: {
		profileRef: RefObject<HTMLElement>;
		skillsRef: RefObject<HTMLElement>;
		projectsRef: RefObject<HTMLElement>;
		contactRef: RefObject<HTMLElement>;
	};
}

interface NavItem {
	label: string;
	shortLabel: string;
	icon: React.ReactNode;
	ref: RefObject<HTMLElement> | null;
	accent: string;
}

export const Navigation = ({ scrollToSection, refs }: NavigationProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const [hoverIndex, setHoverIndex] = useState<number | null>(null);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 30));

	const navItems: NavItem[] = [
		{
			label: 'Profile',
			shortLabel: '01',
			icon: <User size={14} />,
			ref: refs.profileRef,
			accent: '#63B3ED',
		},
		{
			label: 'Skills',
			shortLabel: '02',
			icon: <Code2 size={14} />,
			ref: refs.skillsRef,
			accent: '#68D391',
		},
		{
			label: 'Projects',
			shortLabel: '03',
			icon: <Briefcase size={14} />,
			ref: refs.projectsRef,
			accent: '#C084FC',
		},
		{
			label: 'Contact',
			shortLabel: '04',
			icon: <Mail size={14} />,
			ref: refs.contactRef,
			accent: '#F6AD55',
		},
	];

	const handleNav = (item: NavItem, i: number) => {
		setActiveIndex(i);
		item.ref && scrollToSection(item.ref);
		setIsMenuOpen(false);
	};

	return (
		<>
			<style>{`
				@import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Mono:wght@400;500&display=swap');

				.nav-root {
					font-family: 'Syne', sans-serif;
					position: fixed;
					top: 0;
					width: 100%;
					z-index: 100;
					transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
				}

				.nav-blur-bg {
					position: absolute;
					inset: 0;
					backdrop-filter: blur(20px);
					-webkit-backdrop-filter: blur(20px);
					transition: background 0.4s, border-color 0.4s, box-shadow 0.4s;
				}

				.nav-item-btn {
					position: relative;
					display: inline-flex;
					align-items: center;
					gap: 7px;
					padding: 7px 14px;
					border-radius: 10px;
					font-size: 13px;
					font-weight: 600;
					letter-spacing: 0.02em;
					color: #475569;
					background: transparent;
					border: 1px solid transparent;
					cursor: pointer;
					transition: color 0.2s, background 0.2s, border-color 0.2s;
					font-family: 'Syne', sans-serif;
					white-space: nowrap;
				}
				.nav-item-btn:hover { color: #e2e8f0; }

				.nav-indicator {
					position: absolute;
					bottom: 0; left: 0; right: 0;
					height: 1px;
					border-radius: 99px;
					transform-origin: left;
				}

				.mobile-menu-item {
					display: flex;
					align-items: center;
					gap: 14px;
					width: 100%;
					padding: 14px 20px;
					border-radius: 12px;
					font-size: 15px;
					font-weight: 700;
					font-family: 'Syne', sans-serif;
					color: #475569;
					background: transparent;
					border: 1px solid transparent;
					cursor: pointer;
					transition: all 0.2s;
					text-align: left;
				}
				.mobile-menu-item:hover {
					color: #e2e8f0;
					background: rgba(255,255,255,0.04);
				}

				.logo-dot {
					width: 8px; height: 8px;
					border-radius: 50%;
					background: #3b82f6;
					animation: logo-pulse 3s ease-in-out infinite;
				}
				@keyframes logo-pulse {
					0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.5); }
					50% { box-shadow: 0 0 0 5px rgba(59,130,246,0); }
				}

				.cta-nav-btn {
					font-family: 'Syne', sans-serif;
					display: inline-flex;
					align-items: center;
					gap: 7px;
					padding: 8px 18px;
					border-radius: 10px;
					font-size: 13px;
					font-weight: 700;
					background: linear-gradient(135deg, #1d4ed8, #3b82f6);
					color: white;
					border: none;
					cursor: pointer;
					transition: transform 0.2s, box-shadow 0.3s;
					box-shadow: 0 2px 14px rgba(59,130,246,0.3);
					letter-spacing: 0.02em;
					white-space: nowrap;
				}
				.cta-nav-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 20px rgba(59,130,246,0.45); }
			`}</style>

			<nav className="nav-root">
				{/* Background layer */}
				<div
					className="nav-blur-bg"
					style={{
						background: scrolled
							? 'rgba(8,12,20,0.85)'
							: 'rgba(8,12,20,0.0)',
						borderBottom: scrolled
							? '1px solid rgba(255,255,255,0.06)'
							: '1px solid transparent',
						boxShadow: scrolled
							? '0 8px 32px rgba(0,0,0,0.4)'
							: 'none',
					}}
				/>

				{/* Subtle top progress line */}
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
						<motion.div
							initial={{ opacity: 0, x: -16 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								duration: 0.6,
								ease: [0.22, 1, 0.36, 1],
							}}
						>
							<button
								onClick={() => scrollToSection(refs.profileRef)}
								className="flex items-center gap-2.5 group"
								style={{
									background: 'none',
									border: 'none',
									cursor: 'pointer',
									padding: 0,
								}}
							>
								{/* Icon mark */}
								<div
									className="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300 group-hover:scale-105"
									style={{
										background: 'rgba(59,130,246,0.12)',
										border: '1px solid rgba(59,130,246,0.25)',
									}}
								>
									<Terminal
										size={16}
										style={{ color: '#63b3ed' }}
									/>
								</div>

								{/* Name */}
								<div className="flex flex-col -space-y-0.5">
									<span
										style={{
											fontFamily: "'Syne', sans-serif",
											fontWeight: 800,
											fontSize: '15px',
											letterSpacing: '-0.02em',
											color: '#e2e8f0',
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
							</button>
						</motion.div>

						{/* ── Desktop Nav ── */}
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								delay: 0.1,
								duration: 0.6,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="hidden md:flex items-center gap-1"
						>
							{navItems.map((item, i) => (
								<button
									key={item.label}
									className="nav-item-btn"
									onClick={() => handleNav(item, i)}
									onMouseEnter={() => setHoverIndex(i)}
									onMouseLeave={() => setHoverIndex(null)}
									style={{
										color:
											activeIndex === i
												? item.accent
												: hoverIndex === i
													? '#e2e8f0'
													: '#475569',
										background:
											activeIndex === i
												? `${item.accent}10`
												: hoverIndex === i
													? 'rgba(255,255,255,0.04)'
													: 'transparent',
										borderColor:
											activeIndex === i
												? `${item.accent}25`
												: 'transparent',
									}}
								>
									{/* Number */}
									<span
										style={{
											fontFamily: "'DM Mono', monospace",
											fontSize: '9px',
											letterSpacing: '0.08em',
											color:
												activeIndex === i
													? item.accent + 'aa'
													: '#2d3748',
											transition: 'color 0.2s',
										}}
									>
										{item.shortLabel}
									</span>
									<span
										style={{
											color:
												activeIndex === i
													? item.accent + 'cc'
													: 'inherit',
											transition: 'color 0.2s',
										}}
									>
										{item.icon}
									</span>
									{item.label}

									{/* Active underline */}
									{activeIndex === i && (
										<motion.div
											layoutId="nav-active"
											className="nav-indicator"
											style={{ background: item.accent }}
											transition={{
												type: 'spring',
												stiffness: 400,
												damping: 35,
											}}
										/>
									)}
								</button>
							))}

							{/* CTA */}
							<div className="ml-2">
								<motion.button
									whileHover={{ scale: 1.03 }}
									whileTap={{ scale: 0.97 }}
									className="cta-nav-btn"
									onClick={() => handleNav(navItems[3], 3)}
								>
									<Mail size={13} />
									Hire Me
								</motion.button>
							</div>
						</motion.div>

						{/* ── Mobile Hamburger ── */}
						<motion.button
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
							className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl transition-all"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							style={{
								background: isMenuOpen
									? 'rgba(255,255,255,0.08)'
									: 'rgba(255,255,255,0.04)',
								border: '1px solid rgba(255,255,255,0.08)',
								color: '#94a3b8',
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
									{isMenuOpen ? (
										<X size={18} />
									) : (
										<Menu size={18} />
									)}
								</motion.div>
							</AnimatePresence>
						</motion.button>
					</div>
				</div>

				{/* ── Mobile Menu ── */}
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							initial={{ opacity: 0, y: -8, scale: 0.98 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: -8, scale: 0.98 }}
							transition={{
								duration: 0.25,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="md:hidden absolute w-full"
							style={{
								background: 'rgba(8,12,20,0.97)',
								backdropFilter: 'blur(24px)',
								borderBottom:
									'1px solid rgba(255,255,255,0.07)',
								boxShadow: '0 16px 48px rgba(0,0,0,0.6)',
							}}
						>
							{/* Decorative top border gradient */}
							<div
								style={{
									height: 1,
									background:
										'linear-gradient(90deg, transparent, rgba(99,179,237,0.3), transparent)',
								}}
							/>

							<div className="px-4 py-4 space-y-1">
								{navItems.map((item, i) => (
									<motion.button
										key={item.label}
										initial={{ opacity: 0, x: -12 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{
											delay: i * 0.06,
											duration: 0.3,
										}}
										className="mobile-menu-item"
										onClick={() => handleNav(item, i)}
										style={{
											color:
												activeIndex === i
													? item.accent
													: '#475569',
											background:
												activeIndex === i
													? `${item.accent}0d`
													: 'transparent',
											borderColor:
												activeIndex === i
													? `${item.accent}20`
													: 'transparent',
										}}
									>
										{/* Number chip */}
										<span
											style={{
												fontFamily:
													"'DM Mono', monospace",
												fontSize: '9px',
												letterSpacing: '0.1em',
												color: item.accent + '66',
												minWidth: 20,
											}}
										>
											{item.shortLabel}
										</span>

										{/* Icon circle */}
										<div
											className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0"
											style={{
												background: `${item.accent}14`,
												border: `1px solid ${item.accent}25`,
												color: item.accent,
											}}
										>
											{item.icon}
										</div>

										{item.label}

										{/* Arrow */}
										<span
											className="ml-auto"
											style={{
												color: item.accent + '55',
												fontSize: 14,
											}}
										>
											→
										</span>
									</motion.button>
								))}

								{/* Mobile CTA */}
								<motion.div
									initial={{ opacity: 0, y: 8 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.28, duration: 0.3 }}
									className="pt-2"
								>
									<div
										style={{
											height: 1,
											background:
												'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
											marginBottom: 10,
										}}
									/>
									<button
										className="cta-nav-btn w-full justify-center"
										onClick={() =>
											handleNav(navItems[3], 3)
										}
										style={{
											width: '100%',
											padding: '12px 18px',
										}}
									>
										<Mail size={14} />
										Get in Touch
									</button>
								</motion.div>
							</div>

							{/* Footer */}
							<div
								className="px-6 py-3"
								style={{
									borderTop:
										'1px solid rgba(255,255,255,0.04)',
								}}
							>
								<p
									style={{
										fontFamily: "'DM Mono', monospace",
										fontSize: '9px',
										letterSpacing: '0.15em',
										color: '#1e293b',
										textTransform: 'uppercase',
									}}
								>
									© 2025 · Olowosuyi Temitope · Lagos, NG
								</p>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</>
	);
};
