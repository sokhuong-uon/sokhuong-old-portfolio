import type { NextPage } from 'next'
import Head from 'next/head'

import { Intro } from 'components/Intro'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Sokhuong</title>
				<meta
					name="Description"
					content="Web Dev: Frontend;WebGL 3D Three.js React Three Fiber"
				/>
			</Head>
			<div className="flex flex-col items-center justify-center w-screen h-screen gap-5 bg-black">
				{/* <h1 className="text-3xl text-white">Hi! I am Sokhuong.</h1>
				<h1 className="text-3xl text-white">I do 3D web things</h1> */}
				<Intro />
			</div>
		</>
	)
}

export default Home
