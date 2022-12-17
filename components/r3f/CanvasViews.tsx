import { ContactSectionProps } from '@dom/ContactSection'
import { IntroductionSectionProps } from '@dom/IntroductionSection'
import { ContactView } from '@r3f/contact'
import { ExperienceView, ExperienceViewProps } from '@r3f/experience'
import { IntroductionView } from '@r3f/introduction'
import React from 'react'

export type CanvasViewsProps = {
	introductionTrack: IntroductionSectionProps['threeDIntroductionRef']
	experienceTrack: ExperienceViewProps['experienceTrack']
	contactTrack: ContactSectionProps['contactRef']
}

export const CanvasViews: React.FC<CanvasViewsProps> = ({
	introductionTrack,
	experienceTrack,
	contactTrack
}) => {
	return (
		<>
			<IntroductionView introductionTrack={introductionTrack} />

			<ExperienceView experienceTrack={experienceTrack} />

			<ContactView contactTrack={contactTrack} />
		</>
	)
}
