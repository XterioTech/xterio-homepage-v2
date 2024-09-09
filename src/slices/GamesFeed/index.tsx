import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `GamesFeed`.
 */
export type GamesFeedProps = SliceComponentProps<Content.GamesFeedSlice>

/**
 * Component for "GamesFeed" Slices.
 */
const GamesFeed = ({ slice }: GamesFeedProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for games_feed (variation: {slice.variation}) Slices
    </section>
  )
}

export default GamesFeed
