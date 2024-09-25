import {asLink, Content} from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import Button, {ButtonVariant} from "@/components/button";

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
        {slice.primary.block.map(({ title, width, text, button_1_text, button_1_url, button_2_text, button_2_url }, index) => (
          <div className="feature-grid__block" data-block-width={width.toLowerCase()
            .split(' ')
            .join('')} key={index}>
            <h3 className="feature-grid__title">{title}</h3>
            <div className="feature-grid__text"><PrismicRichText field={text} /></div>
            {asLink(button_1_url) && button_1_text && (
              <Button
                href={button_1_url}
                label={button_1_text}
                variants={[ButtonVariant.black, ButtonVariant.round]}
                className="feature-grid__button"
              />
            )}
            {asLink(button_2_url) && button_2_text && (
              <Button
                href={button_2_url}
                label={button_2_text}
                variants={[ButtonVariant.white, ButtonVariant.round]}
                className="feature-grid__button"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeatureGrid
