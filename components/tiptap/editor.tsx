'use client'
import {
	useEditor,
	EditorContent,
	BubbleMenu,
	FloatingMenu
} from '@tiptap/react'

import { StarterKit } from '@tiptap/starter-kit'
import { FloatingMenuToolbar } from './floating-menu-toolbar'

import { Color } from '@tiptap/extension-color'
import { Highlight } from '@tiptap/extension-highlight'
import { Link } from '@tiptap/extension-link'
import { Placeholder } from '@tiptap/extension-placeholder'
import { Table } from '@tiptap/extension-table'
import { TableCell } from '@tiptap/extension-table-cell'
import { TableHeader } from '@tiptap/extension-table-header'
import { TableRow } from '@tiptap/extension-table-row'
import { Typography } from '@tiptap/extension-typography'
import { Underline } from '@tiptap/extension-underline'
import { Youtube } from '@tiptap/extension-youtube'
import { FontFamily } from '@tiptap/extension-font-family'
import { Subscript } from '@tiptap/extension-subscript'
import { Superscript } from '@tiptap/extension-superscript'
import { TextAlign } from '@tiptap/extension-text-align'
import { TextStyle } from '@tiptap/extension-text-style'
import { Image } from './image'
import TiptapContext from './context'
import { ImageBubbleMenu } from './image-bubble-menu'
import { TextFormatingBubbleMenu } from './text-formating-bubble-menu'
import { CounterButtonNode } from './counter-button-extension'

const Tiptap = () => {
	const editor = useEditor({
		editorProps: {
			attributes: {
				class: 'prose w-full'
			}
		},
		content: `<p>Hello World! 🌎️</p><img src="/favicon.ico"></img>
			<react-component count="0"></react-component>`,
		extensions: [
			CounterButtonNode,
			StarterKit.configure({
				heading: {
					levels: [1, 2, 3]
				},
				dropcursor: {
					width: 2,
					color: '#2563eb'
				}
			}),
			Placeholder.configure({
				placeholder: 'Write something ...'
			}),

			TextStyle,
			TextAlign.configure({
				types: ['heading', 'paragraph']
			}),
			Underline,
			FontFamily.configure({
				types: ['textStyle']
			}),
			Highlight.configure({
				multicolor: true
			}),
			Color,
			Typography,

			Subscript,
			Superscript,

			Image.configure({
				inline: true,
				allowBase64: true
			}),

			Youtube,

			Table.configure({
				resizable: false,
				allowTableNodeSelection: true
			}),
			TableHeader,
			TableCell,
			TableRow,

			Link.configure({
				openOnClick: false,
				protocols: [
					'ftp',
					'mailto',
					{
						scheme: 'tel',
						optionalSlashes: true
					}
				]
			})
		]
	})

	return (
		<TiptapContext.Provider value={{ editor }}>
			<EditorContent editor={editor} className="" />

			<FloatingMenu
				editor={editor!}
				tippyOptions={{ appendTo: 'parent', offset: [10, 40], zIndex: 0 }}
			>
				<FloatingMenuToolbar>
					<FloatingMenuToolbar.TextStyleToggleGroup />
					<FloatingMenuToolbar.Separator />
					<FloatingMenuToolbar.TextAlignToggleGroup />
					{/* <FloatingMenuToolbar.Separator /> */}
					{/* <FloatingMenuToolbar.ColorPicker /> */}
					{/* <FloatingMenuToolbar.Separator /> */}
					{/* <FloatingMenuToolbar.LinkDialog /> */}
					<FloatingMenuToolbar.Separator />
					<FloatingMenuToolbar.ImageDialog />
					<FloatingMenuToolbar.Separator />
					<FloatingMenuToolbar.TableDialog />
					{/* <FloatingMenuToolbar.Separator /> */}
					{/* <FloatingMenuToolbar.YoutubeDialog /> */}
				</FloatingMenuToolbar>
			</FloatingMenu>

			<ImageBubbleMenu />
			<TextFormatingBubbleMenu />
		</TiptapContext.Provider>
	)
}

export { Tiptap as Editor }
