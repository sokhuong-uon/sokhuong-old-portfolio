import { ExperienceItemSelect } from '@r3f/experience'
import { useApplicationStore } from 'store'
import { ExperienceDetail } from './ExperienceDetail'

export const ExperienceSection = () => {
	const experienceDetialVisible = useApplicationStore(
		state => state.experienceDetialVisible
	)

	return (
		<div className="relative items-center w-full h-full fcc">
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
