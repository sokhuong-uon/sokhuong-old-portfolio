import React from 'react'
import { a, useSpring } from '@react-spring/three'
import { useApplicationStore } from 'store'
import { ReactThreeFiber } from '@react-three/fiber'

export type ListGroupProps = React.PropsWithChildren

export const ListGroup: React.FC<ListGroupProps> = ({ children }) => {
	const group = React.useRef<THREE.Group>(null!)

	const viewingExperience = useApplicationStore(
		state => state.viewingExperience
	)

	const { position } = useSpring({
		position:
			viewingExperience === 'threejs'
				? ([0, 0, 0] as ReactThreeFiber.Vector3)
				: viewingExperience === 'reactjs'
				? ([-2, 0, 0] as ReactThreeFiber.Vector3)
				: viewingExperience === 'animation'
				? ([-4, 0, 0] as ReactThreeFiber.Vector3)
				: viewingExperience === 'modeling'
				? ([-6, 0, 0] as ReactThreeFiber.Vector3)
				: viewingExperience === 'backend'
				? ([-8, 0, 0] as ReactThreeFiber.Vector3)
				: ([0, 0, 0] as ReactThreeFiber.Vector3)
	})

	return (
		// @ts-ignore
		<a.group ref={group} position={position}>
			{children}
		</a.group>
	)
}
