import { a, to as interpolate, useSprings } from '@react-spring/web'
import { useCursor } from '@react-three/drei'
import { useDrag } from '@use-gesture/react'
import { useState } from 'react'

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
	x: 0,
	y: i * -4,
	scale: 1,
	rot: -10 + Math.random() * 20,
	delay: i * 100
})

const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform

const trans = (r: number, s: number) =>
	`perspective(1500px) rotateX(30deg) rotateY(${
		r / 10
	}deg) rotateZ(${r}deg) scale(${s})`

function Deck({ cards }: { cards: { image: string; link: string }[] }) {
	const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
	const [active, setActive] = useState(false)
	useCursor(active, 'grabbing')

	const [props, api] = useSprings(cards.length, i => ({
		...to(i),
		from: from(i)
	})) // Create a bunch of springs using the helpers above
	// Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity

	const bind = useDrag(
		({
			args: [index],
			down,
			movement: [mx],
			direction: [xDir],
			velocity: [vx]
		}) => {
			const trigger = vx > 0.2 // If you flick hard enough it should trigger the card to fly out
			const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
			if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
			down && setActive(true)
			!down && setActive(false)

			api.start(i => {
				if (index !== i) return // We're only interested in changing spring-data for the current spring
				const isGone = gone.has(index)
				const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
				const rot = mx / 100 + (isGone ? dir * 10 * vx : 0) // How much the card tilts, flicking it harder makes it rotate faster
				const scale = down ? 1.1 : 1 // Active cards lift up a bit
				return {
					x,
					rot,
					scale,
					delay: undefined,
					config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }
				}
			})

			if (!down && gone.size === cards.length)
				setTimeout(() => {
					gone.clear()
					api.start(i => to(i))
				}, 600)
		}
	)

	// Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
	return (
		<>
			{props.map(({ x, y, rot, scale }, i) => (
				<a.div
					className={
						'w-56 p-4 h-96 touch-none fcc absolute will-change-transform '
					}
					key={i}
					style={{
						x,
						y
					}}
				>
					{/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
					<a.div
						{...bind(i)}
						style={{
							transform: interpolate([rot, scale], trans),
							backgroundImage: `url(${cards[i].image})`,

							boxShadow:
								'0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3)'
						}}
						className="relative w-full h-full bg-black bg-center bg-no-repeat bg-cover rounded-md touch-none will-change-transform "
					/>
					<a
						href={'https://' + cards[i].link}
						className="absolute w-9/12 text-center truncate text-white/40 drop-shadow-sm bottom-12"
					>
						{cards[i].link}
					</a>
				</a.div>
			))}
		</>
	)
}

function Decks({ cards }: { cards: { image: string; link: string }[] }) {
	return (
		<div className="h-full fcc touch-none">
			<Deck cards={cards} />
		</div>
	)
}

export { Decks }
