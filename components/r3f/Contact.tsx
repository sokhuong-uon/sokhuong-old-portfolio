import { Html, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

export const Contact = () => {
	const group = useRef<THREE.Group>(null!)
	const plane = useRef<THREE.Mesh>(null!)

	const scroll = useScroll()
	const texture = useTexture('/portrail1.png')

	useFrame(() => {
		const thirdPageRange = scroll.range(2 / 10, 1 / 10)
		const fourthPageRange = scroll.range(3 / 10, 1 / 10)
		const sixthPageRange = scroll.range(6 / 10, 1 / 10)

		// @ts-ignore
		plane.current.material.opacity = sixthPageRange
	})

	return (
		<>
			<group ref={group}>
				<mesh ref={plane}>
					<planeGeometry args={[4, 8, 3, 6]} />
					<meshBasicMaterial transparent opacity={0} map={texture} />
				</mesh>
			</group>
		</>
	)
}
