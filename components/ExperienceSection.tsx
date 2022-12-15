import { a, useSpring } from '@react-spring/web'
import React from 'react'
import { useApplicationStore } from 'store'
import { ExperienceDetail } from './ExperienceDetail'

export type ExperienceSectionProps = {
	experienceTrack: React.MutableRefObject<HTMLDivElement>
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
	experienceTrack
}) => {
	const experiences = useApplicationStore(state => state.experiences)
	const viewingExperience = useApplicationStore(
		state => state.viewingExperience
	)
	const experienceDetialVisible = useApplicationStore(
		state => state.experienceDetialVisible
	)

	const { listProgressOpacity } = useSpring({
		listProgressOpacity: experienceDetialVisible ? 0 : 1
	})

	return (
		<div className="relative items-center w-full h-full fcc">
			<div
				ref={experienceTrack}
				className="absolute w-full h-full border pointer-events-auto touch-none touch-pan-y"
			></div>

			<ExperienceDetail
				description={experiences[viewingExperience].description}
				skill={experiences[viewingExperience].skill}
				illustration={experiences[viewingExperience].illustration}
			/>

			<a.div
				style={{ opacity: listProgressOpacity }}
				className="absolute w-full h-3 gap-2 bottom-[10.5rem] fcc"
			>
				<div className="w-4 h-4 bg-white border rounded-full"></div>
				<div className="w-4 h-4 border rounded-full"></div>
				<div className="w-4 h-4 border rounded-full"></div>
				<div className="w-4 h-4 border rounded-full"></div>
				<div className="w-4 h-4 border rounded-full"></div>
			</a.div>
		</div>
	)
}
