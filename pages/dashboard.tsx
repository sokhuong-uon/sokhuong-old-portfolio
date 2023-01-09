import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'

const Dashboard: NextPage = () => {
	const mainRef = useRef<HTMLElement>(null!)

	return (
		<>
			<Head>
				<title>Dashboard</title>
				<meta
					name="Description"
					content="Dashboard for personal progress on the internet"
				/>

				{/* Open Graph */}
				<meta property="og:title" content="Sokhuong | Dashboard" />
				<meta
					property="og:description"
					content="Web Developer. Personal Progress Dashboard"
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
				Dashboard comming Soon!
			</section>
		</>
	)
}

export default Dashboard
