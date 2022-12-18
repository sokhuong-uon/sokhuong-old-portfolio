import { useSpring } from '@react-spring/three'
import { Experiences, useApplicationStore } from 'store'

export const useActiveDescription = (item: Experiences) => {
	const viewingExperience = useApplicationStore(
		state => state.viewingExperience
	)

	const { y } = useSpring({
		y: viewingExperience === item ? '0%' : '100%',
		opacity: viewingExperience === item ? 1 : 0,
		delay: 250
	})
	const { opacity } = useSpring({
		opacity: viewingExperience === item ? 1 : 0,
		delay: 200
	})

	return { y, opacity }
}
