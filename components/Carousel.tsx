import Image from 'next/image'

export const Carousel = () => {
	return (
		<>
			<div className="relative flex w-full mt-4 max-h-96 h-36">
				<div className="flex items-center h-full gap-8 overflow-x-scroll snap-x scroll-smooth">
					<figure className="flex-shrink-0 w-20 h-24"></figure>

					{Array.from({ length: 3 }).map((_, i) => (
						<figure
							key={i}
							className="relative flex-shrink-0 w-48 h-24 overflow-hidden border rounded-lg snap-center"
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

				<div className="absolute w-full h-3 gap-2 -bottom-2 fcc">
					<div className="w-4 h-4 border rounded-full"></div>
					<div className="w-4 h-4 bg-white border rounded-full"></div>
					<div className="w-4 h-4 border rounded-full"></div>
				</div>
			</div>
		</>
	)
}
