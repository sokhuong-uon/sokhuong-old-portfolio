import create from 'zustand'

export type ExperienceDetail = {
	illustration: string
	skill: string
	description: string
}

export type Experiences =
	| 'reactjs'
	| 'threejs'
	| 'animation'
	| 'modeling'
	| 'backend'

type ApplicationState = {
	// Visibility of Experience Detail Section
	experienceDetialVisible: boolean
	trueUpExperienceDetailVisibility: () => void
	falsifyExperienceDetailVisibility: () => void

	// Experience Detail Data
	experiences: Record<Experiences, ExperienceDetail>
	viewingExperience: Experiences
	setViewingExperience: (experience: Experiences) => void
}

const useApplicationStore = create<ApplicationState>()(set => ({
	// Visibility of Experience Detail Section
	experienceDetialVisible: false,
	trueUpExperienceDetailVisibility: () =>
		set({ experienceDetialVisible: true }),

	falsifyExperienceDetailVisibility: () =>
		set({ experienceDetialVisible: false }),

	// Experience Detail Data
	experiences: {
		threejs: {
			illustration: 'CREATE IMMERSIVE',
			skill: '3D EXPERIENCE',
			description: 'For High Performance Visualization & 3D Environment.'
		},
		reactjs: {
			illustration: 'CREATE RESPONSIVE',
			skill: 'WEBSITES',
			description: 'Embracing Performance, Accessibility & Aesthetic.'
		},
		animation: {
			illustration: 'CONVEY INTRICATE',
			skill: 'ANIMATIONS',
			description: 'Illustrate nuances of purpose through interaction.'
		},
		modeling: {
			illustration: 'CREATE STUNNING',
			skill: '3D MODELING',
			description: 'For Enhancing Visual Aesthetic.'
		},
		backend: {
			illustration: 'BUILD',
			skill: 'BACK-END SERVER',
			description: 'With Nest.JS & Golang.'
		}
	},

	viewingExperience: 'threejs',

	setViewingExperience: experience => set({ viewingExperience: experience })
}))

export { useApplicationStore }
