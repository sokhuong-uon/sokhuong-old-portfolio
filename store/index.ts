import create from 'zustand'

type ApplicationState = {
	experienceDetialVisible: boolean
	trueUpExperienceDetailVisibility: () => void
	falsifyExperienceDetailVisibility: () => void
}

const useApplicationStore = create<ApplicationState>()(set => ({
	experienceDetialVisible: false,
	trueUpExperienceDetailVisibility: () =>
		set({ experienceDetialVisible: true }),

	falsifyExperienceDetailVisibility: () =>
		set({ experienceDetialVisible: false })
}))

export { useApplicationStore }
