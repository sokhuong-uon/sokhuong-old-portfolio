import { PropsWithChildren } from 'react'

const SketchLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			Sketch layout
			<div>{children}</div>
		</>
	)
}
export default SketchLayout
