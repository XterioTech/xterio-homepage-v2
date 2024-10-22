import { Content } from '@prismicio/client'
import {PrismicRichText, SliceComponentProps} from '@prismicio/react'
import {Image} from "@superrb/next-addons/components";

/**
 * Props for `Tip`.
 */
export type TipProps = SliceComponentProps<Content.TipSlice>

/**
 * Component for "Tip" Slices.
 */
const Tip = ({ slice }: TipProps): JSX.Element => {

  const {
    text
  } = slice.primary
  return (
    <section
      className="tip"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour={"light"}
    >
      <div className="tip__container">
        <div className="tip__inner">
          <div className="tip__text">
            <PrismicRichText field={text} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tip
