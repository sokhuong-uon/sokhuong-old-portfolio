import { PropsWithChildren } from 'react'

type CardProps = PropsWithChildren

export const Card = ({ children }: CardProps) => (
	<span className="relative fcc w-10 h-10 overflow-hidden rounded-md bg-white/5">
		{children}
	</span>
)
