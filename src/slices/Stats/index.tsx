import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Stats`.
 */
export type StatsProps = SliceComponentProps<Content.StatsSlice>

/**
 * Component for "Stats" Slices.
 */
const Stats = ({ slice }: StatsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for stats (variation: {slice.variation}) Slices
    </section>
  )
}

export default Stats
