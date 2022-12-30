import type { InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'

const Design: NextPage<
	InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ posts }) => {
	return (
		<>
			<Head>
				<title>Sokhuong | Experiment</title>
				<meta
					name="Description"
					content="Server Side Rendering | SSR Experiment"
				/>
			</Head>

			<main className="relative w-screen h-screen overflow-hidden">
				<div className="grid w-full h-full grid-cols-1 overflow-y-auto border md:grid-cols-2 xl:grid-cols-3">
					{posts.map(post => (
						<div
							key={post.id}
							className="p-4 mx-auto my-3 text-xl font-medium rounded-md h-52 w-96 bg-white/80"
						>
							<h1>{post.title}</h1>
						</div>
					))}
				</div>
			</main>
		</>
	)
}

export async function getServerSideProps() {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
	const posts = (await res.json()) as {
		userId: number
		id: number
		title: string
		body: string
	}[]

	return { props: { posts } }
}

export default Design
