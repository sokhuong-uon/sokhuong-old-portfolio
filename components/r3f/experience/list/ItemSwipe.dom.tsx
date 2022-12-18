import { useApplicationStore } from 'store'

export const ExperienceItemSwipe = () => {
	const viewingExperience = useApplicationStore(
		state => state.viewingExperience
	)
	const setViewingExperience = useApplicationStore(
		state => state.setViewingExperience
	)

	const previous = () => {
		if (viewingExperience === 'threejs') setViewingExperience('backend')
		if (viewingExperience === 'reactjs') setViewingExperience('threejs')
		if (viewingExperience === 'animation') setViewingExperience('reactjs')
		if (viewingExperience === 'modeling') setViewingExperience('animation')
		if (viewingExperience === 'backend') setViewingExperience('modeling')
	}
	const next = () => {
		if (viewingExperience === 'threejs') setViewingExperience('reactjs')
		if (viewingExperience === 'reactjs') setViewingExperience('animation')
		if (viewingExperience === 'animation') setViewingExperience('modeling')
		if (viewingExperience === 'modeling') setViewingExperience('backend')
		if (viewingExperience === 'backend') setViewingExperience('threejs')
	}

	return (
		<div className="relative flex items-center justify-between w-full px-6 text-white pointer-events-none ">
			{/* Previous */}
			<button
				className="p-1 bg-black rounded-md opacity-75 pointer-events-auto bg-opacity-20"
				onClick={() => previous()}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
				>
					<path
						fill="currentColor"
						d="M15.535 3.515 7.05 12l8.485 8.485 1.415-1.414L9.878 12l7.072-7.071-1.415-1.414Z"
					/>
				</svg>
			</button>

			{/* Next */}
			<button
				className="p-1 bg-black rounded-md opacity-75 pointer-events-auto bg-opacity-20"
				onClick={() => next()}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
				>
					<path
						fill="currentColor"
						d="M8.465 20.485 16.95 12 8.465 3.515 7.05 4.929 14.122 12 7.05 19.071l1.415 1.414Z"
					/>
				</svg>
			</button>
		</div>
	)
}
