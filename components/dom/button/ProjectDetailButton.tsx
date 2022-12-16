export const ProjectDetailButton = () => {
	return (
		<a
			href="https://v2.tailwindcss.com/docs/responsive-design"
			className="relative w-full h-full border rounded-full border-slate-700 fcc"
		>
			<p className="absolute text-2xl left-6">VISIT</p>
			<p className="text-white">haha.com</p>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="47"
				height="16"
				fill="none"
				className="absolute right-6"
			>
				<path
					fill="#fff"
					d="M46.707 8.707a1 1 0 0 0 0-1.414L40.343.929a1 1 0 1 0-1.414 1.414L44.586 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM0 9h46V7H0v2Z"
				/>
			</svg>
		</a>
	)
}
