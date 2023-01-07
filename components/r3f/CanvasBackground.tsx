import { useScroll, a, useSpring } from '@react-spring/three'
import { useRef } from 'react'
import { Mesh } from 'three'

export const CanvasBackground = () => {
	const plane = useRef<Mesh>(null!)
	const [{ color }, api] = useSpring(() => ({
		color: [0, 0, 0]
	}))

	const container = useRef(
		document.getElementById('scroll-container')! as HTMLElement
	)

	useScroll({
		container: container,
		onChange: ({ value: { scrollYProgress } }) => {
			if (scrollYProgress > 0.6) {
				api.start({
					color: [1, 1, 1],
					onChange: ({ value }) => {
						// @ts-ignore
						plane.current.material.color.setRGB(
							value.color[0],
							value.color[1],
							value.color[2]
						)
					}
				})
			} else {
				api.start({
					color: [0, 0, 0],
					onChange: ({ value }) => {
						// @ts-ignore
						plane.current.material.color.setRGB(
							value.color[0],
							value.color[1],
							value.color[2]
						)
					}
				})
			}
		}
	})

	return (
		<mesh ref={plane} position={[0, 0, -3]}>
			<planeGeometry args={[10, 10]} />
			<meshBasicMaterial color={'black'} />
		</mesh>
	)
}
