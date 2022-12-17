import { ContactSectionProps, IntroductionSectionProps } from '@dom'
import { CanvasViews } from '@r3f/CanvasViews'
import { ExperienceViewProps } from '@r3f/experience'
import { Setup } from '@r3f/Setup'
import { Canvas } from '@react-three/fiber'
import { sRGBEncoding } from 'three'

type ThreeDContentProps = {
	eventSource: React.MutableRefObject<HTMLElement>

	// View track
	experienceTrack: ExperienceViewProps['experienceTrack']
	introductionTrack: IntroductionSectionProps['threeDIntroductionRef']
	contactTrack: ContactSectionProps['contactRef']
}

export const ThreeDContent: React.FC<ThreeDContentProps> = ({
	eventSource,

	introductionTrack,
	experienceTrack,
	contactTrack
}) => {
	return (
		<Canvas
			id="r3f-canvas"
			eventSource={eventSource}
			// gl={{ outputEncoding: sRGBEncoding }}
		>
			<Setup />

			{/* Views */}
			<CanvasViews
				introductionTrack={introductionTrack}
				experienceTrack={experienceTrack}
				contactTrack={contactTrack}
			></CanvasViews>
		</Canvas>
	)
}
