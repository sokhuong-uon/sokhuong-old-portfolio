import { ThreeJSExperience } from '@r3f/experience'
import { PerspectiveCamera, View } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import React, { useLayoutEffect } from 'react'
import { useApplicationStore } from 'store'

export type ExperienceViewProps = {
	experienceTrack: React.MutableRefObject<HTMLDivElement>
}

export const ExperienceView: React.FC<ExperienceViewProps> = ({
	experienceTrack
}) => {
	const trueUpExperienceDetailVisibility = useApplicationStore(
		state => state.trueUpExperienceDetailVisibility
	)
	const falsifyExperienceDetailVisibility = useApplicationStore(
		state => state.falsifyExperienceDetailVisibility
	)

	const size = useThree(state => state.size)

	useLayoutEffect(() => {
		if (size.width >= 1024) trueUpExperienceDetailVisibility()
		else falsifyExperienceDetailVisibility()
	}, [
		size,
		trueUpExperienceDetailVisibility,
		falsifyExperienceDetailVisibility
	])

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
