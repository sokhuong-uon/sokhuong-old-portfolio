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
	{ url: 'https://nextjs.org/', name: 'Next.js' },
	{ url: 'https://github.com/pmndrs/zustand', name: 'Zustand' },
	{ url: 'https://www.typescriptlang.org/', name: 'TypeScript' }
]

const Acknowledgement = () => {
	return (
		<section className="w-full h-full p-6 text-white bg-black border pointer-events-auto opacity-80">
			<h3 className="w-full text-2xl font-light tracking-widest text-center">
				ACKNOWLEDGEMENT
			</h3>

			<h3 className="w-full px-2 text-sm font-light tracking-wider text-center opacity-75">
				Open source libraries used in this project
			</h3>

			<ul className="flex flex-col w-full mt-6 gap-y-4">
				{libraries.map(library => (
					<li key={library.name} className="text-center ">
						<a href={library.url}>{library.name}</a>
					</li>
				))}
			</ul>
			<div className="w-full pt-5 text-center">And more to be listed ...</div>
		</section>
	)
}

export default Acknowledgement
