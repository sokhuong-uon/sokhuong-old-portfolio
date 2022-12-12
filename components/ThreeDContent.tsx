import { Canvas } from '@react-three/fiber'
import { Scroll, ScrollControls } from '@react-three/drei'
import { Welcome } from './r3f/Welcome'
import { SelfIntroduction } from './r3f/SelfIntroduction'
import { ProfessionIntroduction } from './r3f/ProfessionIntroduction'
import { Experience } from './r3f/Experience'
import { Contact } from './r3f/Contact'
import { MediaLinks } from './MediaLinks'

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

				{/* Profession Introduction */}
				<ProfessionIntroduction />

				{/* Experience */}
				<Experience />

				{/* Contact */}
				<Contact />

				{/*
					// @ts-ignore */}
				<Scroll html className="w-full h-full text-white">
					{/* <hr></hr>
					<h1 className="h-full ">1</h1>

					<hr></hr>
					<h1 className="h-full ">2</h1>

					<hr></hr>
					<h1 className="h-full ">3</h1>

					<hr></hr>
					<h1 className="h-full ">4</h1>

					<hr></hr>
					<h1 className="h-full ">5</h1>

					<hr></hr>
					<h1 className="h-full ">6</h1>

					<hr></hr>
					<h1 className="h-full ">7</h1> */}

					{/* <hr></hr> */}
					<div className="absolute w-full h-full" style={{ top: '600vh' }}>
						<MediaLinks />
					</div>

					{/* <hr></hr>
					<h1 className="h-full ">9</h1>

					<hr></hr>
					<h1 className="h-full ">10</h1> */}
				</Scroll>
			</ScrollControls>
		</Canvas>
	)
}
