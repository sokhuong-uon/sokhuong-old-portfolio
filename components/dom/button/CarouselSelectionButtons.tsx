import { useApplicationStore } from 'store'

export const CarouselSelectionButtons = () => {
	const viewingExperience = useApplicationStore(
		state => state.viewingExperience
	)
	const setViewingExperience = useApplicationStore(
		state => state.setViewingExperience
	)

	return (
		<div className="gap-2 fcc">
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
