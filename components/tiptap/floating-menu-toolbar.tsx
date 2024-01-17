import {
	FontBoldIcon,
	FontItalicIcon,
	StrikethroughIcon,
	TextAlignCenterIcon,
	TextAlignLeftIcon,
	TextAlignRightIcon,
	UnderlineIcon
} from '@radix-ui/react-icons'
import * as Toolbar from '@radix-ui/react-toolbar'
import { cn } from 'lib/utils'
import { PropsWithChildren } from 'react'
import { useTiptapContext } from './context'
import { ImageDialog } from './image-dialog'
import { TableDialog } from './table-dialog'

export const FloatingMenuToolbar = ({ children }: PropsWithChildren) => (
	<Toolbar.Root
		className="flex p-[10px] w-full min-w-max rounded-md bg-white dark:bg-slate-900 shadow-md"
		aria-label="Formatting options"
	>
		{children}
	</Toolbar.Root>
)

const Separator = () => (
	<Toolbar.Separator className="w-[1px] bg-mauve6 mx-[10px]" />
)

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

function TextStyleToggleGroup() {
	const editor = useTiptapContext().editor

	return (
		<Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
			<ToolbarItem
				onClick={() => {
					editor?.chain().focus().toggleBold().run()
				}}
				value="bold"
				aria-label="Bold"
			>
				<FontBoldIcon />
			</ToolbarItem>

			<ToolbarItem
				onClick={() => {
					editor?.chain().focus().toggleItalic().run()
				}}
				value="italic"
				aria-label="Italic"
			>
				<FontItalicIcon />
			</ToolbarItem>

			<ToolbarItem
				onClick={() => {
					editor?.chain().focus().toggleStrike().run()
				}}
				value="strikethrough"
				aria-label="Strike through"
			>
				<StrikethroughIcon />
			</ToolbarItem>

			<ToolbarItem
				onClick={() => {
					editor?.chain().focus().toggleUnderline().run()
				}}
				value="underline"
				aria-label="Underline"
			>
				<UnderlineIcon />
			</ToolbarItem>
		</Toolbar.ToggleGroup>
	)
}

function TextAlignToggleGroup() {
	const editor = useTiptapContext().editor

	return (
		<Toolbar.ToggleGroup
			type="single"
			defaultValue="left"
			aria-label="Text alignment"
			onValueChange={value => {
				editor?.commands.setTextAlign(value)
			}}
		>
			<ToolbarItem value="left" aria-label="Left aligned">
				<TextAlignLeftIcon />
			</ToolbarItem>

			<ToolbarItem value="center" aria-label="Center aligned">
				<TextAlignCenterIcon />
			</ToolbarItem>

			<ToolbarItem value="right" aria-label="Right aligned">
				<TextAlignRightIcon />
			</ToolbarItem>
		</Toolbar.ToggleGroup>
	)
}

FloatingMenuToolbar.TextStyleToggleGroup = TextStyleToggleGroup
FloatingMenuToolbar.TextAlignToggleGroup = TextAlignToggleGroup
FloatingMenuToolbar.Separator = Separator
FloatingMenuToolbar.ImageDialog = ImageDialog
FloatingMenuToolbar.TableDialog = TableDialog
