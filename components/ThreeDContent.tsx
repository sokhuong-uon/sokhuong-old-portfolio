import { Canvas } from '@react-three/fiber'
import { Scroll, ScrollControls } from '@react-three/drei'
import { Welcome } from './r3f/Welcome'
import { SelfIntroduction } from './r3f/SelfIntroduction'

export const ThreeDContent = () => {
	return (
		<Canvas id="r3f-canvas" orthographic camera={{ zoom: 100 }}>
			{/* Helper */}
			{/* <gridHelper rotation-x={-Math.PI / 2} /> */}

			<ScrollControls pages={10}>
				{/* Welcome */}
				<Welcome />

				{/* Self Introduction */}
				<SelfIntroduction />

				{/*
					// @ts-ignore */}
				<Scroll html className="w-full h-full text-white">
					{/* <hr></hr> */}
					{/* <h1 className="h-full ">1</h1> */}

					{/* <hr></hr> */}
					{/* <h1 className="h-full ">2</h1> */}

					{/* <hr></hr> */}
					{/* <h1 className="h-full ">3</h1> */}

					{/* <hr></hr> */}
					{/* <h1 className="h-full ">4</h1> */}

					{/* <hr></hr> */}
					{/* <h1 className="h-full ">5</h1> */}

					{/* <hr></hr> */}
					{/* <h1 className="h-full ">6</h1> */}

					{/* <hr></hr> */}
					{/* <h1 className="h-full ">7</h1> */}

					{/* <hr></hr> */}
					{/* <h1 className="h-full ">8</h1> */}

					{/* <hr></hr> */}
					{/* <h1 className="h-full ">9</h1> */}

					{/* <hr></hr> */}
					{/* <h1 className="h-full ">10</h1> */}
				</Scroll>
			</ScrollControls>
		</Canvas>
	)
}
