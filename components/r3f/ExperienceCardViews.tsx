import { ContactSectionProps } from 'components/ContactSection'
import { IntroductionSectionProps } from 'components/IntroductionSection'
import React from 'react'
import { ContactView } from './ContactView'
import { ExperienceView } from './ExperienceView'
import { IntroductionView } from './IntroductionView'

export type ExperienceCardViewsProps = {
	experienceTrack: React.MutableRefObject<HTMLDivElement>
	introductionTrack: IntroductionSectionProps['threeDIntroductionRef']
	contactTrack: ContactSectionProps['contactRef']
}

export const ExperienceCardViews: React.FC<ExperienceCardViewsProps> = ({
	experienceTrack,
	introductionTrack,
	contactTrack
}) => {
	return (
		<>
			{/* Introduction */}
			<IntroductionView introductionTrack={introductionTrack} />

			{/* Experience */}
			<ExperienceView experienceTrack={experienceTrack} />

			{/* Contact */}
			<ContactView contactTrack={contactTrack} />
		</>
	)
}
