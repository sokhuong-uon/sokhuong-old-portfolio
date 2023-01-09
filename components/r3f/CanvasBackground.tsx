import { useScroll, a, useSpring } from '@react-spring/three'
import { useEffect, useRef } from 'react'
import { Mesh } from 'three'
import { useRouter } from 'next/router'

export const CanvasBackground = () => {
	const router = useRouter()

	const plane = useRef<Mesh>(null!)
	const [{ color }, api] = useSpring(() => ({
		color: [0, 0, 0] as [number, number, number]
	}))

	const container = useRef(
		document.getElementById('scroll-container')! as HTMLElement
	)

	const fn = (rgb: [number, number, number]) => {
		api.start({
			color: rgb,
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

	useEffect(() => {
		router.pathname === '/' && fn([0, 0, 0])
		router.pathname.includes('experiences') && fn([0, 0, 0])
		router.pathname === '/contact' && fn([0, 0, 0])
		// eslint-disable-next-line
	}, [router])

	return (
		<mesh ref={plane} position={[0, 0, -5]}>
			<planeGeometry args={[20, 20]} />
			<meshBasicMaterial color={'black'} />
		</mesh>
	)
}
