import {
	Center,
	Float,
	OrbitControls,
	PerspectiveCamera,
	Sparkles,
	Text3D,
	View
} from '@react-three/drei'
import React from 'react'

export type IntroductionViewProps = {
	introductionTrack: React.MutableRefObject<HTMLDivElement>
}

export const IntroductionView: React.FC<IntroductionViewProps> = ({
	introductionTrack
}) => {
	const sizes = React.useMemo(() => {
		return new Float32Array(
			Array.from({ length: 25 }, () => Math.random() * 20)
		)
	}, [])
	return (
		<View track={introductionTrack}>
			<Center>
				<Sparkles count={25} color="orange" scale={4} size={sizes}></Sparkles>
				<Float floatIntensity={2} speed={2}>
					<Text3D
						position={[-1, -0.5, 0]}
						bevelEnabled
						font={'/font.json'}
						bevelSize={0.009}
					>
						Hi
						<meshBasicMaterial color={'gray'}></meshBasicMaterial>
					</Text3D>
				</Float>
			</Center>

			<PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
			<OrbitControls makeDefault enableDamping enableZoom={false} />
		</View>
	)
}
