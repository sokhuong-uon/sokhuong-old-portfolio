import { PropsWithChildren, useEffect, useRef, useState } from 'react'

export const WorkExperiences = () => {
	return (
		<ul id="work-experience-list" className="flex flex-col gap-4 p-4">
			<WorkExperience>
				<WorkExperienceHeader
					company="Kirirom Digital Cambodia"
					date={{ start: 'February 2023' }}
					role="Web Developer"
				/>
				<Responsibilities
					responsibilities={[
						'Make website for RHAC Organization (Front-End) that include customer pages and admin dashboard.',
						'Communicate with UI / UX team.',
						'Collaborate with Back-End team.',
						'Update the website based on client feedback.',
						'Responsive UI and animation with Tailwind CSS and JavaScript.',
						'Implement SEO by utilizing Schema.org and Server SideRendering.',
						'Improve Web Accessibility with proper use of semanticHTML elements (follow W3C) and do contrast check.',
						'Improve page performance by optimizing images sizeand use web-friendly image format wherever possible.',
						'Improve User Experience by using Loading Indicator/Component Skeleton when the data is still loading.',
						'Setup Git Pre-commit hook with Husky.',
						'Create reusable components, utilities, and a little bit ofUnit Test.'
					]}
				/>
			</WorkExperience>

			<WorkExperience>
				<WorkExperienceHeader
					company="Quadusk"
					date={{ start: 'April 2020', end: 'October 2022' }}
					role="Co-Founder & Lead Developer"
				/>
				<Responsibilities
					responsibilities={[
						'Communicate with stack holders to understand the purposes and functionalities of the application.',
						'Research and develop 3D/360 Virtual Tour Web Application.',
						'Communicate with UI/UX team.',
						'Choose technologies that help the team build the app quick and have good Developer Experience.',
						'Setup the project along with Continuous Integration/Continuous Deployment (CI/CD).',
						'Customize and fix behavior of the library API to fit the need of the application.',
						'Build interactive and responsive web pages',
						'Improve application performance and animations.'
					]}
				/>
			</WorkExperience>

			<WorkExperience>
				<WorkExperienceHeader
					company="Zeal VC"
					date={{ start: 'June 2019', end: 'March 2020' }}
					role="Intern"
				/>
				<Responsibilities
					responsibilities={[
						'Research on Light Detection And Ranging (LIDAR) and Photogrammetry technologies.',
						'Make project documentation and presentation.',
						'3D Model reconstruction with Structure From Motion',
						'Create and retouch 3D model with Blender.',
						'Mapping project and Data Visualization with QGIS.',
						'Generate Digital Terrain Model (DTM) and Terrain Mapfrom Digital Surface Model (DSM).',
						'Point Cloud Classification.'
					]}
				/>
			</WorkExperience>
		</ul>
	)
}

export const WorkExperience = ({ children }: PropsWithChildren<{}>) => (
	<li className="flex flex-col gap-2">{children}</li>
)

export const WorkExperienceHeader = ({
	company,
	date,
	role
}: PropsWithChildren<{
	company: string
	role: string
	date: {
		start: string
		end?: string
	}
}>) => (
	<section>
		<h5 aria-label="Company" className="text-xl font-medium sm:text-2xl">
			{company}
		</h5>

		<h6 aria-label="Employment Role" className="text-lg sm:text-xl">
			{role}
		</h6>

		<p className="flex gap-1" aria-label="Exployment Period">
			{date.start} - {date.end ?? 'Present'}
		</p>
	</section>
)

const Responsibilities = ({
	responsibilities
}: {
	responsibilities: string[]
}) => {
	return (
		<ul
			aria-label="Responsibilities and Accomplishment"
			className="flex flex-col gap-2 overflow-hidden list-inside print:list-disc"
		>
			{responsibilities.map((responsibility, index) => (
				<ResponsibilityItem key={index}>{responsibility}</ResponsibilityItem>
			))}
		</ul>
	)
}

const ResponsibilityItem = ({ children }: PropsWithChildren<{}>) => {
	const [isListItemVisible, setListItemVisibility] = useState(false)

	const listItem = useRef<HTMLLIElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			setListItemVisibility(entries[0].isIntersecting)
		})
		listItem.current && observer.observe(listItem.current)
	}, [])

	return (
		<li
			ref={listItem}
			className={
				"p-4 rounded-md shadow-md print:p-0 print:shadow-none bg-white/5 print:bg-transparent transition-['transform_opacity'] duration-500" +
				' ' +
				(isListItemVisible
					? 'translate-x-0 opacity-100'
					: 'translate-x-44 opacity-0 print:opacity-100 print:translate-x-0 motion-reduce:opacity-100 motion-reduce:translate-x-0')
			}
		>
			{children}
		</li>
	)
}
