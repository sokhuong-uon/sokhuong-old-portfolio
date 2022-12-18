import { useSpring } from '@react-spring/three'
import { ReactThreeFiber } from '@react-three/fiber'
import { Experiences, useApplicationStore } from 'store'
import { useResponsiveStore } from 'store/screen'

export const useActive = (item: Experiences) => {
	const state = useApplicationStore()
	const screenSize = useResponsiveStore(state => state.screenSize)

	return useSpring({
		animatingPosition:
			state.viewingExperience === item &&
			state.experienceDetialVisible &&
			(screenSize === 'xs' || screenSize === 'sm' || screenSize === 'md')
				? ([0, 1.6, 0] as ReactThreeFiber.Vector3)
				: ([0, -0.3, 0] as ReactThreeFiber.Vector3)
	})
}
