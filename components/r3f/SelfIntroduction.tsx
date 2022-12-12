import { Text, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { IntroductionLines } from './IntroductionLines'

export const SelfIntroduction = () => {
	const group = useRef<THREE.Group>(null!)

	const textI = useRef<THREE.Group>(null!)
	const textA = useRef<THREE.Group>(null!)
	const textM = useRef<THREE.Group>(null!)

	const sokhuong = useRef<THREE.Group>(null!)
	const scroll = useScroll()

	useFrame(() => {
		const firstPageRange = scroll.range(0, 1 / 10)
		const secondPageRange = scroll.range(1 / 10, 1 / 10)
		const thirdPageRange = scroll.range(2 / 10, 1 / 10)

		group.current.position.y = firstPageRange * 5 - 4
		sokhuong.current.position.x =
			-firstPageRange * 10 + 10 - secondPageRange * 10

		// I AM text
		textI.current.position.x = Math.min(-0.09, -secondPageRange * 1.5)
		textM.current.position.x = Math.max(0.08, secondPageRange * 1.5)

		// @ts-ignore
		textM.current.strokeOpacity = 1 - secondPageRange * 5
		// @ts-ignore
		textI.current.strokeOpacity = 1 - secondPageRange * 5

		const textAScale = 1 + thirdPageRange * 10

		textA.current.scale.set(textAScale, textAScale, textAScale)
		// @ts-ignore
		textA.current.strokeOpacity = 1 - thirdPageRange * 2.5
		// @ts-ignore
		textA.current.strokeWidth = 0.001 - thirdPageRange * 0.001
	})

	return (
		<>
			{/* I AM */}
			<group ref={group} scale={6} position={[0, -4, 0]}>
				<Text
					ref={textI}
					font="/Poppins/Poppins-SemiBold.ttf"
					fillOpacity={0}
					strokeColor={'white'}
					strokeWidth={0.001}
					strokeOpacity={1}
					position={[-0.09, 0, 0]}
				>
					I
				</Text>

				<Text
					ref={textA}
					font="/Poppins/Poppins-SemiBold.ttf"
					fillOpacity={0}
					strokeColor={'white'}
					strokeWidth={0.001}
					strokeOpacity={1}
				>
					A
				</Text>

				<Text
					ref={textM}
					font="/Poppins/Poppins-SemiBold.ttf"
					fillOpacity={0}
					strokeColor={'white'}
					strokeWidth={0.001}
					strokeOpacity={1}
					position={[0.08, 0, 0]}
				>
					M
				</Text>
			</group>

			{/* SOKHUONG */}
			<Text
				ref={sokhuong}
				font="/Poppins/Poppins-SemiBold.ttf"
				// position={[5, 0, 0]}
				scale={6}
			>
				SOKHUONG
			</Text>

			{/* Lines */}
			<IntroductionLines />
		</>
	)
}
