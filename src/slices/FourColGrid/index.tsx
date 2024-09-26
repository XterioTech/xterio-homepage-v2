import {asLink, Content} from '@prismicio/client'
import {PrismicRichText, SliceComponentProps} from '@prismicio/react'
import Button, {ButtonVariant} from "@/components/button";
import { Image } from '@superrb/next-addons/components'

/**
 * Props for `FourColGrid`.
 */
export type FourColGridProps = SliceComponentProps<Content.FourColGridSlice>

/**
 * Component for "FourColGrid" Slices.
 */
const FourColGrid = ({ slice }: FourColGridProps): JSX.Element => {
  const {
    button_text,
  } = slice.primary
  return (
    <section
      className="four-col-grid"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour={"light"}
    >
      <div className="four-col-grid__container">
        {slice.primary.block.map(({ title, text, button_url, image }, index) => (
          <div className="four-col-grid__block" key={index}>
            <Image
              image={image}
              className="four-col-grid__image objFit"
              sizes=""
            />
            <h3 className="four-col-grid__title">{title}</h3>
            <div className="four-col-grid__text"><PrismicRichText field={text} /></div>
            {asLink(button_url) && button_text && (
              <div className="four-col-grid__footer">
                <Button
                  href={button_url}
                  label={button_text}
                  variants={[ButtonVariant.black, ButtonVariant.round]}
                  className="four-col-grid__button"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FourColGrid
