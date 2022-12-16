import React from 'react'
import { MediaLinks } from './MediaLinks'

export type ContactSectionProps = {
	contactRef: React.MutableRefObject<HTMLDivElement>
}

export const ContactSection: React.FC<ContactSectionProps> = ({
	contactRef
}) => {
	return (
		<div className="relative w-full h-full text-white">
			{/* View Track */}
			<div ref={contactRef} className="absolute w-full h-full"></div>

			{/* HTML */}
			<div className="bottom-0 flex flex-col justify-between w-full pb-6 h-1/2">
				<MediaLinks></MediaLinks>
			</div>
		</div>
	)
}
