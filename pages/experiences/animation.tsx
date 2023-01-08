import type { NextPage } from 'next'
import Head from 'next/head'
import { Description } from 'pages'
import { useRef } from 'react'
import { Decks } from '../../components/dom/Decks'

const cards = [
	'/experience/animation/gsap.jpg',
	'/experience/animation/react-spring.jpg'
]

const AnimationExperience: NextPage = () => {
	const mainRef = useRef<HTMLElement>(null!)

	return (
		<>
			<Head>
				<title>Sokhuong | Animation</title>
				<meta
					name="Description"
					content="Interactive website with animation. Experience with linear interpulation, gsap, twean, and react spring"
				/>

				{/* Open Graph */}
				<meta property="og:title" content="Sokhuong | Animation" />
				<meta
					property="og:description"
					content="Animation | React | ThreeJS | React Spring"
				/>
				<meta
					property="og:image"
					content="https://sokhuong.vercel.app/social/animation.png"
				/>
			</Head>

			<section
				ref={mainRef}
				className={`relative pointer-events-auto w-full h-full overflow-hidden`}
			>
				<Decks cards={cards} />

				<Description
					description="Illustrate nuances of purpose through interaction."
					intro="CONVEY INTRICATE"
					skill="ANIMATIONS"
				/>
			</section>
		</>
	)
}

export default AnimationExperience
