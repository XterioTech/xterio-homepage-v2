import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `TwoColCta`.
 */
export type TwoColCtaProps = SliceComponentProps<Content.TwoColCtaSlice>

/**
 * Component for "TwoColCta" Slices.
 */
const TwoColCta = ({ slice }: TwoColCtaProps): JSX.Element => {
  return (
    <section
      className="two-col-cta"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour={"dark"}
    >
      Placeholder component for two_col_cta (variation: {slice.variation})
      Slices
    </section>
  )
}

export default TwoColCta
