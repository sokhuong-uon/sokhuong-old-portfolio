import { ModeToggle } from 'components/mode-toggle'
import { Navbar } from 'components/navbar'
import { ThemeProvider } from 'components/theme-provider'
import { PropsWithChildren } from 'react'

import 'styles/globals.css'

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<body style={{ width: '100%', position: 'relative' }}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />

					<main>{children}</main>
				</ThemeProvider>
			</body>
		</html>
	)
}
export default RootLayout
