import { useApplicationStore } from 'store'
import { ContactSection, ContactSectionProps } from './ContactSection'
import { ExperienceSection, ExperienceSectionProps } from './ExperienceSection'
import {
	IntroductionSection,
	IntroductionSectionProps
} from './IntroductionSection'

type HtmlContentProps = {
	experienceTrack: ExperienceSectionProps['experienceTrack']
	introductionTrack: IntroductionSectionProps['threeDIntroductionRef']
	contactTrack: ContactSectionProps['contactRef']
}

export const HtmlContent: React.FC<HtmlContentProps> = ({
	experienceTrack,
	introductionTrack,
	contactTrack
}) => {
	return (
		<div className="relative w-full h-full overflow-y-auto pointer-events-auto scroll-smooth snap-y">
			{/* Introduction Section */}
			<div className="w-full h-full snap-center">
				<IntroductionSection threeDIntroductionRef={introductionTrack} />
			</div>

			{/* Experience Section */}
			<div
				id="experience-container"
				className="flex w-full h-full overflow-x-scroll snap-center"
			>
				<ExperienceSection experienceTrack={experienceTrack} />
			</div>

			{/* Contact Section */}
			<div className="relative w-full h-full snap-center">
				<ContactSection contactRef={contactTrack} />
			</div>
		</div>
	)
}
