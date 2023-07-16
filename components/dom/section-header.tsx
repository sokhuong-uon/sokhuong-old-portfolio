import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

export const SectionHeader = ({
	children,
	text,
	className,
	id
}: PropsWithChildren<{ text: string; className?: string; id?: string }>) => (
	<h4
		id={id}
		className={twMerge(
			'flex w-full dark:text-black print:text-white text-white items-center font-medium text-xl bg-black dark:bg-white/60 gap-2 px-4 uppercase py-2',
			className
		)}
	>
		{children}
		{text}
	</h4>
)
