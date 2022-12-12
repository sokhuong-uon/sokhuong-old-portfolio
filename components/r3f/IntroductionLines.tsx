import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useScroll } from '@react-three/drei'

export const IntroductionLines = () => {
	const lineGroup = useRef<THREE.Group>(null!)

	const topLine = useRef<THREE.Mesh>(null!)
	const midLeftLine = useRef<THREE.Mesh>(null!)
	const midRightLine = useRef<THREE.Mesh>(null!)
	const bottonLine = useRef<THREE.Mesh>(null!)

	const midLeftLineReplacement = useRef<THREE.Mesh>(null!)
	const midRightLineReplacement = useRef<THREE.Mesh>(null!)

	const [linePlaneGeometry, linePlaneMaterial] = useMemo(() => {
		const material = new THREE.MeshBasicMaterial({
			transparent: true,
			opacity: 0.5
		})
		const geometry = new THREE.PlaneGeometry(3.5, 0.1)
		return [geometry, material]
	}, [])

	const scroll = useScroll()

	useFrame(() => {
		const firstPageRange = scroll.range(0, 1 / 10)
		const secondPageRange = scroll.range(1 / 10, 1 / 10)
		const thridPageRange = scroll.range(2 / 10, 1 / 10)
		const fourthPageRange = scroll.range(3 / 10, 1 / 10)

		lineGroup.current.position.y = firstPageRange * 5 - 5 - 1
		lineGroup.current.position.x = -firstPageRange * 10 + 10

		// lines
		topLine.current.position.y = 0.05 + secondPageRange * 0.6

		midLeftLine.current.position.x = Math.max(
			-1.55,
			-0.88 - secondPageRange * 10
		)
		midLeftLine.current.scale.x = 1 / (secondPageRange * 200 + 2)

		midRightLine.current.position.x = Math.min(
			1.55,
			0.88 + secondPageRange * 10
		)
		midRightLine.current.scale.x = 1 / (secondPageRange * 200 + 2)

		if (secondPageRange > 0.5) {
			midRightLineReplacement.current.scale.y =
				0.005 +
				(secondPageRange - 0.5) * 70 -
				thridPageRange * 20 -
				fourthPageRange * 15
			midRightLineReplacement.current.position.y =
				(secondPageRange - 0.5) * 2 + thridPageRange * 2 + fourthPageRange

			midLeftLineReplacement.current.scale.y =
				0.005 + (secondPageRange - 0.5) * 30
			midLeftLineReplacement.current.position.y = (secondPageRange - 0.5) * 0.2
			if (thridPageRange > 0.5) {
				midLeftLineReplacement.current.position.x =
					-1.55 - (thridPageRange - 0.5) * 10
			}
		}

		if (thridPageRange > 0.5) {
			// @ts-ignore
			topLine.current.material.opacity = 0.5 - (thridPageRange - 0.5)
		}
	})

	return (
		<group ref={lineGroup} position={[0, -1, 0]}>
			<mesh
				ref={topLine}
				scale={[1, 0.1, 1]}
				position={[0, 0.05, 0]}
				geometry={linePlaneGeometry}
				material={linePlaneMaterial}
			></mesh>

			<mesh
				ref={midLeftLine}
				scale={[1, 0.1, 1]}
				position={[-1, 0, 0]}
				geometry={linePlaneGeometry}
				material={linePlaneMaterial}
			></mesh>
			<mesh
				ref={midRightLine}
				scale={[1, 0.1, 1]}
				position={[1, 0, 0]}
				geometry={linePlaneGeometry}
				material={linePlaneMaterial}
			></mesh>

			<mesh
				ref={bottonLine}
				scale={[1, 0.1, 1]}
				position={[0, -0.05, 0]}
				geometry={linePlaneGeometry}
				material={linePlaneMaterial}
			></mesh>

			{/* Mid Lines Replacement */}

			<mesh
				ref={midLeftLineReplacement}
				scale={[0.005, 0.1, 1]}
				position={[-1.55, 0, 0]}
				geometry={linePlaneGeometry}
				material={linePlaneMaterial}
			></mesh>
			<mesh
				ref={midRightLineReplacement}
				scale={[0.005, 0.1, 1]}
				position={[1.55, 0, 0]}
				geometry={linePlaneGeometry}
				material={linePlaneMaterial}
			></mesh>
		</group>
	)
}
