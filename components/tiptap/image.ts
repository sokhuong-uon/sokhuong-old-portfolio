import { mergeAttributes, Node, nodeInputRule } from '@tiptap/react'

export interface ImageOptions {
	inline: boolean
	allowBase64: boolean
	HTMLAttributes: Record<string, any>
}

declare module '@tiptap/react' {
	interface Commands<ReturnType> {
		image: {
			/**
			 * Add an image
			 */
			setImage: (options: {
				src: string
				alt?: string
				title?: string
			}) => ReturnType
		}
	}
}

export const inputRegex =
	/(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/

export const Image = Node.create<ImageOptions>({
	name: 'image',

	addOptions() {
		return {
			inline: false,
			allowBase64: false,
			HTMLAttributes: {}
		}
	},

	inline() {
		return this.options.inline
	},

	group() {
		return this.options.inline ? 'inline' : 'block'
	},

	draggable: false,

	addAttributes() {
		return {
			src: {
				default: null
			},
			alt: {
				default: null
			},
			title: {
				default: null
			},

			align: {
				default: 'unset',

				renderHTML: attributes => ({
					align: `${attributes.align}`,
					style:
						attributes.align === 'right'
							? 'margin: 8px 0 0 8px'
							: attributes.align === 'left'
							? 'margin: 8px 8px 0 0'
							: 'margin: 0'
				}),
				parseHTML: element => element.getAttribute('align')
			},

			width: {
				default: 600,
				renderHTML: attributes => ({
					style:
						attributes.width === 'auto'
							? 'width: auto;'
							: String(attributes.width).includes('px')
							? 'width: ' + attributes.width + ';'
							: 'width: ' + String(attributes.width) + 'px;',
					width: parseInt(attributes.width)
				}),
				parseHTML: element => element.style.width || 600
			}
		}
	},

	parseHTML() {
		return [
			{
				tag: this.options.allowBase64
					? 'img[src]'
					: 'img[src]:not([src^="data:"])'
			}
		]
	},

	renderHTML({ HTMLAttributes }) {
		return ['img', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)]
	},

	addCommands() {
		return {
			setImage:
				options =>
				({ commands }) => {
					return commands.insertContent({
						type: this.name,
						attrs: options
					})
				}
		}
	},

	addInputRules() {
		return [
			nodeInputRule({
				find: inputRegex,
				type: this.type,
				getAttributes: match => {
					const [, , alt, src, title] = match

					return { src, alt, title }
				}
			})
		]
	}
})
