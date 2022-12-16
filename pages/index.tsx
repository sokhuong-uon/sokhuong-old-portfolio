import { Poppins } from '@next/font/google'
import { HtmlContent } from '@dom'
import { Meta } from '@components/Meta'
import { ThreeDContent } from '@r3f'
import type { NextPage } from 'next'
import { useRef } from 'react'

const poppins = Poppins({
	weight: [
		'300', // light
		'400', // normal
		'500', // medium
		'600', // semibold
		'700' // bold
	],
	variable: '--font-poppins',
	subsets: ['latin']
})

const Home: NextPage = () => {
	const introductionRef = useRef<HTMLDivElement>(null!)
	const contactRef = useRef<HTMLDivElement>(null!)

	const mainRef = useRef<HTMLElement>(null!)

	const experienceRef = useRef<HTMLDivElement>(null!)

	return (
		<>
			{/* Head and Meta tags */}
			<Meta />

			<main
				ref={mainRef}
				id="container"
				className={`${poppins.className} relative w-screen h-screen overflow-hidden`}
			>
				{/* Contain Canvas Element */}
				<figure id="3d-content" className="absolute inset-0 z-0 w-full h-full">
					{/* Pass main as event source of the canvas */}
					<ThreeDContent
						eventSource={mainRef}
						experienceTrack={experienceRef}
						introductionTrack={introductionRef}
						contactTrack={contactRef}
					/>
				</figure>

				{/* Contain HTML Overlay */}
				<div
					id="html-content"
					className="absolute inset-0 z-10 w-full h-full pointer-events-none touch-none"
				>
					<HtmlContent
						experienceTrack={experienceRef}
						introductionTrack={introductionRef}
						contactTrack={contactRef}
					/>
				</div>
			</main>
		</>
	)
}

export default Home
