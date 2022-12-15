import React from 'react'

export type IntroductionSectionProps = {
	threeDIntroductionRef: React.MutableRefObject<HTMLDivElement>
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({
	threeDIntroductionRef
}) => {
	return (
		<div className="w-full h-full text-white">
			{/* View Track */}
			<div ref={threeDIntroductionRef} className="w-full h-1/2"></div>

			{/* HTML */}
			<div className="flex flex-col justify-between w-full pb-6 h-1/2">
				{/* Introduction */}
				<div className="flex flex-col items-center w-full">
					<p className="px-3 mb-2 font-semibold opacity-50 w-80">
						I AM SOKHUONG
					</p>
					<p className="text-4xl font-semibold tracking-wide text-center w-80">
						WEB DEVELOPER
					</p>
					<p className="px-3 py-2 font-light tracking-wide opacity-70 w-80 ">
						Make Immersive 3D Experience & Responsive UI
					</p>
				</div>

				{/* Scroll down */}
				<div className="absolute flex flex-col items-center w-full opacity-50 bottom-12">
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
