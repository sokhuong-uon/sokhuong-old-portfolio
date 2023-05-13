import type { NextPage } from 'next'
import Head from 'next/head'

const Resume: NextPage = () => {
	return (
		<>
			<Head>
				<title>Sokhuong | Resume</title>
				<meta
					name="description"
					content="Software Engineer, Web Developer Resume"
				/>

				{/* Open Graph */}
				<meta property="og:title" content="Sokhuong | Web Dev" />
				<meta
					property="og:description"
					content="Web Developer. Creative coding"
				/>
				<meta
					property="og:image"
					content="https://sokhuong.vercel.app/social/home.png"
				/>
			</Head>

			<main className="relative w-full h-full overflow-hidden text-white">
				<h1>Place resume</h1>
			</main>
		</>
	)
}

export default Resume
