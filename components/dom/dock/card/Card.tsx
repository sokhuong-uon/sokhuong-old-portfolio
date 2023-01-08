import { PropsWithChildren } from 'react'

type CardProps = PropsWithChildren

export const Card = ({ children }: CardProps) => (
	<span className="relative w-10 h-10 overflow-hidden rounded-md fcc bg-white/5">
		{children}
	</span>
)
