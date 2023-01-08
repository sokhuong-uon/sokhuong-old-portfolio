import {
	animated,
	useChain,
	useSpringRef,
	useTransition
} from '@react-spring/web'
import { useEffect, useState } from 'react'

import { data } from './data'

export default function ContactAnim() {
	const [open, set] = useState(false)

	const springApi = useSpringRef()

	const transApi = useSpringRef()
	const transition = useTransition(open ? data : [], {
		ref: transApi,
		trail: 400 / data.length,
		from: { opacity: 0, scale: 0 },
		enter: { opacity: 1, scale: 1 },
		leave: { opacity: 0, scale: 0 }
	})

	useChain(open ? [springApi, transApi] : [transApi, springApi], [0])

	useEffect(() => {
		set(true)
	}, [])

	return (
		<div className={'w-full overflow-hidden  fcc p-2'}>
			<animated.div className='items-center w-96 justify-center relative flex-wrap flex rounded-md cursor-pointer will-change-["width,height"] '>
				{transition((style, item) => (
					<animated.a
						href={item.link}
						className={
							'w-24 group relative pointer-events-auto h-24 bg-opacity-30 m-3 fcc aspect-square shadow-zinc-600 shadow-sm text-white/60 hover:text-white/90 bg-black rounded-md will-change-[`transform,opacity`]'
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
