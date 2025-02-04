import { motion } from 'framer-motion';
import { forwardRef, type ForwardedRef } from 'react';
import {
	ArrowUpRight,
	Github,
	Globe,
	Cpu,
	Database,
	Cloud,
} from 'lucide-react';

const projects = [
	{
		title: 'E-Commerce Platform',
		description:
			'Scalable headless commerce solution with Next.js and TypeScript',
		tech: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
		caseStudy: 1,
		link: '#',
		github: '#',
	},
	{
		title: 'AI Analytics Dashboard',
		description:
			'Real-time analytics platform with machine learning integrations',
		tech: ['React', 'Python', 'TensorFlow', 'AWS'],
		caseStudy: 2,
		link: '#',
		github: '#',
	},
	{
		title: 'Collaboration Suite',
		description:
			'Enterprise-grade collaboration tools with end-to-end encryption',
		tech: ['TypeScript', 'Node.js', 'WebSockets', 'Redis'],
		caseStudy: 3,
		link: '#',
		github: '#',
	},
	{
		title: 'IoT Monitoring System',
		description: 'Real-time device monitoring dashboard for industrial IoT',
		tech: ['React', 'GraphQL', 'Kafka', 'Kubernetes'],
		caseStudy: 4,
		link: '#',
		github: '#',
	},
] as const;

export const ProjectsSection = forwardRef(
	(_props, ref: ForwardedRef<HTMLElement>) => (
		<section ref={ref} className="py-20 bg-gray-50/50 relative z-10">
			<div className="max-w-7xl mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					className="text-2xl md:text-4xl font-bold text-center mb-16 text-gray-900"
				>
					Projects
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="group relative h-full"
						>
							<div className="h-full bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-sm hover:shadow-lg transition-all overflow-hidden">
								<div className="relative aspect-video bg-gradient-to-r from-primary/10 to-blue-100/50">

									<div className="absolute bottom-4 left-4 flex gap-2">
										<motion.div
											whileHover={{ scale: 1.05 }}
											className="bg-primary text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
										>
											<span>
												Case Study {project.caseStudy}
											</span>
											<ArrowUpRight className="w-4 h-4" />
										</motion.div>
									</div>
								</div>

								<div className="p-6">
									<h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
										{project.title}
									</h3>
									<p className="text-gray-600 mb-4">
										{project.description}
									</p>

									<div className="flex flex-wrap gap-2 mb-4">
										{project.tech.map((tech) => (
											<div
												key={tech}
												className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2"
											>
												{tech === 'Next.js' && (
													<Globe className="w-4 h-4" />
												)}
												{tech === 'AWS' && (
													<Cloud className="w-4 h-4" />
												)}
												{tech === 'React' && (
													<Cpu className="w-4 h-4" />
												)}
												{tech === 'GraphQL' && (
													<Database className="w-4 h-4" />
												)}
												{tech}
											</div>
										))}
									</div>

									<div className="flex gap-3 mt-4">
										<motion.a
											whileHover={{ scale: 1.05 }}
											href={project.link}
											className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
										>
											<Globe className="w-5 h-5" />
											<span className="text-sm">
												Live Demo
											</span>
										</motion.a>
										<motion.a
											whileHover={{ scale: 1.05 }}
											href={project.github}
											className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
										>
											<Github className="w-5 h-5" />
											<span className="text-sm">
												Source Code
											</span>
										</motion.a>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
);

ProjectsSection.displayName = 'ProjectsSection';
