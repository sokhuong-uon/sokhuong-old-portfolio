import { useSpring } from '@react-spring/web'
import React from 'react'
import { useApplicationStore } from 'store'
import { CarouselSelectionButtons } from '@dom/button'
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
				id="ex-track"
				ref={experienceTrack}
				className={
					'absolute inset-0 w-full h-full pointer-events-auto' +
					`${experienceDetialVisible === true ? ' z-0' : ' z-20'}`
				}
			></div>

			<div
				className={
					'relative w-full h-full lg:w-1/2' +
					`${experienceDetialVisible === true ? ' z-20' : ' z-0'}`
				}
			>
				<ExperienceDetail
					description={experiences[viewingExperience].description}
					skill={experiences[viewingExperience].skill}
					illustration={experiences[viewingExperience].illustration}
				/>
			</div>

			<div
				className={
					'absolute w-full h-full pointer-events-none lg:relative' +
					`${experienceDetialVisible === true ? ' z-10' : ' z-0'}`
				}
			>
				<div className="relative flex flex-col justify-end w-full h-full">
					<div className="w-full fcc h-1/2">
						<CarouselSelectionButtons />
					</div>
				</div>
			</div>
		</div>
	)
}
