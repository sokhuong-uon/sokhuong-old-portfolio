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

		<section className="space-y-2">
			<p className="text-xl font-medium sm:text-2xl">
				<span className="sr-only ">University:</span>
				{university}
			</p>

			<div className="flex flex-col gap-1 text-sm text-black dark:text-gray-400 print:text-black">
				<p className="">
					<span className="sr-only ">Major:</span>
					{major}
				</p>

				<p className="flex items-center gap-1">
					<span className="sr-only ">Academic year:</span>
					{date.start} - {date.end ?? 'Present'}
				</p>
			</div>
		</section>
	</section>
)
