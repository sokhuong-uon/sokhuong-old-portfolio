import { PropsWithChildren } from 'react'
import { SectionHeader } from './section-header'
import { SVGIcon } from './svg-icon'

export const Skill = () => {
	return (
		<section className="">
			<SectionHeader
				text="Skills"
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

			<ul className="p-4 space-y-2">
				<li>
					<SkillItem summary="Implement Responsive Web UI">
						<p className="p-2 text-gray-900 dark:text-gray-400">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
							interdum mattis lectus, at semper risus posuere vitae. Etiam risus
							metus, ullamcorper quis tellus sit amet, pulvinar posuere metus.
							Aenean sit amet malesuada enim. Curabitur porttitor urna nec lorem
							ultrices feugiat nec vel purus. In varius gravida auctor.
						</p>
					</SkillItem>
				</li>

				<li>
					<SkillItem summary="Improve Web Content Accessibility">
						<p className="p-2 text-gray-900 dark:text-gray-400">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
							interdum mattis lectus, at semper risus posuere vitae. Etiam risus
							metus, ullamcorper quis tellus sit amet, pulvinar posuere metus.
							Aenean sit amet malesuada enim. Curabitur porttitor urna nec lorem
							ultrices feugiat nec vel purus. In varius gravida auctor.
						</p>
					</SkillItem>
				</li>

				<li>
					<SkillItem summary="Search Engine Optimization">
						<p className="p-2 text-gray-900 dark:text-gray-400">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
							interdum mattis lectus, at semper risus posuere vitae. Etiam risus
							metus, ullamcorper quis tellus sit amet, pulvinar posuere metus.
							Aenean sit amet malesuada enim. Curabitur porttitor urna nec lorem
							ultrices feugiat nec vel purus. In varius gravida auctor.
						</p>
					</SkillItem>
				</li>

				<li>
					<SkillItem summary="Performance Optimization">
						<p className="p-2 text-gray-900 dark:text-gray-400">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
							interdum mattis lectus, at semper risus posuere vitae. Etiam risus
							metus, ullamcorper quis tellus sit amet, pulvinar posuere metus.
							Aenean sit amet malesuada enim. Curabitur porttitor urna nec lorem
							ultrices feugiat nec vel purus. In varius gravida auctor.
						</p>
					</SkillItem>
				</li>

				<li>
					<SkillItem summary="2D & 3D Graphic Animation">
						<p className="p-2 text-gray-900 dark:text-gray-400">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
							interdum mattis lectus, at semper risus posuere vitae. Etiam risus
							metus, ullamcorper quis tellus sit amet, pulvinar posuere metus.
							Aenean sit amet malesuada enim. Curabitur porttitor urna nec lorem
							ultrices feugiat nec vel purus. In varius gravida auctor.
						</p>
					</SkillItem>
				</li>

				<li>
					<SkillItem summary="Improve Code Quality With Good Tools">
						<p className="p-2 text-gray-900 dark:text-gray-400">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
							interdum mattis lectus, at semper risus posuere vitae. Etiam risus
							metus, ullamcorper quis tellus sit amet, pulvinar posuere metus.
							Aenean sit amet malesuada enim. Curabitur porttitor urna nec lorem
							ultrices feugiat nec vel purus. In varius gravida auctor.
						</p>
					</SkillItem>
				</li>
			</ul>
		</section>
	)
}

export const SkillItem = ({
	summary,
	children
}: PropsWithChildren<{ summary: string }>) => {
	return (
		<details className="group">
			<summary className="flex items-center justify-between p-4 list-none rounded-md shadow-md cursor-pointer dark:text-gray-300 bg-white/5 print:shadow-none print:py-1 print:px-2 print:border print:rounded-full print:w-fit">
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
