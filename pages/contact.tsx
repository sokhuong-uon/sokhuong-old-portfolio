import ContactAnim from '@components/dom/contact/ContactAnim'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'

const Contact: NextPage = () => {
	const mainRef = useRef<HTMLElement>(null!)

	return (
		<>
			{/* Head and Meta tags */}
			<Head>
				<title>Sokhuong | Contact</title>
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
				className={`relative w-full fcc h-full pointer-events-none overflow-hidden`}
			>
				<ContactAnim />
			</section>
		</>
	)
}

export default Contact