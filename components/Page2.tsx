const Page2 = () => {
	return (
		<div className="relative w-full h-full font-semibold text-white fcc">
			<div className="w-full text-6xl">
				<section className="relative w-full my-3 fcc">
					<p className="pr-3">I</p>
					<p className="">A</p>
					<p>M</p>
				</section>

				<section className="my-3 text-center">SOKHUONG</section>

				{/* Lines */}
				<section className="absolute w-full gap-y-2 bottom-36">
					<div className="w-11/12 h-px mx-auto my-1 bg-white"></div>
					<div className="w-11/12 h-px mx-auto my-1 bg-white"></div>
					<div className="w-11/12 h-px mx-auto my-1 bg-white"></div>
				</section>
			</div>
		</div>
	)
}

export { Page2 }
