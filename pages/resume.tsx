import { Resume } from '@components/dom/resume'
import type { NextPage } from 'next'
import Head from 'next/head'

const ResumePage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Sokhuong | Resume</title>
				<meta
					name="description"
					content="Software Engineer, Web Developer Resume"
				/>
				<meta name="keywords" content="Sokhuong, Resume, Web Developer" />
				<meta name="author" content="Sokhuong" />

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

			<div className="flex justify-center w-full h-full overflow-y-auto pointer-events-auto">
				<Resume />
			</div>
		</>
	)
}

export default ResumePage
