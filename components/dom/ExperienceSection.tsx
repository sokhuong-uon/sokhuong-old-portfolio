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
		<div className="relative items-center w-full h-full overflow-hidden fcc">
			<div className="relative z-10 w-full h-full lg:w-1/2">
				<ExperienceDetail
					description={experiences[viewingExperience].description}
					skill={experiences[viewingExperience].skill}
					illustration={experiences[viewingExperience].illustration}
				/>
			</div>

			<div className="absolute w-full h-full pointer-events-none lg:relative">
				<div className="relative w-full h-full fcc">
					<div className="absolute z-0 w-1/2 h-3 gap-2 bottom-[10.5rem] fcc">
						<button className="w-5 transition-transform bg-white border rounded-full pointer-events-auto peer hover:scale-125 aspect-square"></button>
						<button className="w-5 transition-transform border rounded-full pointer-events-auto hover:scale-125 aspect-square"></button>
						<button className="w-5 transition-transform border rounded-full pointer-events-auto hover:scale-125 aspect-square"></button>
						<button className="w-5 transition-transform border rounded-full pointer-events-auto hover:scale-125 aspect-square"></button>
						<button className="w-5 transition-transform border rounded-full pointer-events-auto hover:scale-125 aspect-square"></button>
					</div>
				</div>
			</div>

			<div
				ref={experienceTrack}
				className="absolute w-full h-full pointer-events-auto touch-none touch-pan-y"
			></div>
		</div>
	)
}
