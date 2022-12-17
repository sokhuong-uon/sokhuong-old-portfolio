import { useThree } from '@react-three/fiber'
import React from 'react'
import { useResponsiveStore } from 'store/screen'

export const Setup = () => {
	// r3f and webgl states
	const size = useThree(state => state.size)

	const setScreenSize = useResponsiveStore(state => state.setScreenSize)

	// Responsive Screen
	React.useLayoutEffect(() => {
		size.width > 640 && setScreenSize('sm')
		size.width > 768 && setScreenSize('md')
		size.width > 1024 && setScreenSize('lg')
		size.width > 1280 && setScreenSize('xl')
		size.width > 1536 && setScreenSize('2xl')
	}, [size, setScreenSize])

	return <></>
}
