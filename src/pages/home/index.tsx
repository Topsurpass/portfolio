import { useRef } from 'react';
import { Navigation } from '@/components/navigation';
import { HeroSection } from './hero';
import { SkillsSection } from './skills';
import { ProjectsSection } from './project';
import { ContactSection } from './contact';

export default function Home(): JSX.Element {
	const projectsRef = useRef<HTMLElement | null>(null);
	const skillsRef = useRef<HTMLElement | null>(null);
	const profileRef = useRef<HTMLElement | null>(null);
	const contactRef = useRef<HTMLElement | null>(null);

	const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div className="min-h-screen">

			<Navigation
				scrollToSection={scrollToSection}
				refs={{ profileRef, skillsRef, projectsRef, contactRef }}
			/>

			<HeroSection ref={profileRef} />
			<SkillsSection ref={skillsRef} />
			<ProjectsSection ref={projectsRef} />
			<ContactSection ref={contactRef} />
		</div>
	);
}
