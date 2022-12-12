import { Text, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { SkillCard } from './SkillCard'

export const Experience = () => {
	const group = useRef<THREE.Group>(null!)
	const experience = useRef<THREE.Group>(null!)

	const scroll = useScroll()

	useFrame(() => {
		const thirdPageRange = scroll.range(2 / 10, 1 / 10)
		const fourthPageRange = scroll.range(3 / 10, 1 / 10)
		const sixthPageRange = scroll.range(6 / 10, 1 / 10)

		experience.current.position.x = 5 - thirdPageRange * 5
		experience.current.position.y = 2 + fourthPageRange + sixthPageRange * 2
	})
	return (
		<group ref={group}>
			<Text
				ref={experience}
				font="/Poppins/Poppins-SemiBold.ttf"
				fillOpacity={0}
				strokeColor={'white'}
				strokeWidth={'2.5%'}
				strokeOpacity={1}
				position={[0, 2, -1]}
				scale={5}
			>
				Experience
			</Text>

			<mesh position={[2.55, 2, 0]}>
				<planeGeometry args={[2, 1]} />
				<meshBasicMaterial color={'black'} />
			</mesh>

			{/* Skill cards */}
			<SkillCard />
		</group>
	)
}
