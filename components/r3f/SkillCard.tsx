import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export const SkillCard = () => {
	const geometry = useMemo(() => {
		const geometry = new THREE.PlaneGeometry(2, 3)
		return geometry
	}, [])

	const group = useRef<THREE.Group>(null!)

	const scroll = useScroll()

	useFrame(() => {
		const thirdPageRange = scroll.range(2 / 10, 1 / 10)
		const fourthPageRange = scroll.range(3 / 10, 1 / 10)
		const fifthPageRange = scroll.range(4 / 10, 1 / 10)
		const sixthPageRange = scroll.range(5 / 10, 1 / 10)
		const seventhPageRange = scroll.range(6 / 10, 1 / 10)
		const eighthPageRange = scroll.range(7 / 10, 1 / 10)
		const ninethPageRange = scroll.range(8 / 10, 1 / 10)

		group.current.position.x =
			3 -
			(thirdPageRange - 0.5) * 4 -
			4 *
				(fourthPageRange +
					fifthPageRange +
					sixthPageRange +
					seventhPageRange +
					eighthPageRange +
					ninethPageRange)

		group.current.position.y =
			-1 +
			1 *
				(fourthPageRange +
					fifthPageRange +
					sixthPageRange +
					seventhPageRange +
					eighthPageRange +
					ninethPageRange)
	})

	return (
		<group ref={group}>
			<mesh geometry={geometry}>
				<meshBasicMaterial color={'white'} />
			</mesh>

			<mesh geometry={geometry} position={[2.5, -0.5, 0]}>
				<meshBasicMaterial color={'white'} />
			</mesh>

			<mesh geometry={geometry} position={[5, -1, 0]}>
				<meshBasicMaterial color={'white'} />
			</mesh>

			<mesh geometry={geometry} position={[7.5, -1.5, 0]}>
				<meshBasicMaterial color={'white'} />
			</mesh>

			<mesh geometry={geometry} position={[10, -2, 0]}>
				<meshBasicMaterial color={'white'} />
			</mesh>
		</group>
	)
}
