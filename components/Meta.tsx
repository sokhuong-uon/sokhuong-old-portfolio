import Head from 'next/head'

export const Meta = () => {
	return (
		<Head>
			<title>Sokhuong | Creative Developer</title>
			<meta
				name="Description"
				content="Web Developer. Frontend, WebGL, 3D, Three.js, Animation, React Three Fiber, Blender, React.js, TypeScript."
			/>

			{/* Open Graph */}
			<meta property="og:title" content="Sokhuong | Web Dev" />
			<meta
				property="og:description"
				content="React.js | Vue.js | WebGL | Animation"
			/>
			<meta
				property="og:image"
				content="https://sokhuong.vercel.app/social.png"
			/>
		</Head>
	)
}
