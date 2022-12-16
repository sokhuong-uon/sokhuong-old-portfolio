import { a, useSpring } from '@react-spring/three'
import { MeshDistortMaterial } from '@react-three/drei'
import { ReactThreeFiber, useFrame } from '@react-three/fiber'
import { useDrag } from '@use-gesture/react'
import { useRef } from 'react'
import { useApplicationStore } from 'store'
import { MathUtils } from 'three'
import { ExperienceViewProps } from './ExperienceView'

export const ReactJSExperience: React.FC<ExperienceViewProps> = ({
	experienceTrack
}) => {
	const mesh = useRef<THREE.Mesh>(null!)
	const group = useRef<THREE.Group>(null!)
	const state = useApplicationStore()

	const { animatingPosition } = useSpring({
		animatingPosition:
			state.viewingExperience === 'threejs' && state.experienceDetialVisible
				? ([0, 1.5, 0] as ReactThreeFiber.Vector3)
				: ([0, 0, 0] as ReactThreeFiber.Vector3)
	})

	const { animatingPlaneScale } = useSpring({
		animatingPlaneScale:
			state.viewingExperience === 'threejs' && state.experienceDetialVisible
				? ([2, 1.6, 2] as ReactThreeFiber.Vector3)
				: ([1, 1, 1] as ReactThreeFiber.Vector3)
	})

	const gp = useRef(3)

	// const [{ groupPosition }, api] = useSpring(() => ({
	// 	groupPosition: [0, 0, 0] as ReactThreeFiber.Vector3
	// }))

	useDrag(
		({ active, movement: [mx, my], delta: [dx] }) => {
			gp.current += dx * 0.008
		},
		{
			target: experienceTrack.current
		}
	)

	useFrame((_, delta) => {
		mesh.current.rotation.x += delta * 0.5
		mesh.current.rotation.y += delta * 0.5

		group.current.position.x = MathUtils.damp(
			group.current.position.x,
			gp.current,
			10,
			delta
		)
	})

	return (
		<a.group
			ref={group}
			//@ts-ignore
			position={[3, 0, 0]}
		>
			<a.mesh
				ref={mesh}
				scale={0.5}
				// @ts-ignore
				position={animatingPosition}
			>
				<torusKnotGeometry />
			</a.mesh>

			<ambientLight />

			<a.mesh
				position={[0, 0, -1]}
				// position={groupPosition}
				onClick={() => {
					state.setViewingExperience('threejs')
					state.trueUpExperienceDetailVisibility()
				}}
				// @ts-ignore
				scale={animatingPlaneScale}
			>
				<planeGeometry args={[2, 3, 20, 30]} />
				<MeshDistortMaterial
					color={'hotpink'}
					distort={0.3}
					radius={1}
					// speed={10}
				></MeshDistortMaterial>
			</a.mesh>
		</a.group>
	)
}
