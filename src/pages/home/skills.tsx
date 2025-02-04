import { motion } from 'framer-motion';
import { forwardRef, type ForwardedRef } from 'react';
import {
	Code,
	Cpu,
	Cloud,
	Paintbrush,
	Globe,
	Database,
	Terminal,
	Smartphone,
} from 'lucide-react';

const skills = [
	{ name: 'React', icon: <Code className="w-6 h-6" />, rating: 4.5 },
	{ name: 'TypeScript', icon: <Terminal className="w-6 h-6" />, rating: 4.5 },
	{ name: 'Next.js', icon: <Globe className="w-6 h-6" />, rating: 4.0 },
	{ name: 'Tailwind', icon: <Paintbrush className="w-6 h-6" />, rating: 4.5 },
	{ name: 'Node.js', icon: <Cpu className="w-6 h-6" />, rating: 4.0 },
	{ name: 'REST API', icon: <Database className="w-6 h-6" />, rating: 4.5 },
	{ name: 'Javascript', icon: <Cloud className="w-6 h-6" />, rating: 4.5 },
	{ name: 'CI/CD', icon: <Smartphone className="w-6 h-6" />, rating: 4 },
] as const;

export const SkillsSection = forwardRef((_props, ref: ForwardedRef<HTMLElement>) => (
	<section ref={ref} className="md:py-20 bg-gray-50/50 relative z-10">
		<div className="max-w-7xl mx-auto px-4">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '-100px' }}
				className="text-2xl md:text-4xl font-bold text-center mb-16 text-gray-900"
			>
				Technical Skills
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{skills.map(({ name, icon, rating }, index) => (
					<motion.div
						key={name}
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ delay: index * 0.1 }}
						whileHover={{ y: -8 }}
						className="group relative"
					>
						<div className="h-full bg-white/95 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 shadow-sm hover:shadow-lg transition-all">
							<div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-blue-100/50">
								{icon}
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">
								{name}
							</h3>
							<div className="flex items-center gap-2">
								<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
									<div
										className="h-full bg-gradient-to-r from-primary to-blue-400 transition-all"
										style={{
											width: `${(rating / 5) * 100}%`,
										}}
									/>
								</div>
								<span className="text-sm font-medium text-primary">
									{`${(rating / 5) * 100}%`}
								</span>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	</section>
));

SkillsSection.displayName = 'SkillsSection';
