import { Navigation } from '@/components/navigation';
import { HeroSection } from './hero';
import { SkillsSection } from './skills';
import { ProjectsSection } from './project';
import { ContactSection } from './contact';

export default function Home(): JSX.Element {
	return (
		<>
			<Navigation />
			<main id="main">
				<HeroSection />
				<SkillsSection />
				<ProjectsSection />
				<ContactSection />
			</main>
		</>
	);
}
