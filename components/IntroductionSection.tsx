import React from 'react'

export type IntroductionSectionProps = {
	threeDIntroductionRef: React.MutableRefObject<HTMLDivElement>
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({
	threeDIntroductionRef
}) => {
	return (
		<div className="relative flex-col w-full h-full text-white fcc md:flex-row">
			{/* View Track */}
			<div className="relative w-full h-1/2 md:h-full md:w-1/2">
				<div
					className="w-full h-[36rem] md:h-full md:w-[36rem] lg:w-full"
					ref={threeDIntroductionRef}
				></div>
			</div>

			{/* HTML */}
			<div className="relative flex justify-between w-full pb-6 sm:items-center md:h-full md:w-1/2 h-1/2">
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

				{/* Scroll down */}
				<div className="absolute flex flex-col items-center justify-center w-full opacity-50 sm:hidden bottom-12">
					<p className="w-32 mb-2 text-sm tracking-wider text-center opacity-60">
						Scroll down
					</p>

					{/* Scroll down arrow  */}
					<figure className="opacity-60">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="47"
							fill="none"
							className="scale-y-75"
						>
							<path
								fill="currentColor"
								d="M7.293 46.707a1 1 0 0 0 1.414 0l6.364-6.364a1 1 0 0 0-1.414-1.414L8 44.586l-5.657-5.657A1 1 0 0 0 .93 40.343l6.364 6.364ZM7 0v46h2V0H7Z"
							/>
						</svg>
					</figure>
				</div>
			</div>
		</div>
	)
}
