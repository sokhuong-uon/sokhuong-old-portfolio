import Image from 'next/image'

export const Carousel = () => {
	return (
		<>
			<div className="relative flex flex-col w-full mt-4 xl:px-16 h-36 lg:h-48">
				<div className="flex items-center h-full gap-8 overflow-x-scroll snap-x scroll-smooth">
					<figure className="flex-shrink-0 w-20 h-24"></figure>

					{Array.from({ length: 3 }).map((_, i) => (
						<figure
							key={i}
							className="relative flex-shrink-0 w-48 overflow-hidden border rounded-lg aspect-video snap-center"
						>
							<Image
								src={'/wetype.jpg'}
								alt="wetype"
								fill
								className="object-cover w-full h-full"
							></Image>
						</figure>
					))}

					<figure className="flex-shrink-0 w-20 h-24"></figure>
				</div>

				<div className="w-full h-3 gap-2 -bottom-2 fcc">
					<div className="w-5 border rounded-full aspect-square"></div>
					<div className="w-5 bg-white border rounded-full aspect-square"></div>
					<div className="w-5 border rounded-full aspect-square"></div>
				</div>
			</div>
		</>
	)
}
