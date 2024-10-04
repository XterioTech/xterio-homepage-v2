import {asLink, Content} from '@prismicio/client'
import {PrismicRichText, SliceComponentProps} from '@prismicio/react'
import Button, {ButtonVariant} from "@/components/button";
import {Image} from "@superrb/next-addons/components";

/**
 * Props for `PageBanner`.
 */
export type PageBannerProps = SliceComponentProps<Content.PageBannerSlice>

/**
 * Component for "PageBanner" Slices.
 */
const PageBanner = ({ slice, className = '' }: PageBannerProps & { className?: string }): JSX.Element => {
  const {
    title,
    text,
    button_1_url,
    button_1_text,
    button_2_url,
    button_2_text,
    image
  } = slice.primary
  return (
    <section
      className="page-banner"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour={"light"}
    >
      <div className="page-banner__container">
        <div className="page-banner__content">
          <h1 className="page-banner__title">{title}</h1>
          <div className="page-banner__text">
            <PrismicRichText field={text} />
          </div>
          {asLink(button_1_url) && button_1_text && (
            <Button
              href={button_1_url}
              label={button_1_text}
              variants={[ButtonVariant.black]}
              className="page-banner__button"
            />
          )}
          {asLink(button_2_url) && button_2_text && (
            <Button
              href={button_2_url}
              label={button_2_text}
              variants={[ButtonVariant.white]}
              className="page-banner__button"
            />
          )}
        </div>
        <div className="page-banner__image">
          <Image
            image={image}
            className="page-banner__image objFit"
            sizes=""
          />
        </div>
      </div>


    </section>
  )
}

export default PageBanner
