import { Canvas } from '@react-three/fiber'

export const ThreeDContent = () => {
	return (
		<Canvas id="r3f-canvas">
			{/* Helper */}
			<gridHelper rotation-x={-Math.PI / 2} />
		</Canvas>
	)
}
