import { Canvas } from '@react-three/fiber'
// import { Scroll, ScrollControls, View } from '@react-three/drei'
// import { Welcome } from './r3f/Welcome'
// import { SelfIntroduction } from './r3f/SelfIntroduction'
// import { ProfessionIntroduction } from './r3f/ProfessionIntroduction'
// import { Experience } from './r3f/Experience'
// import { Contact } from './r3f/Contact'
import {
	ExperienceCardViews,
	ExperienceCardViewsProps
} from './r3f/ExperienceCardViews'
// import { MediaLinks } from './MediaLinks'
// import { Acknowledgement } from './Acknowledgement'
import { IntroductionSectionProps } from './IntroductionSection'
import { ContactSectionProps } from './ContactSection'

type ThreeDContentProps = {
	eventSource: React.MutableRefObject<HTMLElement>

	// View track
	experienceTrack: React.MutableRefObject<HTMLDivElement>
	introductionTrack: IntroductionSectionProps['threeDIntroductionRef']
	contactTrack: ContactSectionProps['contactRef']
}

export const ThreeDContent: React.FC<ThreeDContentProps> = ({
	eventSource,
	experienceTrack,
	introductionTrack,
	contactTrack
}) => {
	return (
		<Canvas id="r3f-canvas" eventSource={eventSource}>
			{/* Helper */}
			{/* <gridHelper rotation-x={-Math.PI / 2} /> */}

			{/* Views */}
			<ExperienceCardViews
				experienceTrack={experienceTrack}
				introductionTrack={introductionTrack}
				contactTrack={contactTrack}
			></ExperienceCardViews>
		</Canvas>
	)
}
