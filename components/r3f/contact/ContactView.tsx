import { useTexture, View } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

export type ContactViewProps = {
	contactTrack: React.MutableRefObject<HTMLDivElement>
}

export const ContactView: React.FC<ContactViewProps> = ({ contactTrack }) => {
	const group = useRef<THREE.Group>(null!)
	// const plane = useRef<THREE.Mesh>(null!)
	const tetrahedron = useRef<THREE.Mesh>(null!)

	// const texture = useTexture('/portrail1.png')

	useFrame((_, delta) => {
		if (tetrahedron.current) {
			tetrahedron.current.rotation.x += delta * 0.5
			tetrahedron.current.rotation.y += delta * 0.25
		}
	})

	return (
		<View track={contactTrack}>
			<group ref={group} position={[0, 0, -0.5]}>
				{/* <mesh ref={plane}>
					<planeGeometry args={[4, 8, 3, 6]} />
					<meshBasicMaterial transparent map={texture} />
				</mesh> */}
				<mesh ref={tetrahedron}>
					<tetrahedronGeometry />
					<meshNormalMaterial />
				</mesh>
			</group>
		</View>
	)
}
