import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useIsomorphicLayoutEffect } from '../hooks'

const mobileFitHeight = () => {
	let vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vh', `${vh}px`)
}

function MyApp({ Component, pageProps }: AppProps) {
	useIsomorphicLayoutEffect(() => {
		mobileFitHeight()
		window.addEventListener('resize', () => {
			mobileFitHeight()
		})
	}, [])

	return <Component {...pageProps} />
}

export default MyApp
