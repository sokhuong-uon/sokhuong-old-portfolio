import React from 'react'

export type IntroductionSectionProps = {
	threeDIntroductionRef: React.MutableRefObject<HTMLDivElement>
}

export const IntroductionSection = () => {
	return (
		<div className="relative flex-col w-full h-full text-white border border-black pointer-events-none fcc md:flex-row">
			{/* HTML */}
			<div className="relative flex items-end w-full h-full pb-6 border ">
				{/* Introduction */}
				<div className="relative flex justify-center w-full ">
					{/* pink */}
					<div className="relative flex flex-col justify-start h-fit text-start sm:w-7/12 sm:px-3 sm:text-start sm:text-5xl w-80 md:w-full">
						<p className="w-full text-xl font-semibold opacity-50 md:text-2xl">
							I AM SOKHUONG
						</p>

						<p className="text-4xl font-semibold tracking-wide md:text-6xl">
							WEB DEVELOPER
						</p>

						<p className="w-full py-2 text-sm font-light tracking-wide opacity-70">
							Make Immersive 3D Experience & Responsive UI
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
