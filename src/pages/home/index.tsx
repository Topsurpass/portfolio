import { MotionConfig } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { HeroSection } from './hero';
import { WorkSection } from './work';
import { ExperienceSection } from './experience';
import { CapabilitiesSection } from './capabilities';
import { ContactSection } from './contact';

export default function Home(): JSX.Element {
	return (
		<MotionConfig reducedMotion="user">
			<Navigation />
			<main id="main">
				<HeroSection />
				<WorkSection />
				<ExperienceSection />
				<CapabilitiesSection />
				<ContactSection />
			</main>
		</MotionConfig>
	);
}
