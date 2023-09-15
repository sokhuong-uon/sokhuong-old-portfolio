import { PropsWithChildren, SVGProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const SVGIcon = ({
	width = 12,
	height = 12,
	className,
	children
}: PropsWithChildren<
	Pick<SVGProps<SVGElement>, 'width' | 'height' | 'className'>
>) => (
	<svg
		width={width}
		height={height}
		fill="none"
		className={twMerge(
			'scale-[2] flex-shrink-0 group-focus-within:text-yellow-400 transition-colors',
			className
		)}
	>
		{children}
	</svg>
)
