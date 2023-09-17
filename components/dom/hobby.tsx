import React, { PropsWithChildren } from 'react'
import { SectionHeader } from './section-header'
import { SVGIcon } from './svg-icon'
import { SkillItem } from './skill'

export const HobbySection = () => {
	return (
		<section>
			<SectionHeader
				text="hobbies"
				id="hobbies-section-header"
				className="print:rounded-r-full"
			>
				<SVGIcon width={16} height={16}>
					<path
						fill="currentColor"
						fillRule="evenodd"
						d="M8 12.8a4.8 4.8 0 1 0 0-9.601A4.8 4.8 0 0 0 8 12.8ZM6.2 7.4a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2Zm4.2-.6a.6.6 0 1 1-1.2 0 .6.6 0 0 1 1.2 0Zm-.278 3.321a.599.599 0 1 0-.85-.848 1.8 1.8 0 0 1-2.545 0 .6.6 0 0 0-.849.848 3 3 0 0 0 4.244 0Z"
						clipRule="evenodd"
					/>
				</SVGIcon>
			</SectionHeader>

			<ul className="flex flex-col gap-2 p-4 dark:text-gray-300 print:flex-row print:flex-wrap print:gap-1">
				<HobbyItem>Singing</HobbyItem>
				<HobbyItem>Dancing... Nah! not really</HobbyItem>
				<HobbyItem>Coding ¯\_(ツ)_/¯</HobbyItem>
				<SkillItem summary="YouTube">
					<div className="p-4">
						What ever it is just put the youtube iframe here.
					</div>
				</SkillItem>
			</ul>
		</section>
	)
}

const HobbyItem = ({ children }: PropsWithChildren) => {
	return (
		<li className="flex items-center flex-shrink-0 p-4 shadow-md print:px-2 print:py-1 dark:bg-white/5 print:shadow-none print:w-fit print:border print:rounded-full">
			{children}
		</li>
	)
}
