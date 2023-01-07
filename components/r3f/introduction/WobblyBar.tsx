import { a, easings, useSpring } from '@react-spring/three'
import { MeshWobbleMaterial, useCursor } from '@react-three/drei'
import { MeshProps, useFrame, useThree } from '@react-three/fiber'
import { useDrag } from '@use-gesture/react'
import { useRouter } from 'next/router'
import { useLayoutEffect, useRef, useState } from 'react'
import { Group, Mesh, Vector3 } from 'three'

type WobblyBarProps = MeshProps & {}

export const WobblyBar: React.FC<WobblyBarProps> = props => {
	const mesh = useRef<Mesh>(null!)
	const [hover, setHover] = useState(false)

	useCursor(hover)

	return (
		<mesh
			ref={mesh}
			onPointerEnter={() => setHover(true)}
			onPointerLeave={() => setHover(false)}
			castShadow
			scale={0.3}
			{...props}
		>
			<boxGeometry args={[1, 4, 1, 2, 16]} />
			<MeshWobbleMaterial color={'hotpink'} />
		</mesh>
	)
}

export const WobblyBars = () => {
	const group = useRef<Group>(null!)
	const router = useRouter()

	const gl = useThree(state => state.gl)

	const [{ scale }, scaleApi] = useSpring(() => ({
		scale: [1, 1, 1],
		config: {
			duration: 500,
			easing: easings.easeOutElastic
		}
	}))

	const [{ position }, positionApi] = useSpring(
		() => ({
			position: router.pathname == '/' ? [0, 0, 0] : [0, 0, -8]
		}),
		[router]
	)

	useDrag(
		({ movement: [mx, my], active }) => {
			if (active) {
				document.body.style.cursor = 'grabbing'
				scaleApi.start({
					scale: [0.6, 0.6, 0.6]
				})
				positionApi.start({
					position: [mx / 500, -my / 500, group.current.position.z]
				})
			} else {
				document.body.style.cursor = 'default'
				scaleApi.start({
					scale: [1, 1, 1]
				})
				positionApi.start({
					position: [0, 0, group.current.position.z]
				})
			}
		},
		{ target: gl.domElement }
	)

	useLayoutEffect(() => {
		gl.domElement.style.touchAction = 'none'
		// eslint-disable-next-line
	}, [])

	return (
		<a.group
			ref={group}
			rotation-x={Math.PI / 10}
			// @ts-ignore
			scale={scale}
			// @ts-ignore
			position={position}
		>
			<WobblyBar position={[-0.5, 0, 0]} />
			<WobblyBar position={[0, 0, 0]} />
			<WobblyBar position={[0.5, 0, 0]} />

			<Rig />
		</a.group>
	)
}

function Rig() {
	const { camera, mouse } = useThree()
	const vec = new Vector3()

	return useFrame(() =>
		camera.position.lerp(
			vec.set(mouse.x * 0.5, mouse.y * 0.5, camera.position.z),
			0.02
		)
	)
}
