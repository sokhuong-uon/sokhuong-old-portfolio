import { ContactShadows, PerspectiveCamera, Sparkles } from '@react-three/drei'
import React from 'react'
import { WobblyBars } from './WobblyBar'

export type IntroductionViewProps = {
	introductionTrack?: React.MutableRefObject<HTMLDivElement>
}

export const IntroductionView: React.FC<IntroductionViewProps> = ({}) => {
	return (
		<>
			<WobblyBars />

			<Sparkles speed={1} scale={4} />

			<pointLight position={[1, -1, 1]} />
			<directionalLight castShadow position={[2.5, 12, 12]} intensity={0.3} />
			<ContactShadows position={[0, -1.3, 0]} color="hotpink" opacity={0.8} />

			<PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
		</>
	)
}
