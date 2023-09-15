import { PropsWithChildren } from 'react'

export const EducationItem = ({
	university,
	date,
	major
}: PropsWithChildren<{
	university: string
	major: string
	date: {
		start: string
		end?: string
	}
}>) => (
	<section className="flex gap-2 p-4">
		<div className="flex-shrink-0 w-2 bg-blue-300 print:w-1 aspect-square"></div>

		<section>
			<p className="text-xl font-medium sm:text-2xl">
				<span className="sr-only ">University:</span>
				{university}
			</p>

			<div className="flex items-center gap-2 text-sm text-gray-400">
				<p className="">
					<span className="sr-only ">Major:</span>
					{major}
				</p>

				<span aria-hidden>·</span>

				<p className="flex items-center justify-center gap-1 ">
					<span className="sr-only ">Academic year:</span>
					{date.start} - {date.end ?? 'Present'}
				</p>
			</div>
		</section>
	</section>
)
