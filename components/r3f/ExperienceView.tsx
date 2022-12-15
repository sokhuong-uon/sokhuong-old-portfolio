import { PerspectiveCamera, View } from '@react-three/drei'
import React from 'react'
import { ThreeJSExperience } from './ExperienceView/ThreeJSExperience'

export type ExperienceViewProps = {
	experienceTrack: React.MutableRefObject<HTMLDivElement>
}

export const ExperienceView: React.FC<ExperienceViewProps> = ({
	experienceTrack
}) => {
	return (
		<View track={experienceTrack}>
			{/* Three.js */}
			<ThreeJSExperience experienceTrack={experienceTrack} />

			{/* React.js */}
			{/* <ReactJSExperience experienceTrack={experienceTrack} /> */}

			<PerspectiveCamera makeDefault fov={50} position={[0, 0, 6]} />
		</View>
	)
}
