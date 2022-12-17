import { ExperienceViewProps } from '@r3f/experience'
import { a, useSpring } from '@react-spring/three'
import { ReactThreeFiber, useFrame } from '@react-three/fiber'
import { useActive } from 'hooks/r3f/useActive'
import React, { useRef } from 'react'
import { useApplicationStore } from 'store'

export const Animation: React.FC<ExperienceViewProps> = ({
	experienceTrack
}) => {
	const mesh = useRef<THREE.Mesh>(null!)
	const group = useRef<THREE.Group>(null!)

	const { animatingPosition } = useActive('animation')

	useFrame((_, delta) => {
		mesh.current.rotation.x += delta * 0.3
		mesh.current.rotation.y += delta * 0.3
	})

	return (
		<a.group ref={group} position={[4, 0, 0]}>
			<a.mesh
				ref={mesh}
				scale={0.5}
				// @ts-ignore
				position={animatingPosition}
			>
				<icosahedronGeometry />
				<meshBasicMaterial color={'white'} />
			</a.mesh>

			<ambientLight />
		</a.group>
	)
}
