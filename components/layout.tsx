import { Poppins } from 'next/font/google'
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
		<div className="relative w-screen overflow-hidden mobile-fit-height">
			<figure id="3d-content" className="absolute inset-0 w-full h-full">
				<ThreeDContent />
			</figure>

			<section
				className={`${poppins.className} relative w-screen mobile-fit-height pointer-events-none overflow-hidden`}
			>
				{children}
			</section>

			<div className="absolute inset-0 pointer-events-none">
				<div className="flex flex-col items-center justify-end w-full h-full">
					<Dock></Dock>
				</div>
			</div>
		</div>
	)
}
export { Layout }
