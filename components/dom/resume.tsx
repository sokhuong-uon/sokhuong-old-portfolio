import Image from 'next/image'
import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
import profileImage from '../../public/profile.jpg'
import { SVGIcon } from './svg-icon'
import { WorkExperiences } from './experience'
import { SectionHeader } from './section-header'
import { EducationItem } from './education-item'

export const Resume = () => {
	return (
		<article
			id="resume"
			aria-label="Resume"
			className="w-full max-w-7xl  relative aspect-[595/842]  bg-white dark:bg-black dark:text-white space-y-8"
		>
			<ResumeHeader />

			<main className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 print:grid-cols-2 print:grid-rows-1">
				<section
					id="experience"
					aria-label="Work Experiences"
					className="lg:col-start-2 lg:row-start-1 print:col-start-2 pring:row-start-1"
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
					className="row-start-2 lg:row-start-1 lg:col-start-1 print:row-start-1 print:col-start-1"
				>
					<ResumeAddress />

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
									fill-rule="evenodd"
									d="M9.054 3.22a.6.6 0 0 1 .383.312c.29.58.506.932.724 1.218.221.289.454.525.809.88A4.19 4.19 0 0 1 12.2 8.6a4.201 4.201 0 1 1-7.17-2.97.6.6 0 0 1 1.024.424c0 .672.042 1.184.239 1.593.108.224.277.444.567.64.07-.637.197-1.413.368-2.148.135-.58.303-1.158.504-1.64.1-.242.213-.472.342-.67.125-.193.285-.39.493-.528a.6.6 0 0 1 .487-.08Zm.219 7.853A1.8 1.8 0 0 1 6.2 9.8s.527.3 1.5.3c0-.6.3-2.4.75-2.7.3.6.472.776.823 1.127S9.8 9.34 9.8 9.8c0 .46-.176.922-.527 1.273Z"
									clip-rule="evenodd"
								/>
							</SVGIcon>
						</SectionHeader>
					</section>
				</section>
			</main>
		</article>
	)
}

const ResumeHeader = () => (
	<header className="relative flex flex-col w-full gap-2 p-4">
		<section className="flex gap-4">
			<figure
				className="relative flex items-center w-14 max-w-[16rem] 2xs:w-20 sm:w-28 md:w-56"
				aria-labelledby="profile-picture-description"
			>
				<Image
					alt="sokhuong's profile picture 2023"
					src={profileImage}
					priority
					quality={60}
					placeholder="blur"
					sizes="(max-width: 375px) 52px,(max-width: 640px) 76px, (max-width: 768px) 108px,220px"
					className="object-cover border-2 border-black rounded-full aspect-square"
				/>

				<figcaption
					id="profile-picture-description"
					className="flex-1 bg-pink-600 sr-only"
				>
					My profile picture. Professional headshot in 2023. I am wearing a blue
					T-shirt.
				</figcaption>
			</figure>

			<div className="flex flex-col flex-1 justify-evenly md:justify-start md:py-4">
				<h1 className="w-full text-xl font-medium uppercase opacity-90 2xs:text-3xl sm:text-5xl">
					uon sokhuong
				</h1>

				<h2 className="w-full text-base uppercase text-white/70 print:text-gray-900 md:mb-2 md:mt-auto 2xs:text-xl sm:text-2xl">
					web developer
				</h2>

				<section className="hidden md:flex" aria-label="Self Introduction">
					<IntroductionParagraph />
				</section>
			</div>
		</section>

		<section className="md:hidden" aria-label="Self Introduction">
			<IntroductionParagraph />
		</section>
	</header>
)

const IntroductionParagraph = () => (
	<p className="max-w-3xl text-white/70 print:text-gray-900 2xs:text-lg sm:text-lg">
		Hi, I am Sokhuong, experienced in building{' '}
		<i role="presentation">Optimized</i>, Responsive UI with good{' '}
		<i role="presentation">Accessibility</i>, Animation, and{' '}
		<i role="presentation" aria-label="S E O">
			SEO
		</i>
		.
		<br />I could quickly <i role="presentation">research</i>,{' '}
		<i role="presentation">analyze</i>, and{' '}
		<i role="presentation">learn new technologies</i>.
	</p>
)

const ResumeAddress = () => (
	<address className="p-4">
		<ul className="space-y-2" aria-label="Contact Information">
			<ContactItem ariaLabel="Phone Number">
				<SVGIcon>
					<path
						fill="currentColor"
						d="M6.78.628a.6.6 0 0 1 .42.572v3h2.4a.6.6 0 0 1 .492.944l-4.2 6A.6.6 0 0 1 4.8 10.8v-3H2.4a.6.6 0 0 1-.492-.944l4.2-6A.6.6 0 0 1 6.78.628Z"
					></path>
				</SVGIcon>

				<ContactItemContent href="tel:+85561812917">
					061 812 917
				</ContactItemContent>
			</ContactItem>

			<ContactItem ariaLabel="Portfolio Website" className="hidden print:flex">
				<SVGIcon>
					<path
						fill="currentColor"
						d="M7.552 2.752a1.2 1.2 0 1 1 1.696 1.696l-1.8 1.8a1.2 1.2 0 0 1-1.696 0 .6.6 0 0 0-.849.849 2.4 2.4 0 0 0 3.394 0l1.8-1.8a2.4 2.4 0 0 0-3.394-3.394l-.9.9a.6.6 0 1 0 .849.849l.9-.9Zm-3 3a1.2 1.2 0 0 1 1.696 0 .6.6 0 1 0 .849-.849 2.4 2.4 0 0 0-3.394 0l-1.8 1.8a2.4 2.4 0 1 0 3.394 3.394l.9-.9a.6.6 0 1 0-.849-.849l-.9.9a1.2 1.2 0 1 1-1.696-1.696l1.8-1.8Z"
					></path>
				</SVGIcon>

				<ContactItemContent href="https://sokhuong.vercel.app">
					sokhuong.vercel.app
				</ContactItemContent>
			</ContactItem>

			<ContactItem ariaLabel="Github Profile">
				<SVGIcon>
					<path
						fill="currentColor"
						d="M6.013 1a4.987 4.987 0 0 0-1.577 9.72c.25.044.34-.109.34-.241 0-.118-.004-.432-.005-.848-1.388.301-1.681-.669-1.681-.669-.226-.576-.553-.73-.553-.73-.453-.309.034-.302.034-.302.501.035.763.514.763.514.446.762 1.169.542 1.451.414.046-.322.176-.542.318-.667-1.107-.125-2.271-.553-2.271-2.465 0-.543.195-.989.512-1.337-.05-.127-.223-.634.05-1.32 0 0 .418-.135 1.37.51.4-.11.825-.166 1.248-.167.425.002.851.057 1.249.167.952-.645 1.37-.51 1.37-.51.273.686.102 1.194.05 1.32.32.348.512.793.512 1.337 0 1.917-1.165 2.338-2.276 2.462.178.153.338.457.338.922 0 .668-.006 1.206-.006 1.369 0 .134.089.289.343.24A4.988 4.988 0 0 0 6.013 1Z"
					></path>
				</SVGIcon>

				<ContactItemContent href="https://github.com/sokhuong-uon">
					github.com/sokhuong-uon
				</ContactItemContent>
			</ContactItem>

			<ContactItem ariaLabel="Email Address">
				<SVGIcon>
					<path
						fillRule="evenodd"
						fill="currentColor"
						d="M1.764 3.847A1.2 1.2 0 0 0 1.2 4.865V9.6a1.2 1.2 0 0 0 1.2 1.2h7.2a1.2 1.2 0 0 0 1.2-1.2V4.865a1.2 1.2 0 0 0-.564-1.018l-3.6-2.25a1.2 1.2 0 0 0-1.272 0l-3.6 2.25Zm1.569 1.454a.6.6 0 1 0-.666.998l3 2a.6.6 0 0 0 .666 0l3-2a.6.6 0 1 0-.666-.998L6 7.079 3.333 5.3Z"
					></path>
				</SVGIcon>

				<ContactItemContent href="mailto:sokhuong.usk@gmail.com">
					sokhuong.usk@gmail.com
				</ContactItemContent>
			</ContactItem>

			<ContactItem ariaLabel="LinkedIn Profile">
				<SVGIcon>
					<path
						fill="currentColor"
						d="M11 11H8.778V7.25c0-.589-.661-1.078-1.25-1.078-.59 0-.972.49-.972 1.078V11H4.333V4.333h2.223v1.111c.366-.594 1.31-.977 1.955-.977A2.5 2.5 0 0 1 11 6.972V11Zm-7.778 0H1V4.333h2.222V11ZM2.112 1a1.111 1.111 0 1 1 0 2.222 1.111 1.111 0 0 1 0-2.222Z"
					></path>
				</SVGIcon>

				<ContactItemContent href="https://www.linkedin.com/in/sokhuong-uon">
					linkedin.com/in/sokhuong-uon
				</ContactItemContent>
			</ContactItem>
		</ul>
	</address>
)

const ContactItem = ({
	ariaLabel,
	children,
	className
}: PropsWithChildren<{ ariaLabel: string; className?: string }>) => (
	<li
		className={twMerge(
			'flex items-center gap-3 text-xl underline underline-offset-2 group',
			className
		)}
		style={{ textDecorationThickness: 1 }}
		aria-label={ariaLabel}
	>
		{children}
	</li>
)

const ContactItemContent = ({
	href,
	children
}: PropsWithChildren<{ href: string }>) => (
	<a
		href={href}
		className="transition-shadow rounded-sm ring-0 ring-offset-0 motion-reduce:transition-none focus-visible:ring-2 ring-yellow-400 focus:outline-none focus-visible:ring-offset-2 ring-offset-white dark:ring-offset-black focus-visible:decoration-yellow-400 decoration-gray-400"
	>
		{children}
	</a>
)
