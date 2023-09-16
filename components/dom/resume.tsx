import { SVGIcon } from './svg-icon'
import { WorkExperiences } from './experience'
import { SectionHeader } from './section-header'
import { EducationItem } from './education-item'
import { ResumeHeader } from './resume-header'
import { ResumeAddress } from './resume-address'
import { ResumeFooter } from './resume-footer'

export const Resume = () => {
	return (
		<article
			id="resume"
			aria-label="Resume"
			className="w-full max-w-7xl  relative aspect-[595/842]  bg-white dark:bg-black dark:text-white space-y-8"
		>
			<ResumeHeader />

			<main
				aria-label="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 print:grid-cols-2 print:grid-rows-1"
				className="flex flex-col lg:flex-row-reverse print:flex-row-reverse"
			>
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

				<section
					id="general-information"
					aria-label="General Information"
					aria-labelledby="row-start-2 lg:row-start-1 lg:col-start-1 print:row-start-1 print:col-start-1"
					className="flex flex-col w-full gap-4 lg:w-1/2 print:flex-col-reverse lg:flex-col-reverse lg:justify-end print:justify-end"
				>
					<div>
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

						<section>
							<SectionHeader
								text="Top Skills"
								id="skills-section-header"
								className="print:rounded-r-full"
							>
								<SVGIcon width={16} height={16}>
									<path
										fill="currentColor"
										fillRule="evenodd"
										d="M9.054 3.22a.6.6 0 0 1 .383.312c.29.58.506.932.724 1.218.221.289.454.525.809.88A4.19 4.19 0 0 1 12.2 8.6a4.201 4.201 0 1 1-7.17-2.97.6.6 0 0 1 1.024.424c0 .672.042 1.184.239 1.593.108.224.277.444.567.64.07-.637.197-1.413.368-2.148.135-.58.303-1.158.504-1.64.1-.242.213-.472.342-.67.125-.193.285-.39.493-.528a.6.6 0 0 1 .487-.08Zm.219 7.853A1.8 1.8 0 0 1 6.2 9.8s.527.3 1.5.3c0-.6.3-2.4.75-2.7.3.6.472.776.823 1.127S9.8 9.34 9.8 9.8c0 .46-.176.922-.527 1.273Z"
										clipRule="evenodd"
									/>
								</SVGIcon>
							</SectionHeader>
						</section>

						{/* language */}
						<section>
							<SectionHeader
								text="Languages"
								id="language-section-header"
								className="print:rounded-r-full"
							>
								<SVGIcon width={16} height={16}>
									<path
										fill="currentColor"
										fillRule="evenodd"
										d="M6.2 3.2a.6.6 0 0 1 .6.6v.6h1.8a.6.6 0 0 1 0 1.2h-.853a11.322 11.322 0 0 1-1.035 2.868c.174.212.358.418.549.616a.6.6 0 1 1-.864.833 12.62 12.62 0 0 1-.333-.36 11.456 11.456 0 0 1-1.864 2.14.6.6 0 0 1-.8-.894 10.253 10.253 0 0 0 1.878-2.24 11.396 11.396 0 0 1-.892-1.496.6.6 0 1 1 1.074-.534c.14.282.293.557.458.823.25-.56.451-1.148.598-1.756H3.8a.6.6 0 1 1 0-1.2h1.8v-.6a.6.6 0 0 1 .6-.6Zm3.6 3.6a.6.6 0 0 1 .536.332l1.795 3.589a.475.475 0 0 1 .012.022l.594 1.188a.6.6 0 0 1-1.074.537l-.433-.868H8.37l-.434.868a.599.599 0 0 1-1.142-.308.6.6 0 0 1 .07-.228l.593-1.188.012-.023 1.794-3.59A.6.6 0 0 1 9.8 6.8Zm-.83 3.6h1.66L9.8 8.742 8.97 10.4Z"
										clipRule="evenodd"
									/>
								</SVGIcon>
							</SectionHeader>
						</section>

						{/* hobbies */}
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
						</section>

						{/* side project */}
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
						</section>
					</div>

					<ResumeAddress />
				</section>
			</main>

			<ResumeFooter />
		</article>
	)
}
