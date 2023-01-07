import type { NextPage } from 'next'
import Head from 'next/head'
import { Description } from 'pages'
import { useRef } from 'react'
import { Decks } from '../../components/dom/Decks'

const ModelingExperience: NextPage = () => {
	const mainRef = useRef<HTMLElement>(null!)

	return (
		<>
			{/* Head and Meta tags */}
			<Head>
				<title>Sokhuong | 3D Modeling</title>
				<meta
					name="Description"
					content="Web Developer. Frontend, WebGL, 3D, Three.js, Animation, React Three Fiber, Blender, React.js, TypeScript."
				/>

				{/* Open Graph */}
				<meta property="og:title" content="Sokhuong | Web Dev" />
				<meta
					property="og:description"
					content="React.js | Vue.js | WebGL | Animation"
				/>
				<meta
					property="og:image"
					content="https://sokhuong.vercel.app/social.png"
				/>
			</Head>

			<section
				ref={mainRef}
				className={`relative pointer-events-auto w-full h-full overflow-hidden`}
			>
				<Decks />

				<Description
					description="For Enhancing Visual Aesthetic."
					intro="CREATE STUNNING"
					skill="3D MODELING"
				/>
			</section>
		</>
	)
}

export default ModelingExperience
