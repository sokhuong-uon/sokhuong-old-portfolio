import { a } from '@react-spring/three'
import { useFrame } from '@react-three/fiber'
import { useActive } from 'hooks/r3f/useActive'
import React, { useRef } from 'react'
import { ExperienceViewProps } from '../ExperienceView'

export const ThreeJS: React.FC<ExperienceViewProps> = ({ experienceTrack }) => {
	const mesh = useRef<THREE.Mesh>(null!)
	const group = useRef<THREE.Group>(null!)

	const { animatingPosition } = useActive('threejs')

	useFrame((_, delta) => {
		mesh.current.rotation.x += delta * 0.3
		mesh.current.rotation.y += delta * 0.3
	})

	return (
		<a.group ref={group}>
			<a.mesh
				ref={mesh}
				scale={0.5}
				// @ts-ignore
				position={animatingPosition}
			>
				<torusKnotGeometry args={[1, 0.3, 80, 20]} />
				<meshBasicMaterial color={'white'} />
			</a.mesh>

			<ambientLight />
		</a.group>
	)
}
