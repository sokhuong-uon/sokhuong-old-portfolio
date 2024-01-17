import { BubbleMenu, isNodeSelection } from '@tiptap/react'
import { useTiptapContext } from './context'
import * as Toolbar from '@radix-ui/react-toolbar'
import { PropsWithChildren } from 'react'
import { cn } from 'lib/utils'
import {
	TextAlignCenterIcon,
	TextAlignLeftIcon,
	TextAlignRightIcon
} from '@radix-ui/react-icons'

export const ImageBubbleMenu = () => {
	const editor = useTiptapContext().editor
	return (
		<BubbleMenu
			editor={editor!}
			tippyOptions={{ appendTo: 'parent' }}
			shouldShow={({ state }) => {
				return (
					isNodeSelection(state.selection) &&
					state.selection.node.type.name == 'image'
				)
			}}
			pluginKey="image-adjustment-menu"
		>
			<button
				className="p-2 bg-rose-600"
				onClick={() => {
					alert('you better click!')
				}}
			>
				Click me, Image Daddy
			</button>

			<Toolbar.Root>
				<ImageAlignToggleGroup />
			</Toolbar.Root>
		</BubbleMenu>
	)
}

const ToolbarItem = ({
	children,
	className,
	...props
}: PropsWithChildren<Toolbar.ToolbarToggleItemProps>) => (
	<Toolbar.ToggleItem
		className={cn(
			'flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 first:ml-0 data-[state=on]:bg-violet5 data-[state=on]:text-violet11',
			className
		)}
		{...props}
	>
		{children}
	</Toolbar.ToggleItem>
)

function ImageAlignToggleGroup() {
	const editor = useTiptapContext().editor

	return (
		<Toolbar.ToggleGroup
			type="single"
			defaultValue="left"
			aria-label="Text alignment"
			onValueChange={value => {
				// editor?.commands.setTextAlign(value)
				editor?.commands.updateAttributes('image', {
					align: value
				})
			}}
		>
			<ToolbarItem value="left" aria-label="Left aligned">
				<TextAlignLeftIcon />
			</ToolbarItem>

			<ToolbarItem value="unset" aria-label="Unset">
				<TextAlignCenterIcon />
			</ToolbarItem>

			<ToolbarItem value="right" aria-label="Right aligned">
				<TextAlignRightIcon />
			</ToolbarItem>
		</Toolbar.ToggleGroup>
	)
}
