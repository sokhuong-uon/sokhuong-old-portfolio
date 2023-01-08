import { animated, useSpringValue } from '@react-spring/web'
import * as React from 'react'

import Link from 'next/link'

import { useRouter } from 'next/router'

type DockCardProps = React.PropsWithChildren & {
	link: string
}

export const DockCard = ({ link, children }: DockCardProps) => {
	const cardRef = React.useRef<HTMLDivElement>(null!)

	const router = useRouter()

	const opacity = useSpringValue(0)
	const y = useSpringValue(0)
	const scale = useSpringValue(1)

	React.useEffect(() => {
		if (router.pathname == link) {
			opacity.start(0.5)
			y.start(-10)
			scale.start(1.1)
		} else {
			opacity.start(0)
			y.start(0)
			scale.start(1)
		}
		// eslint-disable-next-line
	}, [router])

	return (
		<Link
			href={link}
			className={
				'flex duration-500 transition-transform hover:scale-110 flex-col items-center gap-1'
			}
		>
			<animated.div
				ref={cardRef}
				className={'rounded-md bg-white/10 cursor-pointer'}
				style={{ y, scale }}
			>
				{children}
			</animated.div>

			<animated.div
				className={'w-2 h-2 bg-white rounded-full'}
				style={{ opacity }}
			/>
		</Link>
	)
}
