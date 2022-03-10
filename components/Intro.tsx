import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Text, OrbitControls } from '@react-three/drei'

const IntroMessage = () => {
	return (
		<Text
			rotation={[-Math.PI / 6, -Math.PI / 6, 0]}
			fontSize={12}
			maxWidth={110}
			lineHeight={1}
			letterSpacing={0.02}
			textAlign={'left'}
			font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
			anchorX="center"
			anchorY="middle"
			fillOpacity={0}
			strokeWidth={'2.5%'}
			strokeColor="#ffff00"
		>
			Hi! I am Sokhuong. I do 3D web things.
		</Text>
	)
}

const Intro = () => {
	return (
		<Canvas camera={{ position: [0, 0, 90] }}>
			<ambientLight />
			<OrbitControls />
			<Suspense fallback={null}>
				<IntroMessage />
			</Suspense>
		</Canvas>
	)
}

export { Intro }
