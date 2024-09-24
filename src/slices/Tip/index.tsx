import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Tip`.
 */
export type TipProps = SliceComponentProps<Content.TipSlice>

/**
 * Component for "Tip" Slices.
 */
const Tip = ({ slice }: TipProps): JSX.Element => {
  return (
    <section
      className="tip"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour={"light"}
    >
      Placeholder component for tip (variation: {slice.variation}) Slices
    </section>
  )
}

export default Tip
