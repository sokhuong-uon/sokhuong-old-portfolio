import { clamp } from '@react-spring/shared'
import { animated, useSpringValue } from '@react-spring/web'
import * as React from 'react'

import { useWindowResize } from './hooks/useWindowResize'

import { DockContext } from './DockContext'

import { DockList } from './DockList'

export const DOCK_ZOOM_LIMIT = [-100, 50]

export const Dock = () => {
	const [hovered, setHovered] = React.useState(false)
	const [width, setWidth] = React.useState(0)
	const isZooming = React.useRef(false)
	const dockRef = React.useRef<HTMLDivElement>(null!)

	const setIsZooming = React.useCallback((value: boolean) => {
		isZooming.current = value
		setHovered(!value)
	}, [])

	const zoomLevel = useSpringValue(1, {
		onChange: () => {
			setWidth(dockRef.current.clientWidth)
		}
	})

	useWindowResize(() => {
		setWidth(dockRef.current.clientWidth)
	})

	return (
		<DockContext.Provider value={{ hovered, setIsZooming, width, zoomLevel }}>
			<animated.div
				ref={dockRef}
				className={
					'fixed bottom-3 left-1/2 -translate-x-1/2 items-end flex gap-3 bg-white/5 will-change-contents rounded-sm px-3 h-14 origin-center'
				}
				onMouseOver={() => {
					if (!isZooming.current) {
						setHovered(true)
					}
				}}
				onMouseOut={() => {
					setHovered(false)
				}}
				style={{
					x: '-50%',
					scale: zoomLevel
						.to({
							range: [DOCK_ZOOM_LIMIT[0], 1, DOCK_ZOOM_LIMIT[1]],
							output: [2, 1, 0.5]
						})
						.to(value => clamp(0.5, 2, value))
				}}
			>
				{/* {children} */}
				<DockList />
			</animated.div>
		</DockContext.Provider>
	)
}
