import { BubbleMenu, isTextSelection } from '@tiptap/react'
import { useTiptapContext } from './context'

export const TextFormatingBubbleMenu = () => {
	const editor = useTiptapContext().editor
	return (
		<BubbleMenu
			editor={editor!}
			tippyOptions={{ appendTo: 'parent' }}
			shouldShow={({ state }) => {
				return (
					isTextSelection(state.selection) && !state.selection.empty
					//  &&
					// !(state.selection.$anchor.parent.type.name === 'figcaption')
				)
			}}
			pluginKey="text-formating-bubble-menu"
		>
			<button
				className="p-2 bg-blue-600"
				onClick={() => {
					alert('you better click!')
				}}
			>
				Click me, Text Daddy
			</button>
		</BubbleMenu>
	)
}
