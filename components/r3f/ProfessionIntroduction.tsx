import { useRef } from 'react'
import { Text, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export const ProfessionIntroduction = () => {
	const web = useRef<THREE.Group>(null!)
	const developer = useRef<THREE.Group>(null!)
	const profession = useRef<THREE.Group>(null!)

	const scroll = useScroll()

	useFrame(() => {
		const secondPageRange = scroll.range(1 / 10, 1 / 10)
		const thirdPageRange = scroll.range(2 / 10, 1 / 10)

		profession.current.position.y = -1.26 + secondPageRange * 0.6
		// @ts-ignore
		web.current.fillOpacity = secondPageRange - thirdPageRange * 2
		const webScale = 5 - thirdPageRange
		web.current.scale.set(webScale, webScale, webScale)
		// @ts-ignore
		developer.current.fillOpacity = 1 - thirdPageRange

		if (thirdPageRange > 0.5) {
			developer.current.position.x = -(thirdPageRange - 0.5) * 10
		}
	})

	return (
		<>
			<group ref={profession} position={[0, -1, 0]}>
				{/* WEB */}
				<Text
					ref={web}
					font="/Poppins/Poppins-SemiBold.ttf"
					scale={5}
					// anchorY="top"
					position={[0, 0.65, 0]}
				>
					WEB
				</Text>

				{/* DEVELOPER */}
				<Text
					ref={developer}
					font="/Poppins/Poppins-SemiBold.ttf"
					scale={5}
					position={[0, -0.025, -1]}
				>
					DEVELOPER
				</Text>
			</group>
			<mesh position={[0, -1.55, 0]}>
				<planeGeometry args={[4, 1]} />
				<meshBasicMaterial color={'black'} />
			</mesh>
		</>
	)
}
