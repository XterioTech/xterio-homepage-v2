import { Content } from '@prismicio/client'
import {PrismicRichText, SliceComponentProps} from '@prismicio/react'

/**
 * Props for `Text`.
 */
export type TextProps = SliceComponentProps<Content.TextSlice>
/**
 * Component for "Text" Slices.
 */
const Text = ({ slice }: TextProps): JSX.Element => {
  const {
    text
  } = slice.primary

  return (
    <section
      className="text"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour={"light"}
    >
      <div className="text__container">
        <div className="text__inner">

          <PrismicRichText field={text} />
        </div>
      </div>
    </section>
  )
}

export default Text
