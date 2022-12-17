import { ExperienceViewProps } from '@r3f/experience'
import { a } from '@react-spring/three'
import { useFrame } from '@react-three/fiber'
import { useActive } from 'hooks/r3f/useActive'
import React, { useRef } from 'react'

export const Backend: React.FC<ExperienceViewProps> = ({ experienceTrack }) => {
	const mesh = useRef<THREE.Mesh>(null!)
	const group = useRef<THREE.Group>(null!)

	const { animatingPosition } = useActive('backend')

	useFrame((_, delta) => {
		mesh.current.rotation.x += delta * 0.3
		mesh.current.rotation.y += delta * 0.3
	})

	return (
		<a.group ref={group} position={[8, 0, 0]}>
			<a.mesh
				ref={mesh}
				scale={0.5}
				// @ts-ignore
				position={animatingPosition}
			>
				<latheGeometry />
				<meshBasicMaterial color={'yellow'} />
			</a.mesh>

			<ambientLight />
		</a.group>
	)
}
