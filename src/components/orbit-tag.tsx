import { motion } from 'framer-motion';

export default function OrbitTag({
	label,
	angle,
	radius,
	duration,
	delay,
	color,
}: {
	label: string;
	angle: number;
	radius: number;
	duration: number;
	delay: number;
	color: string;
}) {
	return (
		<motion.div
			className="absolute flex items-center"
			style={{
				width: radius * 2,
				height: radius * 2,
				top: '50%',
				left: '50%',
				marginTop: -radius,
				marginLeft: -radius,
				transformOrigin: 'center center',
			}}
			animate={{ rotate: 360 }}
			transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
		>
			<motion.div
				className="absolute"
				style={{
					top: 0,
					left: '50%',
					transform: `translateX(-50%) rotate(${angle}deg)`,
				}}
				animate={{ rotate: -360 }}
				transition={{
					duration,
					delay,
					repeat: Infinity,
					ease: 'linear',
				}}
			>
				<span
					className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap"
					style={{
						background: `${color}18`,
						border: `1px solid ${color}45`,
						color,
						fontFamily: "'DM Mono', monospace",
						letterSpacing: '0.05em',
						backdropFilter: 'blur(8px)',
					}}
				>
					{label}
				</span>
			</motion.div>
		</motion.div>
	);
}
