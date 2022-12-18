import {
	Center,
	Float,
	OrbitControls,
	PerspectiveCamera,
	Sparkles,
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
					<mesh>
						<tetrahedronGeometry />
						<meshNormalMaterial wireframe />
					</mesh>
				</Float>
			</Center>

			<PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
			<OrbitControls makeDefault enableDamping enableZoom={false} />

			{/* <Test /> */}
		</View>
	)
}
