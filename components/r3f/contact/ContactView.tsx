import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

export type ContactViewProps = {
	contactTrack?: React.MutableRefObject<HTMLDivElement>
}

export const ContactView: React.FC<ContactViewProps> = ({ contactTrack }) => {
	const group = useRef<THREE.Group>(null!)
	const tetrahedron = useRef<THREE.Mesh>(null!)

	useFrame((_, delta) => {
		if (tetrahedron.current) {
			tetrahedron.current.rotation.x += delta * 0.1
			tetrahedron.current.rotation.y += delta * 0.1
		}
	})

	return (
		<>
			<group ref={group} position={[0, 0, -0.5]}>
				<mesh scale={4} ref={tetrahedron}>
					<tetrahedronGeometry />
					<meshNormalMaterial />
				</mesh>
			</group>
		</>
	)
}
