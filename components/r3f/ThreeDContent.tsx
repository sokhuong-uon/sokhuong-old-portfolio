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
	// View track
	introductionTrack,
	experienceTrack,
	contactTrack
}) => {
	return (
		<Canvas
			shadows
			id="r3f-canvas"
			eventSource={eventSource}
			camera={{ position: [0, 0, 15], near: 5, far: 40 }}
		>
			{/* Responsive Scene setup*/}
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
