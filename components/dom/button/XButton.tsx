import { useApplicationStore } from 'store'

export const XButton = () => {
	const state = useApplicationStore()

	return (
		<button
			onClick={() => state.falsifyExperienceDetailVisibility()}
			className="pointer-events-auto"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="26"
				height="26"
				fill="none"
			>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeWidth="2"
					d="M25 25 1 1m24 0L1 25"
				/>
			</svg>
		</button>
	)
}
