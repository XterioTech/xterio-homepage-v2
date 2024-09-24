import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `FourColGrid`.
 */
export type FourColGridProps = SliceComponentProps<Content.FourColGridSlice>

/**
 * Component for "FourColGrid" Slices.
 */
const FourColGrid = ({ slice }: FourColGridProps): JSX.Element => {
  return (
    <section
      className="four-col-grid"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour={"light"}
    >
      Placeholder component for four_col_grid (variation: {slice.variation})
      Slices
    </section>
  )
}

export default FourColGrid
