import { Layout } from '@components/layout'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import '../styles/globals.css'

const mobileFitHeight = () => {
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`)
}

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		mobileFitHeight()
		window.addEventListener('resize', () => {
			mobileFitHeight()
		})
	}, [])

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
