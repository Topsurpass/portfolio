import { motion } from 'framer-motion';
import { forwardRef, type ForwardedRef } from 'react';
import { Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ContactMethod {
	icon: JSX.Element;
	label: string;
	value: string;
	href?: string;
}

export const ContactSection = forwardRef(
	(_props, ref: ForwardedRef<HTMLElement>) => {
		const contactMethods: ContactMethod[] = [
			{
				icon: <Mail className="w-5 h-5" />,
				label: 'Email',
				value: 'hello@temitope.com',
				href: 'mailto:hello@temitope.com',
			},
			{
				icon: <Phone className="w-5 h-5" />,
				label: 'Phone',
				value: '+234 812 345 6789',
				href: 'tel:+2348123456789',
			},
			{
				icon: <MapPin className="w-5 h-5" />,
				label: 'Location',
				value: 'Lagos, Nigeria',
			},
		];

		const socialLinks = [
			{
				icon: <Linkedin className="w-5 h-5" />,
				label: 'LinkedIn',
				href: 'https://linkedin.com/in/yourprofile',
			},
			{
				icon: <Github className="w-5 h-5" />,
				label: 'GitHub',
				href: 'https://github.com/yourusername',
			},
		];

		return (
			<section ref={ref} className="py-20 bg-gray-50/50 relative z-10">
				<div className="max-w-7xl mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						className="text-center mb-16"
					>
						<motion.h2
							initial={{ scale: 0.9 }}
							whileInView={{ scale: 1 }}
							className="text-2xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
						>
							Let's Connect
						</motion.h2>
						<p className="text-lg md:text-xl text-gray-600">
							Reach out directly via email or connect through
							social platforms
						</p>
					</motion.div>

					<div className="max-w-3xl mx-auto space-y-12">
						{/* Contact Methods */}
						<div className="grid md:grid-cols-3 gap-6">
							{contactMethods.map((method, index) => (
								<motion.div
									key={method.label}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
									className="p-3 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-200/50"
								>
									<div className="flex items-center gap-4 md:justify-center">
										<div className="">
											{method.icon}
										</div>
										<div className="text-left">
											<h3 className="md:text-lg font-semibold text-gray-900">
												{method.label}
											</h3>
											{method.href ? (
												<Link
													to={method.href}
													className="text-gray-600 hover:text-primary transition-colors"
												>
													{method.value}
												</Link>
											) : (
												<p className="text-gray-600">
													{method.value}
												</p>
											)}
										</div>
									</div>
								</motion.div>
							))}
						</div>

						{/* Social Links */}
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							className="flex flex-wrap justify-center gap-6"
						>
							{socialLinks.map((social, index) => (
								<motion.div
									key={social.label}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									transition={{ delay: index * 0.1 }}
								>
									<Button
										asChild
										variant="outline"
										className="rounded-xl gap-2 border-primary/20 hover:border-primary/40"
									>
										<Link
											to={social.href}
											target="_blank"
											rel="noopener noreferrer"
										>
											{social.icon}
											<span>{social.label}</span>
										</Link>
									</Button>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</section>
		);
	}
);

ContactSection.displayName = 'ContactSection';
