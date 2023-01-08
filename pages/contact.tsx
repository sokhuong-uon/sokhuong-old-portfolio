import ContactAnim from '@components/dom/contact/ContactAnim'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'

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
				className={`relative w-full fcc h-full pointer-events-none overflow-hidden`}
			>
				<ContactAnim />
			</section>
		</>
	)
}

export default Contact
