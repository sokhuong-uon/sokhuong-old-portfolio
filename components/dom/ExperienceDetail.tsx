import { useSpring } from '@react-spring/three'
import { a } from '@react-spring/web'
import {
	ExperienceDetail as ExperienceDetailPropsType,
	useApplicationStore
} from 'store'
import { useResponsiveStore } from 'store/screen'
import { ProjectDetailButton } from './button/ProjectDetailButton'
import { XButton } from './button/XButton'
import { Carousel } from './Carousel'

export type ExperienceDetailProps = ExperienceDetailPropsType

export const ExperienceDetail: React.FC<ExperienceDetailProps> = ({
	illustration,
	skill,
	description
}) => {
	const state = useApplicationStore()
	const screenSize = useResponsiveStore(state => state.screenSize)

	const { opacity } = useSpring({
		opacity:
			state.experienceDetialVisible ||
			screenSize === 'lg' ||
			screenSize === 'xl' ||
			screenSize === '2xl'
				? 1
				: 0,
		config: {
			duration: 600
		}
	})

	return (
		<a.section
			style={{
				pointerEvents: state.experienceDetialVisible ? 'auto' : 'none',
				opacity: opacity
			}}
			className="w-full h-full text-white"
		>
			{/* X Button */}
			<div className="relative w-full pointer-events-auto lg:hidden h-2/5">
				<XButton />
			</div>

			{/* Description */}
			<div className="w-full sm:h-3/5 lg:h-full">
				<div className="flex flex-col items-center justify-center w-full h-full gap-16 py-6">
					<div className="w-full px-6 xl:px-20">
						<h3 className="py-2 text-lg font-semibold tracking-wider opacity-40">
							{illustration}
						</h3>

						<h2 className="text-4xl font-semibold lg:text-5xl">{skill}</h2>

						<h3 className="py-2 font-normal opacity-50">{description}</h3>
					</div>

					{/* Carousel */}
					<Carousel />

					<div className="absolute top-auto hidden w-16 h-64 bg-black md:visible xl:left-5 -left-8 blur-md"></div>
					<div className="absolute top-auto hidden w-16 h-64 bg-black md:visible xl:right-5 -right-8 blur-md"></div>

					{/* Link */}
					<div className="relative w-full h-12 px-3 overflow-hidden rounded-full pointer-events-auto fcc xl:px-20">
						<ProjectDetailButton />
					</div>
				</div>
			</div>
		</a.section>
	)
}
