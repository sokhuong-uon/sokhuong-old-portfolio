export const ResumeFooter = () => {
	return (
		<footer className="relative w-full text-center print:hidden">
			<address className="flex items-center justify-center w-full gap-4 py-4 lg:hidden">
				<a href="https://www.youtube.com/@alotofcode" title="YouTube">
					<svg width="24" height="24" fill="none" className="">
						<path
							fill="currentColor"
							d="M12.006 19.012h-.02c-.062 0-6.265-.012-7.83-.437a2.5 2.5 0 0 1-1.764-1.765A26.494 26.494 0 0 1 1.986 12a26.646 26.646 0 0 1 .417-4.817A2.564 2.564 0 0 1 4.169 5.4c1.522-.4 7.554-.4 7.81-.4H12c.063 0 6.282.012 7.831.437.859.233 1.53.904 1.762 1.763.29 1.594.427 3.211.407 4.831a26.568 26.568 0 0 1-.418 4.811 2.51 2.51 0 0 1-1.767 1.763c-1.52.403-7.553.407-7.809.407Zm-2-10.007-.005 6 5.212-3-5.207-3Z"
						/>
					</svg>
				</a>

				<a
					href="https://www.linkedin.com/in/sokhuong-uon/"
					className=""
					title="LinkedIn"
				>
					<svg width="24" height="24" fill="none">
						<path
							fill="currentColor"
							d="M13 21H9V9h4v2a4.618 4.618 0 0 1 3.525-1.763A4.5 4.5 0 0 1 21 13.75V21h-4v-6.75a2.265 2.265 0 0 0-2.247-1.944A1.815 1.815 0 0 0 13 14.25V21Zm-6 0H3V9h4v12ZM5 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
						/>
					</svg>
				</a>

				<a href="https://github.com/sokhuong-uon" className="" title="GitHub">
					<svg width="24" height="24" fill="none">
						<path
							fill="currentColor"
							d="M12.026 2a9.975 9.975 0 0 0-3.153 19.439c.5.09.679-.217.679-.481 0-.237-.008-.865-.011-1.7-2.775.6-3.361-1.338-3.361-1.338a2.635 2.635 0 0 0-1.107-1.459c-.9-.619.069-.605.069-.605.64.088 1.205.467 1.527 1.028a2.124 2.124 0 0 0 2.9.829c.046-.506.272-.979.635-1.334-2.214-.251-4.542-1.107-4.542-4.93a3.865 3.865 0 0 1 1.026-2.671 3.588 3.588 0 0 1 .1-2.64s.837-.269 2.742 1.021a9.439 9.439 0 0 1 4.992 0c1.906-1.291 2.742-1.021 2.742-1.021.37.835.405 1.78.1 2.64a3.84 3.84 0 0 1 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922.48.49.725 1.162.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479A9.975 9.975 0 0 0 12.026 2Z"
						/>
					</svg>
				</a>

				<a href="https://twitter.com/SOKHUONG3" className="" title="X">
					<svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6">
						<g>
							<path
								fill="currentColor"
								d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
							></path>
						</g>
					</svg>
				</a>
			</address>

			<div className="relative py-4">
				<div className="absolute top-0 w-full h-px dark:bg-gray-600"></div>
				<div className="absolute top-0 w-[2px] h-[2px] -translate-x-1/2 -translate-y-1/2 bg-gray-400 rounded-full inset-x-1/2 ring-0 ring-offset-4 dark:ring-offset-black"></div>

				<a
					href="https://github.com/sokhuong-uon/sokhuong"
					className="text-black underline rounded-sm dark:text-gray-400 underline-offset-3 hover:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ring-0 focus-visible:ring-offset-2 dark:ring-offset-black focus-visible:decoration-yellow-400"
				>
					MIT License 2022 - {new Date().getUTCFullYear()} · UON SOKHUONG
				</a>
			</div>
		</footer>
	)
}
