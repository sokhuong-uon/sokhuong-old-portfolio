import { Poppins } from '@next/font/google'
import { PropsWithChildren } from 'react'
import { Dock } from './dom/dock/Dock'
import { ThreeDContent } from './r3f'

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

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<figure id="3d-content" className="absolute inset-0 w-full h-full">
				<ThreeDContent />
			</figure>

			<main
				className={`${poppins.className} relative w-screen h-screen pointer-events-none overflow-hidden`}
			>
				{children}
			</main>

			<Dock></Dock>
		</>
	)
}
export { Layout }
