import { SVGIcon } from './svg-icon'
import { WorkExperiences } from './experience'
import { SectionHeader } from './section-header'
import { EducationItem } from './education-item'
import { ResumeHeader } from './resume-header'
import { ResumeAddress } from './resume-address'
import { ResumeFooter } from './footer'
import { LanguageSection } from './language-section'
import { HobbySection } from './hobby'
import { SideProject } from './side-project'
import { Education } from './education'
import { Skill } from './skill'

export const Resume = () => {
	return (
		<article
			id="resume"
			aria-label="Resume"
			className="w-full max-w-7xl  relative aspect-[595/842]  bg-white dark:bg-black dark:text-white space-y-8"
		>
			<ResumeHeader />

			<main className="flex flex-col lg:flex-row-reverse print:flex-row-reverse">
				{/* Work Experiences */}
				<section
					id="experience"
					aria-label="Work Experiences"
					aria-labelledby="lg:col-start-2 lg:row-start-1 print:col-start-2 pring:row-start-1"
					className="w-full lg:w-1/2"
				>
					<SectionHeader
						text="Experiences"
						id="work-experience-header"
						className="print:rounded-l-full"
					>
						<SVGIcon>
							<path
								fill="currentColor"
								d="M1.8 3.6a1.8 1.8 0 0 1 1.8-1.8h6a.6.6 0 0 1 .48.96L8.55 4.8l1.53 2.04a.6.6 0 0 1-.48.96h-6a.6.6 0 0 0-.6.6v1.8a.6.6 0 1 1-1.2 0V3.6Z"
							></path>
						</SVGIcon>
					</SectionHeader>

					<WorkExperiences />
				</section>

				{/* General Information */}
				<section
					id="general-information"
					aria-label="General Information"
					className="flex flex-col w-full gap-4 lg:w-1/2 print:flex-col-reverse lg:flex-col-reverse lg:justify-end print:justify-end"
				>
					<div>
						<Education />

						<Skill />

						<LanguageSection />

						<HobbySection />

						<SideProject />
					</div>

					<ResumeAddress />
				</section>
			</main>

			<ResumeFooter />
		</article>
	)
}
