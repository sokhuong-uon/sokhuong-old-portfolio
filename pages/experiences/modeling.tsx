import type { NextPage } from 'next'
import Head from 'next/head'
import { Description } from 'pages'
import { useRef } from 'react'
import { Decks } from '../../components/dom/Decks'

const cards = [
	{
		image: '/experience/modeling/tuff.jpg',
		link: 'twitter.com/SOKHUONG3/status/1443839474559946753?s=20&t=n6CuvCu0jszxk4QWLo1HRA'
	}
]

const ModelingExperience: NextPage = () => {
	const mainRef = useRef<HTMLElement>(null!)

	return (
		<>
			<Head>
				<title>Sokhuong | 3D Modeling</title>
				<meta
					name="Description"
					content="3D Modeling with Blender and bring to the web with Three.js and react three fiber + drei"
				/>

				{/* Open Graph */}
				<meta property="og:title" content="Sokhuong | 3D Modeling" />
				<meta property="og:description" content="3D Modeling with Blender" />
				<meta
					property="og:image"
					content="https://sokhuong.vercel.app/social/modeling.png"
				/>
			</Head>

			<section
				ref={mainRef}
				className={`relative pointer-events-auto w-full h-full overflow-hidden`}
			>
				<Decks cards={cards} />

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
