import { mergeAttributes, Node } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'

import { CounterButton } from './counter-button'

export const CounterButtonNode = Node.create({
	name: 'reactComponent',

	group: 'block',

	atom: true,

	addAttributes() {
		return {
			count: {
				default: 0
			}
		}
	},

	parseHTML() {
		return [
			{
				tag: 'react-component'
			}
		]
	},

	renderHTML({ HTMLAttributes }) {
		return ['react-component', mergeAttributes(HTMLAttributes)]
	},

	addNodeView() {
		return ReactNodeViewRenderer(CounterButton)
	}
})
