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
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem
} from 'components/ui/pagination'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'

export function ImageDialog() {
	return (
		<Dialog modal>
			<DialogTrigger asChild>
				<Toolbar.Button className="p-2 text-black bg-white dark:bg-black dark:text-white flex-shrink-0 flex-grow-0 basis-auto  rounded inline-flex text-[13px] leading-none items-center justify-center outline-none hover:bg-blue focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7">
					Image
				</Toolbar.Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Add Image</DialogTitle>

					<DialogDescription>
						Choose or upload the image and add a description.
					</DialogDescription>
				</DialogHeader>

				<ChooseImageDialogContent />

				<DialogFooter>
					<Button type="submit" className="w-full">
						Submit
					</Button>
				</DialogFooter>

				<FileDropzone />
			</DialogContent>
		</Dialog>
	)
}

function ChooseImageDialogContent() {
	return (
		<div className="w-full max-w-md bg-white border border-red-500 rounded-lg">
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<Button
							variant={'ghost'}
							aria-label="Go to previous page"
							size="default"
						>
							<ChevronLeftIcon className="w-4 h-4" />
							<span>Previous</span>
						</Button>
					</PaginationItem>
					<PaginationItem>
						<Button variant={'ghost'} aria-label="Go to page 1" size="default">
							1
						</Button>
					</PaginationItem>
					<PaginationItem>
						<Button variant={'ghost'} aria-label="Go to page 2" size="default">
							2
						</Button>
					</PaginationItem>

					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>

					<PaginationItem>
						<Button
							variant={'ghost'}
							aria-label="Go to page 15 (last page)"
							size="default"
						>
							15
						</Button>
					</PaginationItem>

					<PaginationItem>
						<Button
							variant={'ghost'}
							aria-label="Go to next page"
							size="default"
						>
							<span>Next</span>
							<ChevronRightIcon className="w-4 h-4" />
						</Button>
					</PaginationItem>
				</PaginationContent>
			</Pagination>

			<div className="grid grid-cols-3 gap-2 mb-4">
				<Image
					alt="Placeholder"
					className="w-full h-auto rounded"
					height="64"
					src="/placeholder.svg"
					style={{
						aspectRatio: '64/64',
						objectFit: 'cover'
					}}
					width="64"
				/>
			</div>

			<div className="">
				<label
					className="block mb-1 text-sm font-medium text-gray-700"
					htmlFor="description"
				>
					Description :
				</label>
				<Input
					id="description"
					placeholder="She sells seashells by the seashore ..."
				/>
			</div>
		</div>
	)
}

export function FileDropzone() {
	const onDrop = useCallback((acceptedFiles: File[]) => {
		acceptedFiles.forEach(file => {
			const reader = new FileReader()

			reader.onabort = () => console.log('file reading was aborted')
			reader.onerror = () => console.log('file reading has failed')
			reader.onload = () => {
				// Do whatever you want with the file contents
				const binaryStr = reader.result
				console.log(binaryStr)
			}
			reader.readAsArrayBuffer(file)
		})
	}, [])

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

	return (
		<div {...getRootProps()} className="w-full h-full">
			<input {...getInputProps()} />
			{isDragActive ? (
				<p>Drop the files here ...</p>
			) : (
				<p>Drag and drop some files here, or click to select files</p>
			)}
		</div>
	)
}
