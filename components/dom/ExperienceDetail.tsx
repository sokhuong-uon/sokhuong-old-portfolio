import { ExperienceItemSwipe } from '@components/r3f/experience'
import { ExperienceDescription } from '@r3f/experience/Description.dom'
import { useSpring } from '@react-spring/three'
import { a } from '@react-spring/web'
import { useApplicationStore } from 'store'
import { useResponsiveStore } from 'store/screen'
import { ProjectDetailButton } from './button/ProjectDetailButton'
import { XButton } from './button/XButton'
import { Carousel } from './Carousel'

export const ExperienceDetail = () => {
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
			className="relative w-full h-full text-white lg:py-32"
		>
			<div className="relative flex items-center w-full pointer-events-auto lg:hidden h-2/5">
				<div className="absolute top-0 left-0">
					<XButton />
				</div>
				<ExperienceItemSwipe />
			</div>

			{/* Description */}
			<div className="relative w-full h-3/5 sm:h-3/5 lg:h-full">
				<div className="grid w-full h-full grid-cols-1 grid-rows-4 py-6">
					<div className="relative w-full row-span-1">
						<ExperienceDescription />
					</div>

					<div className="relative w-full row-span-2">
						<Carousel />
					</div>

					<div className="relative fcc w-full row-span-1">
						<div className="relative w-full h-12 px-3 overflow-hidden rounded-full pointer-events-auto fcc xl:px-20">
							<ProjectDetailButton />
						</div>
					</div>
				</div>
			</div>
		</a.section>
	)
}
