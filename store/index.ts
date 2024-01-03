import create from 'zustand'

const useApplicationStore = create()(set => ({
	isDev: false,
	trueUpIsDev: () => set({ isDev: true }),

	falsifyIsDev: () => set({ isDev: false })
}))

export { useApplicationStore }
