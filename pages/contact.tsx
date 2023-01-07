import { MediaLinks } from '@components/dom'
import { Meta } from '@components/Meta'
import type { NextPage } from 'next'
import { useRef } from 'react'

const Contact: NextPage = () => {
	const mainRef = useRef<HTMLElement>(null!)

	return (
		<>
			{/* Head and Meta tags */}
			<Meta />

			<section
				ref={mainRef}
				className={`relative w-full h-full pointer-events-none overflow-hidden`}
			>
				<MediaLinks />
			</section>
		</>
	)
}

export default Contact
