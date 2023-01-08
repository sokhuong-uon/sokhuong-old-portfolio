import { useLayoutEffect, useRef } from 'react'
import { useApplicationStore } from 'store'
import { useResponsiveStore } from 'store/screen'

export const ExperienceItemSelect = () => {
	const container = useRef<HTMLDivElement>(null!)

	const viewingExperience = useApplicationStore(
		state => state.viewingExperience
	)
	const experienceDetialVisible = useApplicationStore(
		state => state.experienceDetialVisible
	)
	const setViewingExperience = useApplicationStore(
		state => state.setViewingExperience
	)

	const screenSize = useResponsiveStore(state => state.screenSize)

	useLayoutEffect(() => {
		container.current.style.visibility =
			!experienceDetialVisible ||
			screenSize === 'lg' ||
			screenSize === 'xl' ||
			screenSize === '2xl'
				? 'visible'
				: 'hidden'
	}, [experienceDetialVisible, screenSize])

	return (
		<div ref={container} className="relative fcc gap-2">
			{/* Three.js */}
			<button
				onClick={() => setViewingExperience('threejs')}
				style={{
					backgroundColor: viewingExperience === 'threejs' ? 'white' : 'black'
				}}
				className="w-5 transition-transform border rounded-full pointer-events-auto peer hover:scale-125 aspect-square"
			></button>

			{/* React.js */}
			<button
				onClick={() => setViewingExperience('reactjs')}
				style={{
					backgroundColor: viewingExperience === 'reactjs' ? 'white' : 'black'
				}}
				className="w-5 transition-transform border rounded-full pointer-events-auto hover:scale-125 aspect-square"
			></button>
			{/* Animation */}
			<button
				onClick={() => setViewingExperience('animation')}
				style={{
					backgroundColor: viewingExperience === 'animation' ? 'white' : 'black'
				}}
				className="w-5 transition-transform border rounded-full pointer-events-auto hover:scale-125 aspect-square"
			></button>

			{/* 3D Modeling */}
			<button
				onClick={() => setViewingExperience('modeling')}
				style={{
					backgroundColor: viewingExperience === 'modeling' ? 'white' : 'black'
				}}
				className="w-5 transition-transform border rounded-full pointer-events-auto hover:scale-125 aspect-square"
			></button>

			{/* Backend */}
			<button
				onClick={() => setViewingExperience('backend')}
				style={{
					backgroundColor: viewingExperience === 'backend' ? 'white' : 'black'
				}}
				className="w-5 transition-transform border rounded-full pointer-events-auto hover:scale-125 aspect-square"
			></button>
		</div>
	)
}
