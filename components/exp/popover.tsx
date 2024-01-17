'use client'
import * as React from 'react'
import * as Popover from '@radix-ui/react-popover'

const PopoverDemo = () => (
	<Popover.Root>
		<Popover.Trigger>More info</Popover.Trigger>
		<Popover.Portal>
			<Popover.Content>
				Some more info…
				<Popover.Arrow />
			</Popover.Content>
		</Popover.Portal>
	</Popover.Root>
)

export default PopoverDemo
