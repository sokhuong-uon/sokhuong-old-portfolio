import { Editor } from '@tiptap/react'
import { createContext, useContext } from 'react'

const TiptapContext = createContext<{ editor: Editor | null } | null>(null)

export function useTiptapContext() {
	const context = useContext(TiptapContext)

	if (!context) {
		throw new Error('useTiptapContext must be used within a Tiptap component')
	}

	return context
}

export default TiptapContext
