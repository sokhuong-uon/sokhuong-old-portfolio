import { Poppins } from '@next/font/google'
import { PropsWithChildren } from 'react'
import { Dock } from './dom/dock/Dock'
import { ThreeDContent } from './r3f'

const poppins = Poppins({
	weight: [
		'300', // light
		'400', // normal
		'500', // medium
		'600' // semibold
		// '700' // bold
	],
	variable: '--font-poppins',
	subsets: ['latin']
})

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="relative overflow-hidden">
			<figure id="3d-content" className="absolute inset-0 w-full h-full">
				<ThreeDContent />
			</figure>

			<main
				className={`${poppins.className} relative w-screen h-screen pointer-events-none overflow-hidden`}
			>
				{children}
			</main>

			<div className="absolute inset-0 pointer-events-none">
				<div className="flex flex-col items-center justify-end w-full h-full">
					<Dock></Dock>
				</div>
			</div>
		</div>
	)
}
export { Layout }
