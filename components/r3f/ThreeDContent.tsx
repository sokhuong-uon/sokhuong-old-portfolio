import { CanvasViews } from '@r3f/CanvasViews'
import { Setup } from '@r3f/Setup'
import { Canvas } from '@react-three/fiber'
import { NoToneMapping } from 'three'

export const ThreeDContent = ({}) => {
	return (
		<Canvas
			shadows
			id="r3f-canvas"
			camera={{ position: [0, 0, 10], near: 5, far: 40 }}
			linear
			gl={{ toneMapping: NoToneMapping }}
		>
			{/* Responsive Scene setup*/}
			<Setup />
			<fog attach={'fog'} near={7} far={20} color="black"></fog>

			{/* Views */}
			<CanvasViews></CanvasViews>
		</Canvas>
	)
}
