import Image from 'next/image'
import profileImage from '../../public/profile.jpg'
import { IntroductionParagraph } from './introduction-paragraph'

export const ResumeHeader = () => (
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

				<h2 className="w-full text-base uppercase dark:text-white/70 print:text-gray-900 md:mb-2 md:mt-auto 2xs:text-xl sm:text-2xl">
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
