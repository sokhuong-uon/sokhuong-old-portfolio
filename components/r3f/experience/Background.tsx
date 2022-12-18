import { useResponsiveStore } from 'store/screen'

export const Background = () => {
	const screenSize = useResponsiveStore(state => state.screenSize)

	return (
		<>
			<color
				args={[
					screenSize === 'xs' || screenSize === 'sm' || screenSize === 'md'
						? 'white'
						: 'black'
				]}
				attach="background"
			></color>
		</>
	)
}
