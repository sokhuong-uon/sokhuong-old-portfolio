import ContactAnim from '@components/dom/contact/ContactAnim'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'
import Link from 'next/link'

const Contact: NextPage = () => {
	const mainRef = useRef<HTMLElement>(null!)

	return (
		<>
			{/* Head and Meta tags */}
			<Head>
				<title>Sokhuong | Contact</title>
				<meta
					name="Description"
					content="twitter:@SOKHUONG3, youtuve:@alotofcode, github:sokhuong-uon"
				/>

				{/* Open Graph */}
				<meta property="og:title" content="Sokhuong | Contact" />
				<meta property="og:description" content="Sokhuong Social Profile" />
				<meta
					property="og:image"
					content="https://sokhuong.vercel.app/social/contact.png"
				/>
			</Head>

			<section
				ref={mainRef}
				className="relative w-full h-full overflow-hidden pointer-events-none fcc"
			>
				<ContactAnim />

				<Link
					href="/acknowledgement"
					className="absolute flex items-center justify-center w-12 h-12 text-xl text-center text-white rounded-full pointer-events-auto bg-white/20 top-2 right-2"
				>
					?
				</Link>
			</section>
		</>
	)
}

export default Contact
