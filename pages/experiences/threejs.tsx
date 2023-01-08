import type { NextPage } from 'next'
import Head from 'next/head'
import { Description } from 'pages'
import { useRef } from 'react'
import { Decks } from '../../components/dom/Decks'

const cards = [
	'/experience/three/a.png',
	'/experience/three/a.png',
	'/experience/three/a.png'
]

const ThreeJSExperiences: NextPage = () => {
	const mainRef = useRef<HTMLElement>(null!)

	return (
		<>
			<Head>
				<title>Sokhuong | Three.js</title>
				<meta
					name="Description"
					content="Create immersive web application with three.js + react spring + react three fiber + drei + Blender"
				/>

				{/* Open Graph */}
				<meta property="og:title" content="Sokhuong | Three.js" />
				<meta
					property="og:description"
					content="Create Immersive Web Application"
				/>
				<meta
					property="og:image"
					content="https://sokhuong.vercel.app/social/three.png"
				/>
			</Head>

			<section
				ref={mainRef}
				className={`relative pointer-events-auto w-full h-full overflow-hidden`}
			>
				<Decks cards={cards} />

				<Description
					description="For High Performance Visualization & 3D Environment."
					intro="CREATE IMMERSIVE"
					skill="3D EXPERIENCE"
				/>
			</section>
		</>
	)
}

export default ThreeJSExperiences
