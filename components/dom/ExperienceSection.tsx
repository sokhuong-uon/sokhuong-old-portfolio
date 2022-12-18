import { ExperienceItemSelect } from '@r3f/experience'
import React from 'react'
import { useApplicationStore } from 'store'
import { ExperienceDetail } from './ExperienceDetail'

export type ExperienceSectionProps = {
	experienceTrack: React.MutableRefObject<HTMLDivElement>
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
	experienceTrack
}) => {
	const experienceDetialVisible = useApplicationStore(
		state => state.experienceDetialVisible
	)

	return (
		<div className="relative items-center w-full h-full fcc">
			<div
				id="ex-track"
				ref={experienceTrack}
				className={
					'absolute inset-0 w-full touch-none touch-pan-y h-full pointer-events-auto' +
					`${experienceDetialVisible === true ? ' z-0' : ' z-20'}`
				}
			></div>

			<div
				className={
					'relative flex-shrink-0 w-full h-full lg:w-1/2' +
					`${experienceDetialVisible === true ? ' z-20' : ' z-0'}`
				}
			>
				<ExperienceDetail />
			</div>

			<div className="absolute w-full h-full pointer-events-none lg:relative">
				<div className="relative z-30 flex flex-col justify-end w-full h-full">
					<div className="w-full fcc h-1/2">
						<ExperienceItemSelect />
					</div>
				</div>
			</div>
		</div>
	)
}
