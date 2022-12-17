import create from 'zustand'

export type Responsive =
	| 'xs'
	| 'sm' // min width 640
	| 'md' // min width 768
	| 'lg' // min width 1024
	| 'xl' // min width 1280
	| '2xl' // min width 1536

type ResponsiveState = {
	screenSize: Responsive
	setScreenSize: (screen: Responsive) => void
}

export const useResponsiveStore = create<ResponsiveState>()(set => ({
	screenSize: 'xs',
	setScreenSize: screen => set({ screenSize: screen })
}))
