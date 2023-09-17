import { PropsWithChildren } from 'react'
import { SectionHeader } from './section-header'
import { SVGIcon } from './svg-icon'

export const LanguageSection = () => {
	const hour = new Date().getHours()
	const greet =
		hour < 5
			? 'It is nightime! 😴'
			: hour < 12
			? 'Good morning! 😊'
			: hour < 18
			? 'Good afternoon! 😊'
			: hour < 21
			? 'Good evening! 😊'
			: 'I think you should go to sleep 🥱'

	return (
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

			<ul className="p-4 space-y-2">
				<li>
					<LanguageItem summary="Khmer: Native">
						<p className="p-2 text-gray-900 dark:text-gray-400">
							<span className="">សួរស្ដី! ខ្ញុំឈ្មោះសុឃួង។</span>
							<br />
							ខ្ញុំមានបទពិសោធន៍បង្កើតគេហទំព័រដែលរចនាបទរបស់វាអាចបត់បែនបានទៅតាមទំហំអេក្រង់របស់ទូរស័ព្ទឬកុំព្យូទ័រ។
							ខ្ញុំអាចបង្កើតជីវចលសម្រាប់ផ្នែកណាមួយនៃគេហទំព័រជាទម្រង់ចលនាលើផ្ទៃរាប(2D)
							និងចលនាក្នុងលំហរ(3D)។
							<br />
							ទោះបីជាទំព័រមានលក្ខណៈស្មុកស្មាញ
							ក៏ខ្ញុំព្យាយាមកែសម្រួលឲ្យងាយស្រួលអានសម្រាប់អ្នកទស្សនាទូទៅក៏ដូចជាជនពិការដែលប្រើឧបករណ៍ជំនួយក្នុងការអានផងដែរ។
						</p>
					</LanguageItem>
				</li>

				<li>
					<LanguageItem summary="English: Professional working proficiency">
						<p className="p-2 text-gray-900 dark:text-gray-400">{greet}</p>
					</LanguageItem>
				</li>
			</ul>
		</section>
	)
}

const LanguageItem = ({
	summary,
	children
}: PropsWithChildren<{ summary: string }>) => {
	return (
		<details className="group">
			<summary className="flex items-center justify-between p-4 list-none rounded-md shadow-md cursor-pointer bg-white/5 print:shadow-none print:py-1 print:px-2 print:border print:rounded-full print:w-fit dark:text-gray-300">
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
