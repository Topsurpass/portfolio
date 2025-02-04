import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, User, Briefcase, Code, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
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
	icon: JSX.Element;
	ref: RefObject<HTMLElement> | null;
}

export const Navigation = ({ scrollToSection, refs }: NavigationProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems: NavItem[] = [
		{ label: 'Profile', icon: <User size={18} />, ref: refs.profileRef },
		{ label: 'Skills', icon: <Code size={18} />, ref: refs.skillsRef },
		{
			label: 'Projects',
			icon: <Briefcase size={18} />,
			ref: refs.projectsRef,
		},
		{
			label: 'Contact',
			icon: <FileText size={18} />,
			ref: refs.contactRef,
		},
	];

	return (
		<nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b z-50 shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo Section */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						className="flex items-center flex-shrink-0"
					>
						<div className="flex items-center space-x-2 group">
							<Code className="h-7 w-7 text-primary transition-colors" />
							<span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
								Olowosuyi T.
							</span>
						</div>
					</motion.div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-4">
						{navItems.map((item) => (
							<Button
								key={item.label}
								variant="ghost"
								className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium group transition-all"
								onClick={() =>
									item.ref && scrollToSection(item.ref)
								}
							>
								<div className="flex items-center gap-2">
									{item.icon}
									<span className="md:text-lg relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all group-hover:after:w-full">
										{item.label}
									</span>
								</div>
							</Button>
						))}
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<Button
							variant="ghost"
							size="icon"
							className="text-gray-600 hover:text-primary"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</Button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className="md:hidden absolute w-full bg-white/95 backdrop-blur-md border-b"
				>
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{navItems.map((item) => (
							<Button
								key={item.label}
								variant="ghost"
								className="w-full text-gray-600 hover:text-primary hover:bg-gray-50/50 justify-start px-4 py-3 rounded-md"
								onClick={() => {
									item.ref && scrollToSection(item.ref);
									setIsMenuOpen(false);
								}}
							>
								<div className="flex items-center gap-3">
									{item.icon}
									{item.label}
								</div>
							</Button>
						))}
					</div>
				</motion.div>
			)}
		</nav>
	);
};
