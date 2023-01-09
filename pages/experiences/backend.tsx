import type { NextPage } from 'next'
import Head from 'next/head'
import { Description } from 'pages'
import { useRef } from 'react'
import { Decks } from '../../components/dom/Decks'

const cards = [
	{
		image: '/experience/backend/python.jpg',
		link: 'python.org'
	},
	{
		image: '/experience/backend/nodejs.jpg',
		link: 'nodejs.org'
	},

	{
		image: '/experience/backend/nestjs.jpg',
		link: 'nestjs.com'
	},
	{
		image: '/experience/backend/golang.jpg',
		link: 'go.dev'
	}
]

const BackendExperience: NextPage = () => {
	const mainRef = useRef<HTMLElement>(null!)

	return (
		<>
			<Head>
				<title>Sokhuong | Backend</title>
				<meta
					name="Description"
					content="Build and deploy back-end application with Node.js frameworks with Nuxt.js and Next.js. Experience with strapi and golang"
				/>

				{/* Open Graph */}
				<meta property="og:title" content="Sokhuong | Backend Application" />
				<meta
					property="og:description"
					content="Back-end app with Node.js framworks"
				/>
				<meta
					property="og:image"
					content="https://sokhuong.vercel.app/social/backend.png"
				/>
			</Head>

			<section
				ref={mainRef}
				className={`relative pointer-events-auto w-full h-full overflow-hidden`}
			>
				<Decks cards={cards} />

				<Description
					description="With Nest.JS & Golang."
					intro="BUILD"
					skill="BACK-END APP"
				/>
			</section>
		</>
	)
}

export default BackendExperience
