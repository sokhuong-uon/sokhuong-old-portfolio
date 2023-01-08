import { useGesture } from '@use-gesture/react'

import { DOCK_ZOOM_LIMIT } from '../Dock'
import { useDock } from '../DockContext'

export const DockDivider = () => {
	const { zoomLevel, setIsZooming } = useDock()

	const bind = useGesture(
		{
			onDrag: ({ down, offset: [_ox, oy], cancel, direction: [_dx, dy] }) => {
				/**
				 * Stop the drag gesture if the user goes out of bounds otherwise
				 * the animation feels stuck but it's the gesture state catching
				 * up to a point where the scaling can actualy animate again.
				 */
				if (oy <= DOCK_ZOOM_LIMIT[0] && dy === -1) {
					cancel()
				} else if (oy >= DOCK_ZOOM_LIMIT[1] && dy === 1) {
					cancel()
				} else if (zoomLevel) {
					zoomLevel.start(oy, {
						immediate: down
					})
				}
			},
			onDragStart: () => {
				setIsZooming(true)
			},
			onDragEnd: () => {
				setIsZooming(false)
			}
		},
		{
			drag: {
				axis: 'y'
			}
		}
	)

	if (!zoomLevel) {
		return null
	}

	return (
		<div className={'h-full flex items-center py-1'} {...bind()}>
			<span className={'h-full w-[1px] rounded-sm bg-white/10'}></span>
		</div>
	)
}
