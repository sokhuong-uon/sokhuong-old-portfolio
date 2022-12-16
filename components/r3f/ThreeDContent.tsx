import { ContactSectionProps } from '@dom/ContactSection'
import { IntroductionSectionProps } from '@dom/IntroductionSection'
import { CanvasViews } from '@r3f/CanvasViews'
import { Canvas } from '@react-three/fiber'

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
			<CanvasViews
				experienceTrack={experienceTrack}
				introductionTrack={introductionTrack}
				contactTrack={contactTrack}
			></CanvasViews>
		</Canvas>
	)
}
