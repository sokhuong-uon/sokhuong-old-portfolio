import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
import { SVGIcon } from './svg-icon'

export const ResumeAddress = () => (
	<address className="hidden px-4 py-0 space-y-2 lg:block print:block">
		<ContactItem ariaLabel="Portfolio Website" className="hidden print:flex">
			<SVGIcon>
				<path
					fill="currentColor"
					d="M7.552 2.752a1.2 1.2 0 1 1 1.696 1.696l-1.8 1.8a1.2 1.2 0 0 1-1.696 0 .6.6 0 0 0-.849.849 2.4 2.4 0 0 0 3.394 0l1.8-1.8a2.4 2.4 0 0 0-3.394-3.394l-.9.9a.6.6 0 1 0 .849.849l.9-.9Zm-3 3a1.2 1.2 0 0 1 1.696 0 .6.6 0 1 0 .849-.849 2.4 2.4 0 0 0-3.394 0l-1.8 1.8a2.4 2.4 0 1 0 3.394 3.394l.9-.9a.6.6 0 1 0-.849-.849l-.9.9a1.2 1.2 0 1 1-1.696-1.696l1.8-1.8Z"
				></path>
			</SVGIcon>

			<ContactItemContent href="https://sokhuong.vercel.app">
				sokhuong.vercel.app
			</ContactItemContent>
		</ContactItem>

		<ContactItem ariaLabel="Github Profile">
			<SVGIcon>
				<path
					fill="currentColor"
					d="M6.013 1a4.987 4.987 0 0 0-1.577 9.72c.25.044.34-.109.34-.241 0-.118-.004-.432-.005-.848-1.388.301-1.681-.669-1.681-.669-.226-.576-.553-.73-.553-.73-.453-.309.034-.302.034-.302.501.035.763.514.763.514.446.762 1.169.542 1.451.414.046-.322.176-.542.318-.667-1.107-.125-2.271-.553-2.271-2.465 0-.543.195-.989.512-1.337-.05-.127-.223-.634.05-1.32 0 0 .418-.135 1.37.51.4-.11.825-.166 1.248-.167.425.002.851.057 1.249.167.952-.645 1.37-.51 1.37-.51.273.686.102 1.194.05 1.32.32.348.512.793.512 1.337 0 1.917-1.165 2.338-2.276 2.462.178.153.338.457.338.922 0 .668-.006 1.206-.006 1.369 0 .134.089.289.343.24A4.988 4.988 0 0 0 6.013 1Z"
				></path>
			</SVGIcon>

			<ContactItemContent href="https://github.com/sokhuong-uon">
				github.com/sokhuong-uon
			</ContactItemContent>
		</ContactItem>

		<ContactItem ariaLabel="Email Address">
			<SVGIcon>
				<path
					fillRule="evenodd"
					fill="currentColor"
					d="M1.764 3.847A1.2 1.2 0 0 0 1.2 4.865V9.6a1.2 1.2 0 0 0 1.2 1.2h7.2a1.2 1.2 0 0 0 1.2-1.2V4.865a1.2 1.2 0 0 0-.564-1.018l-3.6-2.25a1.2 1.2 0 0 0-1.272 0l-3.6 2.25Zm1.569 1.454a.6.6 0 1 0-.666.998l3 2a.6.6 0 0 0 .666 0l3-2a.6.6 0 1 0-.666-.998L6 7.079 3.333 5.3Z"
				></path>
			</SVGIcon>

			<ContactItemContent href="mailto:sokhuong.usk@gmail.com">
				sokhuong.usk@gmail.com
			</ContactItemContent>
		</ContactItem>

		<ContactItem ariaLabel="LinkedIn Profile">
			<SVGIcon>
				<path
					fill="currentColor"
					d="M11 11H8.778V7.25c0-.589-.661-1.078-1.25-1.078-.59 0-.972.49-.972 1.078V11H4.333V4.333h2.223v1.111c.366-.594 1.31-.977 1.955-.977A2.5 2.5 0 0 1 11 6.972V11Zm-7.778 0H1V4.333h2.222V11ZM2.112 1a1.111 1.111 0 1 1 0 2.222 1.111 1.111 0 0 1 0-2.222Z"
				></path>
			</SVGIcon>

			<ContactItemContent href="https://www.linkedin.com/in/sokhuong-uon">
				linkedin.com/in/sokhuong-uon
			</ContactItemContent>
		</ContactItem>
	</address>
)

const ContactItem = ({
	ariaLabel,
	children,
	className
}: PropsWithChildren<{ ariaLabel: string; className?: string }>) => (
	<li
		className={twMerge(
			'flex items-center gap-3 text-xl underline underline-offset-2 group',
			className
		)}
		style={{ textDecorationThickness: 1 }}
		aria-label={ariaLabel}
	>
		{children}
	</li>
)

const ContactItemContent = ({
	href,
	children
}: PropsWithChildren<{ href: string }>) => (
	<a
		href={href}
		className="transition-shadow rounded-sm ring-0 ring-offset-0 motion-reduce:transition-none focus-visible:ring-2 ring-yellow-400 focus:outline-none focus-visible:ring-offset-2 ring-offset-white dark:ring-offset-black focus-visible:decoration-yellow-400 decoration-gray-400 dark:text-gray-200"
	>
		{children}
	</a>
)
