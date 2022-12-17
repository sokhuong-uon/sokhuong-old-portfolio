import React from 'react'
import { useResponsiveStore } from 'store/screen'

export type ResposiveGroupProps = React.PropsWithChildren

export const ResponsiveGroup: React.FC<ResposiveGroupProps> = ({
	children
}) => {
	const group = React.useRef<THREE.Group>(null!)

	const screenSize = useResponsiveStore(state => state.screenSize)

	React.useLayoutEffect(() => {
		group.current.position.x =
			screenSize === 'xs' || screenSize === 'sm' || screenSize === 'md'
				? 0
				: screenSize === 'lg'
				? 2
				: 2.5
	}, [screenSize])

	return <group ref={group}>{children}</group>
}
