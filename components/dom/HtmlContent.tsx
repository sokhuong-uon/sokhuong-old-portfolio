import { ContactSection } from './ContactSection'
import { ExperienceSection } from './ExperienceSection'
import { IntroductionSection } from './IntroductionSection'

type HtmlContentProps = {}

export const HtmlContent: React.FC<HtmlContentProps> = () => {
	return (
		<div
			id="scroll-container"
			className="relative w-full h-full overflow-x-hidden overflow-y-auto pointer-events-auto scroll-smooth snap-y"
		>
			<div id="intro" className="w-full h-full snap-center">
				<IntroductionSection />
			</div>

			<div id="experience-container" className="w-full h-full snap-center">
				<ExperienceSection />
			</div>

			<div id="contact" className="relative w-full h-full snap-center">
				<ContactSection />
			</div>
		</div>
	)
}
