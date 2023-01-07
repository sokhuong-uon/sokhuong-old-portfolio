import { a } from '@react-spring/web'
import { useActiveDescription } from 'hooks/useActiveDescription'
import { Experiences, useApplicationStore } from 'store'

export const ExperienceDescription = () => {
	return (
		<section className="relative w-full h-full px-6 xl:px-20">
			<Description item="threejs" />
			<Description item="reactjs" />
			<Description item="animation" />
			<Description item="modeling" />
			<Description item="backend" />
		</section>
	)
}

export const Description: React.FC<{ item: Experiences }> = ({ item }) => {
	const experiences = useApplicationStore(state => state.experiences)
	const { y, opacity } = useActiveDescription(item)

	return (
		<div className="absolute w-full h-full ">
			<div className="relative w-full">
				<h3 className="relative w-full h-8 overflow-hidden text-lg font-semibold tracking-wider -top-full opacity-40">
					<a.span style={{ y, opacity }} className="absolute w-full h-full">
						{experiences[item].illustration}
					</a.span>
				</h3>

				<h2 className="relative w-full h-12 overflow-hidden text-4xl font-semibold lg:text-5xl">
					<a.span style={{ y, opacity }} className="absolute w-full h-full">
						{experiences[item].skill}
					</a.span>
				</h2>

				<h3 className="relative h-12 overflow-hidden font-normal opacity-50 sm:h-7">
					<a.span style={{ y }} className="absolute w-full h-full">
						{experiences[item].description}
					</a.span>
				</h3>
			</div>
		</div>
	)
}
