import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'

const Blog: NextPage = () => {
	const mainRef = useRef<HTMLElement>(null!)

	return (
		<>
			<Head>
				<title>Blog</title>
				<meta
					name="Description"
					content="Articles around technologies and programming"
				/>

				{/* Open Graph */}
				<meta property="og:title" content="Sokhuong | Blog Post" />
				<meta
					property="og:description"
					content="Web Developer. Personal Blog Post"
				/>
				<meta
					property="og:image"
					content="https://sokhuong.vercel.app/social/home.png"
				/>
			</Head>

			<section
				ref={mainRef}
				className="relative w-full h-full overflow-hidden text-white fcc "
			>
				Comming Soon!
			</section>
		</>
	)
}

export default Blog
