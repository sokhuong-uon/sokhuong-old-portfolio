import { DockList } from './DockList'

export const Dock = () => {
	return (
		<div className="flex mb-[10px] items-end justify-center gap-2 px-3 bg-black rounded-lg pointer-events-auto w-96 text-white/80 h-14">
			<DockList />
		</div>
	)
}
