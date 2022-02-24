import type { NextPage } from 'next'
import Head from 'next/head'

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
			<div className="flex items-center justify-center w-screen h-screen bg-black">
				<h1 className="text-5xl text-white">Hi mom!</h1>
			</div>
		</>
	)
}

export default Home
