import { Text, useScroll } from '@react-three/drei'
import { useFrame, useThree, extend } from '@react-three/fiber'
import React, { useRef } from 'react'
import { MeshLineGeometry, MeshLineMaterial, raycast } from 'meshline'
import { Object3DNode, MaterialNode } from '@react-three/fiber'

extend({ MeshLineGeometry, MeshLineMaterial })

type LineProps = {
	points: number[]
	width: number
	color: string
}

const Line: React.FC<LineProps> = ({ points, width, color }) => {
	return (
		<mesh raycast={raycast} rotation-z={Math.PI / 2} position={[-0, -2, 0]}>
			<meshLineGeometry points={points} />
			<meshLineMaterial
				transparent
				depthTest={false}
				lineWidth={width}
				color={color}
				dashArray={0.08}
				dashRatio={0.95}
			/>
		</mesh>
	)
}

export const SelfIntroduction = () => {
	const group = useRef<THREE.Group>(null!)
	const textI = useRef<THREE.Group>(null!)
	const sokhuong = useRef<THREE.Group>(null!)
	const scroll = useScroll()

	const viewport = useThree(state => state.viewport)

	useFrame(() => {
		const firstPageRange = scroll.range(0, 1 / 10)
		const secondPageRange = scroll.range(1 / 10, 1 / 10)

		group.current.position.y = firstPageRange * 5 - 4
		if (firstPageRange > 0.4) {
			sokhuong.current.position.x =
				-firstPageRange * 5 + 6 - secondPageRange * 5
		}
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
					strokeWidth={'2.5%'}
					strokeOpacity={1}
					position={[-0.09, 0, 0]}
				>
					I
				</Text>

				<Text
					font="/Poppins/Poppins-SemiBold.ttf"
					fillOpacity={0}
					strokeColor={'white'}
					strokeWidth={'2.5%'}
					strokeOpacity={1}
				>
					A
				</Text>

				<Text
					font="/Poppins/Poppins-SemiBold.ttf"
					fillOpacity={0}
					strokeColor={'white'}
					strokeWidth={'2.5%'}
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
				position={[5, 0, 0]}
				scale={6}
			>
				SOKHUONG
			</Text>

			{/* Lines */}
			<mesh scale={[1, 0.1, 1]} position={[0, -1.2, 0]}>
				<planeGeometry args={[4, 0.2]} />
			</mesh>
			<mesh scale={[1, 0.1, 1]} position={[0, -1.1, 0]}>
				<planeGeometry args={[4, 0.2]} />
			</mesh>
			<mesh scale={[1, 0.1, 1]} position={[0, -1, 0]}>
				<planeGeometry args={[4, 0.2]} />
			</mesh>
		</>
	)
}

declare module '@react-three/fiber' {
	interface ThreeElements {
		meshLineGeometry: Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>
		meshLineMaterial: MaterialNode<MeshLineMaterial, typeof MeshLineMaterial>
	}
}
