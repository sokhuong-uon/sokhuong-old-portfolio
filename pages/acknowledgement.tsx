import { NextPage } from 'next'
import Head from 'next/head'

const libraries = [
	{ url: 'https://threejs.org/', name: 'Three.js' },
	{
		url: 'https://docs.pmnd.rs/react-three-fiber/getting-started/introduction',
		name: 'React Three Fiber'
	},
	{
		url: 'https://github.com/pmndrs/drei#readme',
		name: 'React Three Drei'
	},
	{ url: 'https://en.wikipedia.org/wiki/WebGL', name: 'WebGL' },
	{ url: 'https://en.wikipedia.org/wiki/WebGL', name: 'React.js' },
	{ url: 'https://tailwindcss.com/', name: 'Tailwind CSS' },
	{ url: 'https://heroicons.dev/', name: 'Heroicon' },
	{ url: 'https://nextjs.org/', name: 'Next.js' },
	{ url: 'https://github.com/pmndrs/zustand', name: 'Zustand' },
	{ url: 'https://www.typescriptlang.org/', name: 'TypeScript' },
	{ url: 'https://pnpm.io/', name: 'pnpm' },
	{ url: 'https://prettier.io/', name: 'Prettier' },
	{ url: 'https://eslint.org/', name: 'Eslint' },
	{ url: 'https://postcss.org/', name: 'Postcss' },
	{ url: 'https://git-scm.com/', name: 'Git' },
	{ url: 'https://github.com/', name: 'GitHub' },
	{ url: 'https://typicode.github.io/husky/#/', name: 'Husky' },
	{ url: 'https://react-spring.dev/', name: 'React Spring' },
	{ url: 'https://codesandbox.io/s/to6uf', name: 'Cards Animation' }
]

const Acknowledgement: NextPage = () => {
	return (
		<>
			<Head>
				<title>Sokhuong | Acknowledgement</title>
				<meta
					name="Description"
					content="List of opensource libraries and examples used in this portfolio project"
				/>

				{/* Open Graph */}
				<meta property="og:title" content="Sokhuong | Acknowledgement" />
				<meta
					property="og:description"
					content="Technologies used in this Portfolio project"
				/>
				<meta
					property="og:image"
					content="https://sokhuong.vercel.app/social/website.png"
				/>
			</Head>

			<section className="w-full h-full p-6 text-white opacity-80">
				<h3 className="w-full text-2xl font-light tracking-widest text-center">
					ACKNOWLEDGEMENT
				</h3>

				<h3 className="w-full px-2 text-sm font-light tracking-wider text-center opacity-75">
					Open source libraries and examples used in this project
				</h3>

				<ul className="flex flex-col w-full h-full mt-6 overflow-auto gap-y-4">
					{libraries.map(library => (
						<li
							key={library.name}
							className="text-center text-blue-500 pointer-events-auto hover:underline"
						>
							<a href={library.url}>{library.name}</a>
						</li>
					))}
					<li
						key={'vercel'}
						className="text-center text-blue-500 pointer-events-auto hover:underline"
					>
						<a href="https://vercel.com/">Hosted by Vercel</a>
					</li>
				</ul>
				<div className="w-full pt-5 text-center">And more to be listed ...</div>
			</section>
		</>
	)
}

export default Acknowledgement
