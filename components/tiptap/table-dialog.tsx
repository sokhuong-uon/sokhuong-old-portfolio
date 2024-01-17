import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle
} from 'components/ui/dialog'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import * as Toolbar from '@radix-ui/react-toolbar'
import { Button } from 'components/ui/button'
import {
	DialogFooter,
	DialogHeader,
	DialogPortal,
	DialogTrigger
} from 'components/ui/dialog'
import { Input } from 'components/ui/input'
import { useTiptapContext } from './context'

export function TableDialog() {
	const editor = useTiptapContext().editor
	const addTable = () => {
		console.log('Adding table...')

		editor
			?.chain()
			.focus()
			.insertTable({
				rows: 2,
				cols: 3,
				withHeaderRow: true
			})
			.run()
	}

	return (
		<Dialog modal>
			<DialogTrigger asChild>
				<Toolbar.Button className="p-2 text-black bg-white dark:bg-black dark:text-white flex-shrink-0 flex-grow-0 basis-auto  rounded inline-flex text-[13px] leading-none items-center justify-center outline-none hover:bg-blue focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7">
					Table
				</Toolbar.Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Add Table</DialogTitle>

					<DialogDescription>
						Choose or upload the image and add a description.
					</DialogDescription>
				</DialogHeader>

				<DialogFooter>
					<Button onClick={addTable} type="submit" className="w-full">
						Submit
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
