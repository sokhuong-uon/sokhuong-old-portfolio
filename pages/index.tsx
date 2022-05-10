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
			<div className="w-screen h-screen bg-black">
				<Intro />
			</div>
		</>
	)
}

export default Home
