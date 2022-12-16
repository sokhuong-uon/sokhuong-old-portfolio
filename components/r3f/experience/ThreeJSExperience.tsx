import { a, useSpring } from '@react-spring/three'
import {
	MeshDistortMaterial,
	MeshWobbleMaterial,
	useCursor
} from '@react-three/drei'
import { ReactThreeFiber, useFrame, useThree } from '@react-three/fiber'
import { useDrag, useWheel } from '@use-gesture/react'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { useApplicationStore } from 'store'
import { ExperienceViewProps } from './ExperienceView'

export const ThreeJSExperience: React.FC<ExperienceViewProps> = ({
	experienceTrack
}) => {
	const mesh = useRef<THREE.Mesh>(null!)
	const plane = useRef<THREE.Mesh>(null!)
	const group = useRef<THREE.Group>(null!)
	const state = useApplicationStore()

	const mainGroup = useRef<THREE.Group>(null!)

	const [hover, setHover] = useState(false)
	useCursor(hover)

	const { animatingPosition } = useSpring({
		animatingPosition:
			state.viewingExperience === 'threejs' && state.experienceDetialVisible
				? ([0, 1.5, 0] as ReactThreeFiber.Vector3)
				: ([0, 0, 0] as ReactThreeFiber.Vector3)
	})

	const { animatingPlaneScale } = useSpring({
		animatingPlaneScale:
			state.viewingExperience === 'threejs' && state.experienceDetialVisible
				? ([5, 3, 5] as ReactThreeFiber.Vector3)
				: ([1, 1, 1] as ReactThreeFiber.Vector3)
	})

	const gp = useRef(0)

	useDrag(
		({ active, movement: [mx, my], delta: [dx] }) => {
			gp.current += dx * 0.008
		},
		{
			target: experienceTrack.current
		}
	)

	useFrame((_, delta) => {
		mesh.current.rotation.x += delta * 0.3
		mesh.current.rotation.y += delta * 0.3
	})

	const size = useThree(state => state.size)
	useLayoutEffect(() => {
		if (size.width > 1024) {
			mainGroup.current.position.x = 2
		} else {
			mainGroup.current.position.x = 0
		}
	}, [size])

	return (
		<group ref={mainGroup}>
			<a.group ref={group}>
				<a.mesh
					ref={mesh}
					scale={0.5}
					// @ts-ignore
					position={animatingPosition}
				>
					<torusKnotGeometry args={[1, 0.3, 80, 20]} />
					<meshBasicMaterial color={'white'} />
					{/* <sphereGeometry args={[1, 30, 30]} /> */}
					{/* <MeshWobbleMaterial factor={2} speed={10} /> */}
				</a.mesh>

				<ambientLight />

				{size.width < 1024 ? (
					<a.mesh
						ref={plane}
						position={[0, 0, -1]}
						onClick={() => {
							state.setViewingExperience('threejs')
							state.trueUpExperienceDetailVisibility()
						}}
						// @ts-ignore
						scale={animatingPlaneScale}
						onPointerEnter={() => setHover(true)}
						onPointerLeave={() => setHover(false)}
					>
						<planeGeometry args={[2, 3, 20, 30]} />
						<MeshDistortMaterial
							color={'hotpink'}
							distort={0.3}
							radius={1}
							// speed={10}
						></MeshDistortMaterial>
					</a.mesh>
				) : null}
			</a.group>
		</group>
	)
}
