import type { NextPage } from 'next'
import Head from 'next/head'

import { ThreeDContent } from 'components/ThreeDContent'
import { HtmlContent } from 'components/HtmlContent'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Sokhuong | Creative Developer</title>
				<meta
					name="Description"
					content="Web Developer. Frontend, WebGL, 3D, Three.js, Animation, React Three Fiber, Blender, React.js, TypeScript."
				/>
			</Head>

			<div
				id="container"
				style={{
					width: '100vw',
					backgroundColor: 'black',
					position: 'relative'
				}}
				className="mobile-fit-height"
			>
				{/* Contain Canvas Element */}
				<figure id="3d-content" className="absolute inset-0 z-0 w-full h-full">
					<ThreeDContent />
				</figure>

				{/* Contain HTML Overlay */}
				<main
					id="html-content"
					className="absolute inset-0 z-10 w-full h-full pointer-events-none touch-none"
				>
					<HtmlContent />
				</main>
			</div>
		</>
	)
}

export default Home
