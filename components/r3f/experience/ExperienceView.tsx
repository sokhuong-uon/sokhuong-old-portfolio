import { Card } from '@r3f/experience/Card'
import {
	Animation,
	Backend,
	ListGroup,
	Modeling,
	ReactJS,
	ThreeJS
} from '@r3f/experience/list'
import { ResponsiveGroup } from '@r3f/experience/ResponsiveGroup'
import { PerspectiveCamera, View } from '@react-three/drei'
import React from 'react'

export type ExperienceViewProps = {
	experienceTrack: React.MutableRefObject<HTMLDivElement>
}

export const ExperienceView: React.FC<ExperienceViewProps> = ({
	experienceTrack
}) => {
	return (
		<View track={experienceTrack}>
			{/* Main Group that contain Experience Card & Experiences like threejs, reactjs, ...			 */}
			<ResponsiveGroup>
				{/* Main Card */}
				<Card />

				<ListGroup>
					<ThreeJS experienceTrack={experienceTrack} />
					<ReactJS experienceTrack={experienceTrack} />
					<Animation experienceTrack={experienceTrack} />
					<Modeling experienceTrack={experienceTrack} />
					<Backend experienceTrack={experienceTrack} />
				</ListGroup>
			</ResponsiveGroup>

			<PerspectiveCamera makeDefault fov={50} position={[0, 0, 6]} />
		</View>
	)
}
