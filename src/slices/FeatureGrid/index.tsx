import { Content } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'

/**
 * Props for `FeatureGrid`.
 */
export type FeatureGridProps = SliceComponentProps<Content.FeatureGridSlice>

/**
 * Component for "FeatureGrid" Slices.
 */
const FeatureGrid = ({ slice }: FeatureGridProps): JSX.Element => {
  return (
    <section
      className="feature-grid"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour={"light"}
    >
      <div className="feature-grid__container">
        {slice.primary.block.map(({ title, width, text }, index) => (
          <div className="feature-grid__block" data-block-width={width.toLowerCase()
            .split(' ')
            .join('')} key={index}>
            <h3 className="feature-grid__title">{title}</h3>
            <div className="feature-grid__text"><PrismicRichText field={text} /></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeatureGrid
