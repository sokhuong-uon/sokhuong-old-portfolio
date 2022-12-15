import {
	Center,
	Float,
	OrbitControls,
	PerspectiveCamera,
	Sparkles,
	Text3D,
	View
} from '@react-three/drei'
import { ContactSectionProps } from 'components/ContactSection'
import { IntroductionSectionProps } from 'components/IntroductionSection'
import React from 'react'
import { ContactView } from './ContactView'
import { ExperienceView } from './ExperienceView'

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
	const sizes = React.useMemo(() => {
		return new Float32Array(Array.from({ length: 20 }, () => Math.random() * 4))
	}, [])

	return (
		<>
			{/* Introduction */}
			<View track={introductionTrack}>
				<Center>
					<Float floatIntensity={2} speed={2}>
						<Sparkles
							count={20}
							color="orange"
							scale={4}
							size={sizes}
						></Sparkles>
						<Text3D bevelEnabled font={'/font.json'} bevelSize={0.005}>
							Hi
							<meshBasicMaterial color={'gray'}></meshBasicMaterial>
						</Text3D>
					</Float>
				</Center>

				<PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
				<OrbitControls makeDefault enableDamping />
			</View>

			{/* Experience */}
			<ExperienceView experienceTrack={experienceTrack} />

			{/* Contact */}
			<ContactView contactTrack={contactTrack} />
		</>
	)
}
