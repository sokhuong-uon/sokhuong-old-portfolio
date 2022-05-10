import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Text, OrbitControls, SpotLight } from '@react-three/drei'

const IntroMessage = () => {
	return (
		<Text
			rotation={[-Math.PI / 6, -Math.PI / 6, 0]}
			fontSize={1}
			maxWidth={10}
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
		<Canvas camera={{ position: [0, 0, 10], zoom: 1 }}>
			<ambientLight />
			<OrbitControls />
			<SpotLight
				position={[-3, -2, 8]}
				color={'yellow'}
				intensity={5}
				penumbra={1}
				distance={10}
				angle={0.8}
				attenuation={10}
				anglePower={4}
			></SpotLight>
			<Suspense fallback={null}>
				<IntroMessage />
			</Suspense>
		</Canvas>
	)
}

export { Intro }
