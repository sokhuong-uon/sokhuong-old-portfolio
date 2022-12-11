import type { NextPage } from 'next'
import Head from 'next/head'
import { Poppins } from '@next/font/google'

import { Page1 } from 'components/Page1'
import { Page2 } from 'components/Page2'
import { Page3 } from 'components/Page3'
import { Page4 } from 'components/Page4'

const poppins = Poppins({
	weight: [
		'300', // light
		'400', // normal
		'500', // medium
		'600', // semibold
		'700' // bold
	],
	variable: '--font-poppins',
	subsets: ['latin']
})

const Design: NextPage = () => {
	return (
		<>
			<Head>
				<title>Sokhuong | Design</title>
				<meta name="Description" content="Web Developer. Design with Figma" />
			</Head>

			<div
				id="container"
				className={`${poppins.className} relative w-screen h-screen`}
			>
				{/* Contain HTML Overlay */}
				<main
					id="html-content"
					className="absolute inset-0 z-10 w-full h-full pointer-events-none touch-none"
				>
					<div className="relative w-full h-full">
						<Page1 />
						<Page2 />
						<Page3 />
						<Page4 />
					</div>
				</main>
			</div>
		</>
	)
}

export default Design
