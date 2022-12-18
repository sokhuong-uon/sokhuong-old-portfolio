import { a, useSpring } from '@react-spring/three'
import { MeshDistortMaterial, useCursor } from '@react-three/drei'
import { ReactThreeFiber } from '@react-three/fiber'
import React from 'react'
import { useApplicationStore } from 'store'
import { useResponsiveStore } from 'store/screen'

export const Card = () => {
	const plane = React.useRef<THREE.Mesh>(null!)

	const [hover, setHover] = React.useState(false)
	useCursor(hover)

	const state = useApplicationStore()
	const screenSize = useResponsiveStore(state => state.screenSize)

	const { animatingPlaneScale } = useSpring({
		animatingPlaneScale: state.experienceDetialVisible
			? ([5, 3, 5] as ReactThreeFiber.Vector3)
			: ([1, 1, 1] as ReactThreeFiber.Vector3)
	})

	return (
		<>
			{screenSize === 'xs' || screenSize === 'sm' || screenSize === 'md' ? (
				<a.mesh
					castShadow
					ref={plane}
					position={[0, 0, -1]}
					onClick={() => {
						state.trueUpExperienceDetailVisibility()
					}}
					// @ts-ignore
					scale={animatingPlaneScale}
					onPointerEnter={() => setHover(true)}
					onPointerLeave={() => setHover(false)}
				>
					<planeGeometry args={[2, 3, 20, 30]} />
					<MeshDistortMaterial
						color={'black'}
						distort={0.3}
						radius={1}
					></MeshDistortMaterial>
				</a.mesh>
			) : null}
		</>
	)
}
