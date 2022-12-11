import { Html, Text, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export const Welcome = () => {
	const text = useRef<THREE.Object3D>(null!)
	const html = useRef<HTMLDivElement>(null!)
	const scroll = useScroll()

	useFrame(() => {
		const firstPageRange = scroll.range(0, 1 / 10)
		// @ts-ignore
		text.current.fillOpacity = 1 - firstPageRange * 1.5
		text.current.scale.set(
			10 + firstPageRange * 20,
			10 + firstPageRange * 20,
			10 + firstPageRange * 20
		)
		if (html.current) {
			html.current.style.opacity = Math.max(
				0,
				1 - firstPageRange * 8
			).toString()
			console.log(html.current.style.opacity)
		}
	})

	return (
		<>
			{/* Welcome Message */}
			<Text ref={text} font="/Poppins/Poppins-SemiBold.ttf" scale={10}>
				Hi
			</Text>

			{/* Scroll Down Instruction */}
			<Html
				ref={html}
				position={[0, -2.5, 0]}
				center
				className="flex-col text-white fcc"
			>
				<p className="w-32 mb-6 text-sm font-semibold tracking-wider text-center opacity-60">
					Scroll down
				</p>

				{/* Scroll down arrow  */}
				<p className="opacity-60">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="47"
						fill="none"
					>
						<path
							fill="currentColor"
							d="M7.293 46.707a1 1 0 0 0 1.414 0l6.364-6.364a1 1 0 0 0-1.414-1.414L8 44.586l-5.657-5.657A1 1 0 0 0 .93 40.343l6.364 6.364ZM7 0v46h2V0H7Z"
						/>
					</svg>
				</p>
			</Html>
			{/* Scroll Down Arrow */}
		</>
	)
}
