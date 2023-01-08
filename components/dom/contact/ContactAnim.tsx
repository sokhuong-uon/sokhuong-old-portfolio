import {
	animated,
	config,
	useChain,
	useSpring,
	useSpringRef,
	useTransition
} from '@react-spring/web'
import { useLayoutEffect, useState } from 'react'

import { data } from './data'

export default function ContactAnim() {
	const [open, set] = useState(false)

	const springApi = useSpringRef()
	const { size, ...rest } = useSpring({
		ref: springApi,
		config: config.stiff,
		from: { size: '20%' },
		to: {
			size: open ? '100%' : '20%'
			// background: open ? 'white' : 'hotpink'
		}
	})

	const transApi = useSpringRef()
	const transition = useTransition(open ? data : [], {
		ref: transApi,
		trail: 400 / data.length,
		from: { opacity: 0, scale: 0 },
		enter: { opacity: 1, scale: 1 },
		leave: { opacity: 0, scale: 0 }
	})

	// This will orchestrate the two animations above, comment the last arg and it creates a sequence
	useChain(open ? [springApi, transApi] : [transApi, springApi], [
		0,
		open ? 0.1 : 0.6
	])

	useLayoutEffect(() => {
		set(true)
	}, [])

	return (
		<div className={'w-full overflow-hidden  fcc p-2'}>
			<animated.div
				style={{ ...rest, width: size, height: size }}
				className={
					' items-center w-96 justify-center relative flex-wrap flex rounded-md cursor-pointer will-change-["width,height"] '
				}
			>
				{transition((style, item) => (
					<animated.a
						href={item.link}
						className={
							'w-24 group relative pointer-events-auto h-24 bg-opacity-30 m-3 fcc aspect-square text-white/60 hover:text-white/90 bg-white/10 rounded-md will-change-[`transform,opacity`]'
						}
						style={{ ...style }}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							className="transition-all scale-150"
						>
							<path d={item.svgPath} />
						</svg>
						<div className="absolute text-xs bottom-1">{item.handle}</div>
					</animated.a>
				))}
			</animated.div>
		</div>
	)
}
