import { PropsWithChildren } from 'react'

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
export default RootLayout
