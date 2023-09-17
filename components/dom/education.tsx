import { SectionHeader } from './section-header'
import { SVGIcon } from './svg-icon'
import { EducationItem } from './education-item'

export const Education = () => {
	return (
		<section>
			<SectionHeader
				text="Education"
				id="education-section-header"
				className="print:rounded-r-full"
			>
				<SVGIcon width={16} height={16}>
					<g clipPath="url(#a)">
						<path
							fill="currentColor"
							d="M8.236 3.248a.6.6 0 0 0-.472 0l-4.2 1.8a.6.6 0 0 0 0 1.104l1.586.679a.6.6 0 0 1 .214-.155l2.4-1.028a.6.6 0 1 1 .472 1.103L6.6 7.453l1.164.498a.6.6 0 0 0 .472 0l4.2-1.8a.6.6 0 0 0 0-1.102l-4.2-1.8v-.001Zm-4.25 4.39L5 8.072v2.461a5.39 5.39 0 0 0-.63-.104.6.6 0 0 1-.534-.534 6.669 6.669 0 0 1 .15-2.257Zm3.594 4.306a5.415 5.415 0 0 0-1.38-.983V8.587l1.09.468a1.8 1.8 0 0 0 1.42 0l3.304-1.417c.18.738.23 1.502.15 2.257a.6.6 0 0 1-.534.534 5.38 5.38 0 0 0-3.21 1.515.6.6 0 0 1-.84 0ZM5.6 12.8a.6.6 0 0 0 .6-.6v-1.239a5.361 5.361 0 0 0-1.2-.428V12.2a.6.6 0 0 0 .6.6Z"
						/>
					</g>
					<defs>
						<clipPath id="a">
							<path fill="currentColor" d="M2 2h12v12H2z" />
						</clipPath>
					</defs>
				</SVGIcon>
			</SectionHeader>

			<EducationItem
				major="Bachelor of Software Engineering"
				university="Kirirom Institute of Technology"
				date={{ start: 'Nov 2018', end: 'Oct 2022' }}
			/>
		</section>
	)
}
