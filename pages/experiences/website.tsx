import type { NextPage } from 'next'
import Head from 'next/head'
import { Description } from 'pages'
import { useRef } from 'react'
import { Decks } from '../../components/dom/Decks'

const cards = [
	'/experience/three/a.png',
	'/experience/three/a.png',
	'/experience/three/a.png',
	'/experience/three/a.png',
	'/experience/three/a.png'
]

const WebsiteExperience: NextPage = () => {
	const mainRef = useRef<HTMLElement>(null!)

	return (
		<>
			<Head>
				<title>Sokhuong | Web dev</title>
				<meta
					name="Description"
					content="Build Web Application with various technologies such as react, vue, tailwind css, nodejs"
				/>

				{/* Open Graph */}
				<meta property="og:title" content="Sokhuong | Web Application" />
				<meta
					property="og:description"
					content="Build Web Application with various Technologies"
				/>
				<meta
					property="og:image"
					content="https://sokhuong.vercel.app/social/website.png"
				/>
			</Head>

			<section
				ref={mainRef}
				className={`relative pointer-events-auto w-full h-full overflow-hidden`}
			>
				<Decks cards={cards} />

				<Description
					description="Embracing Performance, Accessibility & Aesthetic."
					intro="CREATE RESPONSIVE"
					skill="WEBSITES"
				/>
			</section>
		</>
	)
}

export default WebsiteExperience
