import { PropsWithChildren } from 'react'
import { SectionHeader } from './section-header'
import { SVGIcon } from './svg-icon'

export const SideProject = () => {
	return (
		<section>
			<SectionHeader
				text="side projects"
				id="side-project-section-header"
				className="print:rounded-r-full"
			>
				<SVGIcon width={16} height={16}>
					<path
						fill="currentColor"
						fillRule="evenodd"
						d="M6.2 3.2a.6.6 0 0 0-.424 1.024l.424.424v2.255a.6.6 0 0 1-.176.424l-2.4 2.4C2.49 10.861 3.294 12.8 4.897 12.8h6.206c1.603 0 2.407-1.939 1.273-3.073l-2.4-2.4a.6.6 0 0 1-.176-.424V4.648l.424-.424A.6.6 0 0 0 9.8 3.2H6.2Zm1.2 3.703V4.4h1.2v2.503c0 .477.19.935.527 1.272l.617.617a2.4 2.4 0 0 0-1.303.061l-.282.094a2.4 2.4 0 0 1-1.518 0l-.338-.112a1.18 1.18 0 0 0-.068-.021l.638-.638A1.8 1.8 0 0 0 7.4 6.903Z"
						clipRule="evenodd"
					/>
				</SVGIcon>
			</SectionHeader>

			<ul className="p-4 space-y-2">
				<li>
					<SideProjectItem summary="Convert Equirectangular or Panorama Image to Cubemap Images">
						<div className="p-2">Wow this is indented</div>
					</SideProjectItem>
				</li>

				<li>
					<SideProjectItem summary="Discord UI Clone">
						<div className="p-2">Wow this is indented</div>
					</SideProjectItem>
				</li>
			</ul>
		</section>
	)
}

export const SideProjectItem = ({
	summary,
	children
}: PropsWithChildren<{ summary: string }>) => {
	return (
		<details className="group">
			<summary className="flex items-center justify-between p-4 list-none rounded-md shadow-md cursor-pointer dark:text-gray-300 bg-white/5 print:shadow-none print:border">
				<p>{summary}</p>

				<span className="transition group-open:rotate-180 print:hidden">
					<svg
						fill="none"
						height="24"
						shape-rendering="geometricPrecision"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						width="24"
					>
						<path d="M6 9l6 6 6-6"></path>
					</svg>
				</span>
			</summary>

			{children}
		</details>
	)
}
