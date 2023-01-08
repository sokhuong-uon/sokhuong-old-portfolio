import { PropsWithChildren } from 'react'

export const MediaLinks = () => {
	return (
		<>
			<section className="absolute w-full h-full text-white pointer-events-none touch-none">
				<div className="relative flex flex-col items-center justify-center w-full h-full gap-6">
					<ListItem link="/SOKHUONG-Resume.pdf" socialHandle="Resume">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
						>
							<path
								fill="#fff"
								d="M18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7a.105.105 0 0 1 .027 0h.006a.15.15 0 0 0 .029.006c.088.006.175.023.259.051H13.363a.421.421 0 0 1 .052.043.988.988 0 0 1 .293.2l6 6a.987.987 0 0 1 .2.293.735.735 0 0 1 .023.066l.01.028c.028.083.044.17.049.258a.1.1 0 0 0 .007.029v.006A.112.112 0 0 1 20 9v11a2 2 0 0 1-2 2ZM13 4v5h5l-5-5Z"
							/>
						</svg>
					</ListItem>
					<ListItem
						link="https://github.com/sokhuong-uon"
						socialHandle="sokhuong-uon"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
						>
							<path
								fill="#fff"
								d="M12.026 2a9.975 9.975 0 0 0-3.153 19.439c.5.09.679-.217.679-.481 0-.237-.008-.865-.011-1.7-2.775.6-3.361-1.338-3.361-1.338a2.635 2.635 0 0 0-1.107-1.459c-.9-.619.069-.605.069-.605.64.088 1.205.467 1.527 1.028a2.124 2.124 0 0 0 2.9.829c.046-.506.272-.979.635-1.334-2.214-.251-4.542-1.107-4.542-4.93a3.865 3.865 0 0 1 1.026-2.671 3.588 3.588 0 0 1 .1-2.64s.837-.269 2.742 1.021a9.439 9.439 0 0 1 4.992 0c1.906-1.291 2.742-1.021 2.742-1.021.37.835.405 1.78.1 2.64a3.84 3.84 0 0 1 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922.48.49.725 1.162.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479A9.975 9.975 0 0 0 12.026 2Z"
							/>
						</svg>
					</ListItem>
					<ListItem
						link="https://www.youtube.com/@alotofcode"
						socialHandle="@alotofcode"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
						>
							<path
								fill="#fff"
								d="M12.006 19.012h-.02c-.062 0-6.265-.012-7.83-.437a2.5 2.5 0 0 1-1.764-1.765A26.494 26.494 0 0 1 1.986 12a26.646 26.646 0 0 1 .417-4.817A2.564 2.564 0 0 1 4.169 5.4c1.522-.4 7.554-.4 7.81-.4H12c.063 0 6.282.012 7.831.437.859.233 1.53.904 1.762 1.763.29 1.594.427 3.211.407 4.831a26.568 26.568 0 0 1-.418 4.811 2.51 2.51 0 0 1-1.767 1.763c-1.52.403-7.553.407-7.809.407Zm-2-10.007-.005 6 5.212-3-5.207-3Z"
							/>
						</svg>
					</ListItem>
					<ListItem
						link="https://twitter.com/SOKHUONG3"
						socialHandle="@SOKHUONG3"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
						>
							<path
								fill="#fff"
								d="M19.995 6.688a4.3 4.3 0 0 0 1.887-2.374 8.59 8.59 0 0 1-2.725 1.041 4.3 4.3 0 0 0-7.316 3.915 12.184 12.184 0 0 1-8.844-4.484 4.3 4.3 0 0 0 1.328 5.73 4.276 4.276 0 0 1-1.943-.538v.054a4.294 4.294 0 0 0 3.443 4.208 4.3 4.3 0 0 1-1.938.074 4.3 4.3 0 0 0 4.009 2.98 8.61 8.61 0 0 1-5.33 1.837c-.343 0-.685-.02-1.025-.059A12.148 12.148 0 0 0 8.12 21 12.127 12.127 0 0 0 20.33 8.789c0-.186-.004-.371-.013-.555a8.718 8.718 0 0 0 2.142-2.222 8.58 8.58 0 0 1-2.464.676Z"
							/>
						</svg>
					</ListItem>
				</div>
			</section>
		</>
	)
}

export const ListItem: React.FC<
	PropsWithChildren & { link: string; socialHandle: string }
> = ({ children, link, socialHandle }) => {
	return (
		<>
			<a
				href={link}
				className="relative fcc transition-all duration-500 rounded-full pointer-events-auto bg-gradient-to-r from-pink-400 to-rose-600"
			>
				<figure className="absolute left-4">{children}</figure>

				<p>{socialHandle}</p>

				<figure className="absolute right-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="8"
						fill="none"
					>
						<path
							fill="#fff"
							d="M17.354 4.354a.5.5 0 0 0 0-.708L14.172.464a.5.5 0 1 0-.708.708L16.293 4l-2.829 2.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 4.5h17v-1H0v1Z"
						/>
					</svg>
				</figure>
			</a>
		</>
	)
}
