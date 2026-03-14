import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
	forwardRef,
	type ForwardedRef,
	useRef,
	useState,
	useEffect,
} from 'react';
import { Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactMethods, socialLinks, floatingDots } from '@/data';

// Magnetic tilt card with spotlight effect
function MagneticCard({
	children,
	className = '',
	glowColor,
}: {
	children: React.ReactNode;
	className?: string;
	glowColor: string;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const [isHovered, setIsHovered] = useState(false);
	const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });

	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
		stiffness: 300,
		damping: 30,
	});
	const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
		stiffness: 300,
		damping: 30,
	});

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		const px = (e.clientX - rect.left) / rect.width - 0.5;
		const py = (e.clientY - rect.top) / rect.height - 0.5;
		x.set(px);
		y.set(py);
		setSpotlightPos({
			x: ((e.clientX - rect.left) / rect.width) * 100,
			y: ((e.clientY - rect.top) / rect.height) * 100,
		});
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
		setIsHovered(false);
	};

	return (
		<motion.div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={handleMouseLeave}
			style={{ rotateX, rotateY, transformPerspective: 800 }}
			className={`relative cursor-pointer ${className}`}
		>
			{/* Spotlight */}
			{isHovered && (
				<div
					className="pointer-events-none absolute inset-0 rounded-2xl z-10 transition-opacity duration-300"
					style={{
						background: `radial-gradient(circle at ${spotlightPos.x}% ${spotlightPos.y}%, ${glowColor}22 0%, transparent 65%)`,
					}}
				/>
			)}
			{/* Glow border */}
			<motion.div
				animate={{ opacity: isHovered ? 1 : 0 }}
				transition={{ duration: 0.3 }}
				className="pointer-events-none absolute -inset-px rounded-2xl z-0"
				style={{
					background: `linear-gradient(135deg, ${glowColor}60, transparent 60%, ${glowColor}30)`,
				}}
			/>
			{children}
		</motion.div>
	);
}

function FloatingDot({
	delay,
	x,
	y,
	size,
}: {
	delay: number;
	x: string;
	y: string;
	size: number;
}) {
	return (
		<motion.div
			className="absolute rounded-full pointer-events-none"
			style={{
				left: x,
				top: y,
				width: size,
				height: size,
				background: 'rgba(99,179,237,0.15)',
			}}
			animate={{ y: [0, -18, 0], opacity: [0.3, 0.7, 0.3] }}
			transition={{
				duration: 4 + delay,
				repeat: Infinity,
				delay,
				ease: 'easeInOut',
			}}
		/>
	);
}

export const ContactSection = forwardRef(
	(_props, ref: ForwardedRef<HTMLElement>) => {
		const [typed, setTyped] = useState('');
		const heading = "Let's Connect";

		useEffect(() => {
			let i = 0;
			const interval = setInterval(() => {
				setTyped(heading.slice(0, i + 1));
				i++;
				if (i >= heading.length) clearInterval(interval);
			}, 60);
			return () => clearInterval(interval);
		}, []);

		return (
			<>
				<section
					ref={ref}
					className="contact-section py-28 relative z-10"
				>
					<div className="contact-grid-bg" />
					<div className="contact-radial-glow" />
					<div className="noise-overlay" />
					{floatingDots.map((dot, i) => (
						<FloatingDot key={i} {...dot} />
					))}

					<div className="max-w-5xl mx-auto px-6 relative z-10">
						{/* Header */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-80px' }}
							transition={{
								duration: 0.7,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="text-center mb-20"
						>
							{/* Label chip */}
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.1, duration: 0.5 }}
								className="inline-flex items-center gap-2 mb-6"
							>
								<span className="mono text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-blue-400/20 text-blue-400/80 bg-blue-500/5">
									<Sparkles className="w-3 h-3 inline mr-1 -mt-px" />
									Available for work
								</span>
							</motion.div>

							{/* Heading with typewriter */}
							<h2
								className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
								style={{
									letterSpacing: '-0.02em',
									lineHeight: 1.1,
								}}
							>
								{typed}
								{typed.length < heading.length && (
									<span className="cursor-blink" />
								)}
							</h2>

							<motion.p
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3, duration: 0.6 }}
								className="text-base md:text-lg text-slate-400 max-w-md mx-auto leading-relaxed"
							>
								Got a project in mind? I'd love to hear about
								it. Let's build something remarkable together.
							</motion.p>
						</motion.div>

						<div className="grid md:grid-cols-2 gap-4 mb-10">
							{contactMethods.map((method, index) => (
								<motion.div
									key={method.label}
									initial={{ opacity: 0, y: 24 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										delay: index * 0.12,
										duration: 0.6,
										ease: [0.22, 1, 0.36, 1],
									}}
								>
									<MagneticCard glowColor={method.glowColor}>
										<div className="contact-card p-5 flex items-center gap-4 group">
											<div
												className="icon-ring"
												style={{
													background: `${method.color}15`,
													border: `1px solid ${method.color}30`,
												}}
											>
												<motion.div
													animate={{
														scale: [1, 1.1, 1],
													}}
													transition={{
														duration: 2.5,
														repeat: Infinity,
														delay: index * 0.4,
													}}
													style={{
														color: method.color,
													}}
												>
													{method.icon}
												</motion.div>
												<motion.div
													className="absolute inset-0 rounded-xl"
													animate={{
														scale: [1, 1.4],
														opacity: [0.3, 0],
													}}
													transition={{
														duration: 2,
														repeat: Infinity,
														delay: index * 0.4,
													}}
													style={{
														border: `1px solid ${method.color}`,
													}}
												/>
											</div>
											<div>
												<p
													className="mono text-xs uppercase tracking-widest mb-0.5"
													style={{
														color: `${method.color}99`,
													}}
												>
													{method.label}
												</p>
												{method.href ? (
													<Link
														to={method.href}
														className="text-sm font-semibold text-slate-200 hover:text-white transition-colors group-hover:underline underline-offset-2"
													>
														{method.value}
													</Link>
												) : (
													<p className="text-sm font-semibold text-slate-200">
														{method.value}
													</p>
												)}
											</div>
										</div>
									</MagneticCard>
								</motion.div>
							))}
						</div>

						<motion.div
							initial={{ scaleX: 0 }}
							whileInView={{ scaleX: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="divider-line mb-10"
						/>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.6 }}
							className="flex flex-col sm:flex-row items-center justify-between gap-6"
						>
							<div className="flex gap-3 flex-wrap justify-center sm:justify-start">
								{socialLinks.map((s, i) => (
									<motion.div
										key={s.label}
										whileHover={{ scale: 1.04 }}
										whileTap={{ scale: 0.97 }}
										transition={{ delay: i * 0.05 }}
									>
										<Link
											to={s.href}
											target="_blank"
											rel="noopener noreferrer"
											className={`social-btn border ${s.border} ${s.hover} text-slate-300 hover:text-white`}
											style={{
												borderColor: `${s.accent}25`,
											}}
										>
											<span style={{ color: s.accent }}>
												{s.icon}
											</span>
											{s.label}
											<ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
										</Link>
									</motion.div>
								))}
							</div>

							<motion.div
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<Link to="mailto:temitopeabiodun685@gmail.com">
									<button className="cta-btn">
										<Mail className="w-4 h-4" />
										Send a message
										<motion.span
											animate={{ x: [0, 3, 0] }}
											transition={{
												duration: 1.5,
												repeat: Infinity,
											}}
										>
											→
										</motion.span>
									</button>
								</Link>
							</motion.div>
						</motion.div>

						<motion.p
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.6, duration: 0.8 }}
							className="mono text-center text-xs text-slate-600 mt-14 tracking-wider"
						>
							© {new Date().getFullYear()} · Temitope Olowosuyi·
							Crafted with care in Lagos, Nigeria
						</motion.p>
					</div>
				</section>
			</>
		);
	}
);

ContactSection.displayName = 'ContactSection';
