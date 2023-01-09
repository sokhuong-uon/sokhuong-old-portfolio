import type { NextPage } from 'next'
import Head from 'next/head'

const Design: NextPage = () => {
	return (
		<>
			<Head>
				<title>Sokhuong | Design</title>
				<meta name="Description" content="Web Developer. Design with Figma" />
			</Head>

			<main className="relative w-screen h-screen">
				<iframe
					src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FTfiRagjhd1GX3DH2kivVtB%2FPortfolio%3Fnode-id%3D0%253A1%26t%3DYATiV6PZ8F5B4Ljd-1"
					className="w-full h-full border pointer-events-auto border-opacity-10"
					allowFullScreen
				></iframe>
			</main>
		</>
	)
}

export default Design
