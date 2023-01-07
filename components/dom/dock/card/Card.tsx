import { PropsWithChildren } from 'react'

type CardProps = PropsWithChildren

export const Card = ({ children }: CardProps) => (
	<span className="relative z-0 flex items-center justify-center w-full h-full overflow-hidden">
		{children}
	</span>
)
