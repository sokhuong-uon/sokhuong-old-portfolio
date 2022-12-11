import Image from 'next/image'

const Page4 = () => {
	return (
		<div className="relative w-full h-full font-semibold text-white fcc">
			<div className="w-full overflow-hidden text-5xl">
				<p className="absolute inset-x-auto w-full text-center text-7xl top-20">
					Experience
				</p>

				<ul className="w-full h-[30rem] relative fcc">
					<li className="absolute bg-pink-100 rounded-md w-52 h-72">
						<figure>
							<Image
								className="object-cover"
								src="/threejs.png"
								fill
								alt="threejs section"
							></Image>
						</figure>
					</li>

					<li className="absolute translate-x-64 translate-y-16 bg-pink-100 rounded-md w-52 h-72"></li>
				</ul>

				<p className="absolute inset-x-auto w-full text-4xl text-center bottom-20">
					THREE.JS
				</p>
			</div>
		</div>
	)
}

export { Page4 }
