import { ContactSectionProps } from '@dom/ContactSection'
import { IntroductionSectionProps } from '@dom/IntroductionSection'
import { ContactView } from '@r3f/contact'
import { ExperienceView } from '@r3f/experience'
import { IntroductionView } from '@r3f/introduction'
import React from 'react'

export type CanvasViewsProps = {
	experienceTrack: React.MutableRefObject<HTMLDivElement>
	introductionTrack: IntroductionSectionProps['threeDIntroductionRef']
	contactTrack: ContactSectionProps['contactRef']
}

export const CanvasViews: React.FC<CanvasViewsProps> = ({
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
