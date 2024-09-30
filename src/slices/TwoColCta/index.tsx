import {asLink, Content} from '@prismicio/client'
import {PrismicRichText, SliceComponentProps} from '@prismicio/react'
import Button, {ButtonVariant} from "@/components/button";
import {Image} from "@superrb/next-addons/components";

/**
 * Props for `TwoColCta`.
 */
export type TwoColCtaProps = SliceComponentProps<Content.TwoColCtaSlice>

/**
 * Component for "TwoColCta" Slices.
 */
const TwoColCta = ({ slice }: TwoColCtaProps): JSX.Element => {
  const {
    title,
    text,
    button_url,
    button_text,
    image
  } = slice.primary
  return (
    <section
      className="two-col-cta"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour={"dark"}
    >
      <div className="two-col-cta__container">
        <div className="two-col-cta__col two-col-cta-col--text">
          <h2 className="two-col-cta__title">{title}</h2>
          <div className="two-col-cta__text"><PrismicRichText field={text} /></div>
          {asLink(button_url) && button_text && (
            <Button
              href={button_url}
              label={button_text}
              variants={[ButtonVariant.white]}
              className="two-col-cta__button"
            />
          )}
        </div>
        <div className="two-col-cta__col two-col-cta-col--image">
          <Image
            image={image}
            className="two-col-cta__image objFit"
            sizes=""
          />
        </div>
      </div>
    </section>
  )
}

export default TwoColCta
