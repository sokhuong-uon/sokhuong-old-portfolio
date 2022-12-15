import { useSpring } from '@react-spring/three'
import { a } from '@react-spring/web'
import {
	ExperienceDetail as ExperienceDetailPropsType,
	useApplicationStore
} from 'store'
import { Carousel } from './Carousel'

export type ExperienceDetailProps = ExperienceDetailPropsType

export const ExperienceDetail: React.FC<ExperienceDetailProps> = ({
	illustration,
	skill,
	description
}) => {
	const state = useApplicationStore()

	const { opacity } = useSpring({
		opacity: state.experienceDetialVisible ? 1 : 0,
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
			className="w-full h-full max-w-lg p-6 text-white"
		>
			<div className="relative w-full h-2/5">
				<button
					onClick={() => state.falsifyExperienceDetailVisibility()}
					className="pointer-events-auto"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="26"
						fill="none"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeWidth="2"
							d="M25 25 1 1m24 0L1 25"
						/>
					</svg>
				</button>
			</div>

			{/* Description */}
			<div className="w-full h-3/5">
				<h3 className="font-semibold opacity-70">{illustration}</h3>

				<h2 className="text-4xl font-semibold">{skill}</h2>

				<h3 className="text-sm font-light opacity-80">{description}</h3>

				{/* Carousel */}
				<Carousel />

				{/* Link */}
				<a className="relative w-full mt-12 border rounded-full border-opacity-20 h-14 fcc">
					<p className="absolute text-2xl left-6">VISIT</p>
					<p className="text-white">haha.com</p>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="47"
						height="16"
						fill="none"
						className="absolute right-6"
					>
						<path
							fill="#fff"
							d="M46.707 8.707a1 1 0 0 0 0-1.414L40.343.929a1 1 0 1 0-1.414 1.414L44.586 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM0 9h46V7H0v2Z"
						/>
					</svg>
				</a>
			</div>
		</a.section>
	)
}
