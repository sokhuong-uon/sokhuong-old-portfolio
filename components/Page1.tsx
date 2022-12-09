const Page1 = () => {
	return (
		<div className="w-full h-full text-white select-none fcc">
			{/* Greeting  */}
			<h3 className="font-semibold text-8xl">Hi</h3>

			{/* Scroll down instruction  */}
			<p className="absolute inset-x-auto text-sm font-semibold tracking-wider text-center bottom-32 opacity-60">
				Scroll down
			</p>

			{/* Scroll down arrow  */}
			<p className="absolute inset-x-auto bottom-16 opacity-60">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="47"
					fill="none"
				>
					<path
						fill="currentColor"
						d="M7.293 46.707a1 1 0 0 0 1.414 0l6.364-6.364a1 1 0 0 0-1.414-1.414L8 44.586l-5.657-5.657A1 1 0 0 0 .93 40.343l6.364 6.364ZM7 0v46h2V0H7Z"
					/>
				</svg>
			</p>
		</div>
	)
}

export { Page1 }
