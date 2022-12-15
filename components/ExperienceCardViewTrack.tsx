import React from 'react'

type ExperienceCardViewTrackProps = {
	trackRef: React.MutableRefObject<HTMLDivElement>
}

const ExperienceCardViewTrack: React.FC<ExperienceCardViewTrackProps> = ({
	trackRef
}) => {
	return (
		<>
			<div ref={trackRef} className="w-full h-56 bg-red-600 snap-center">
				ExperienceCardViewTrack
			</div>
		</>
	)
}

export { ExperienceCardViewTrack }
