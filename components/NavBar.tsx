export const NavBar = () => {
	return (
		<nav className="absolute z-50 w-full h-16">
			<ul className="flex items-center justify-center h-full gap-2 px-6 text-white uppercase border backdrop-blur-md">
				<li className="pointer-events-auto">
					<a href="#experience-container" className="p-2">
						Skills
					</a>
				</li>

				<li className="p-2 border pointer-events-auto">
					<a href="#contact">Contact</a>
				</li>

				<li className="p-2 border pointer-events-auto">
					<a href="#dashboard">Dashboard</a>
				</li>

				<li className="p-2 border pointer-events-auto">
					<a href="#blog">Blog</a>
				</li>
			</ul>
		</nav>
	)
}
