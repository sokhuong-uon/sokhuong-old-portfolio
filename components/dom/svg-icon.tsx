import { SVGProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const SVGIcon = ({
	width = 12,
	height = 12,
	clipRule,
	fillRule,
	path,
	className
}: Pick<SVGProps<SVGElement>, 'width' | 'height' | 'className'> &
	Pick<SVGProps<SVGPathElement>, 'path' | 'clipRule' | 'fillRule'>) => (
	<svg
		width={width}
		height={height}
		fill="none"
		className={twMerge(
			'scale-[2] flex-shrink-0 group-focus-within:text-yellow-400 transition-colors',
			className
		)}
	>
		<path
			fill="currentColor"
			fillRule={fillRule}
			d={path}
			clipRule={clipRule}
		/>
	</svg>
)
