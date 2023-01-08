import { a, useTransition } from '@react-spring/web'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'

const Home: NextPage = () => {
	const mainRef = useRef<HTMLElement>(null!)

	return (
		<>
			<Head>
				<title>Sokhuong | Creative Coding</title>
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
				className="relative w-full h-full overflow-hidden text-white "
			>
				<Description
					description="Create Immersive 3D experience and interactive UI."
					intro="I AM SOKHUONG"
					skill="WEB DEVELOPER"
				/>
			</section>
		</>
	)
}

type DescriptionProps = {
	description: string
	skill: string
	intro: string
}

export const Description: React.FC<DescriptionProps> = ({
	description,
	intro,
	skill
}) => {
	return (
		<div className="absolute inset-0 flex text-white pointer-events-none">
			<div className="relative flex flex-col w-full h-full">
				<div className="relative flex flex-col items-center justify-center w-full h-1/2">
					<h3 className="relative w-full h-8 overflow-hidden text-lg font-semibold tracking-wider opacity-40">
						<AnimatedIntro text={intro} />
					</h3>

					<h2 className="relative w-full h-12 overflow-hidden text-4xl font-semibold lg:text-5xl">
						<AnimatedIntro text={skill} />
					</h2>
				</div>

				<div className="relative fcc w-full h-1/2">
					<h1 className="relative w-full h-12 overflow-hidden font-normal sm:h-7">
						<AnimatedParagraph text={description}></AnimatedParagraph>
					</h1>
				</div>
			</div>
		</div>
	)
}

function AnimatedParagraph({ text }: { text: string }) {
	const transitions = useTransition([text], {
		from: { opacity: 0 },
		enter: { opacity: 0.6 },
		leave: { opacity: 0 },
		config: {
			duration: 1000
		},
		delay: 1000
	})

	return transitions((style, item) => (
		<a.span className={'absolute w-full h-full text-center'} style={style}>
			{item}
		</a.span>
	))
}

function AnimatedIntro({ text }: { text: string }) {
	const transitions = useTransition([text], {
		from: { top: '-100px' },
		enter: { top: '0' },
		leave: { top: '100px' },
		config: {
			duration: 1000
		}
	})

	return transitions((style, item) => (
		<a.span className={'absolute w-full h-full text-center'} style={style}>
			{item}
		</a.span>
	))
}

export default Home
