import { Button } from '@/components/ui/button';
import { Smile, Briefcase, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { forwardRef, type ForwardedRef } from 'react';
import cv from './Olowosuyi_Temitope.pdf';

export const HeroSection = forwardRef<HTMLElement>(
	(_props, ref: ForwardedRef<HTMLElement>) => (
		<section
			ref={ref}
			className="relative min-h-screen pt-28 pb-20 px-4 z-10 flex items-center"
		>
			<div className="max-w-7xl mx-auto w-full">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className="flex flex-col lg:flex-row items-center justify-between gap-12"
				>
					{/* Text Content */}
					<div className="lg:w-1/2 space-y-8 text-center lg:text-left">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.3 }}
						>
							<h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
								<span className="block mb-3">
									Olowosuyi Temitope
								</span>
								<span className="text-transparent text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-primary to-blue-600">
									Frontend Developer
								</span>
							</h1>
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.5 }}
								className="text-xl md:text-2xl text-gray-600 mt-6"
							>
								Crafting visually stunning and highly
								interactive digital experiences.
							</motion.p>
						</motion.div>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.7 }}
							className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0"
						>
							I specialize in building responsive, pixel-perfect
							interfaces with modern web technologies. From
							intricate animations to seamless interactions, I
							bring creativity and technical excellence together
							to elevate the user experience.
						</motion.p>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.9 }}
							className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
						>
							<Button
								size="lg"
								className="gap-2 px-8 py-6 text-lg bg-primary hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/40"
							>
								<Briefcase className="w-5 h-5" />
								View Projects
							</Button>

							<a href={cv} download>
								<Button
									variant="outline"
									size="lg"
									className="gap-2 px-8 py-6 text-lg border-2 border-primary text-primary hover:bg-primary/5"
								>
									<Download className="w-5 h-5" />
									Download CV
								</Button>
							</a>
						</motion.div>
					</div>

					{/* Animated Graphic */}
					<motion.div
						whileHover={{ scale: 1.02 }}
						className="relative lg:w-1/2 md:flex justify-center hidden"
					>
						<div className="relative w-80 h-80 md:w-96 md:h-96">
							<div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 rounded-full shadow-2xl" />

							<div className="absolute inset-0 flex items-center justify-center">
								<motion.div
									animate={{ rotate: [0, 15, -15, 0] }}
									transition={{
										duration: 8,
										repeat: Infinity,
										repeatType: 'mirror',
									}}
								>
									<Smile className="w-48 h-48 md:w-60 md:h-60 text-white/90" />
								</motion.div>
							</div>

							<div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10" />

							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg"
							>
								<span className="text-sm font-semibold text-primary">
									5+ Years Experience
								</span>
							</motion.div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
);

HeroSection.displayName = 'HeroSection';
