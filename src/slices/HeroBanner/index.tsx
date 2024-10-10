import {asLink, Content} from '@prismicio/client'
import Button, {ButtonVariant} from "@/components/button";
import {PrismicRichText, SliceComponentProps} from '@prismicio/react'

/**
 * Props for `HeroBanner`.
 */
export type HeroBannerProps = SliceComponentProps<Content.HeroBannerSlice>

/**
 * Component for "HeroBanner" Slices.
 */
const HeroBanner = ({ slice }: HeroBannerProps): JSX.Element => {
  const {
    title,
    text,
    button_1_url,
    button_1_text,
    button_2_url,
    button_2_text,
    theme
  } = slice.primary
  
  let button1Colour = 'black'
  if (theme == 'Dark') {
    button1Colour = 'white'
  }

  let button2Colour = 'white'
  if (theme == 'Dark') {
    button2Colour = 'outline'
  }

  return (
    <section
      className="hero-banner banner"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour={theme
        .toLowerCase()
        .split(' ')
        .join('')}
    >
      <div className="hero-banner__container banner__container">
        <div className="hero-banner__content banner__content">
          <h1 className="hero-banner__title banner__title">{title}</h1>
          <div className="hero-banner__text banner__text">
            <PrismicRichText field={text} />
          </div>
          {asLink(button_1_url) && button_1_text && (
            <Button
              href={button_1_url}
              label={button_1_text}
              variants={[button1Colour as ButtonVariant]}
              className="hero-banner__button banner__button"
            />
          )}
          {asLink(button_2_url) && button_2_text && (
            <Button
              href={button_2_url}
              label={button_2_text}
              variants={[button2Colour as ButtonVariant]}
              className="hero-banner__button banner__button"
            />
          )}
        </div>
        <div className="hero-banner__media banner__media">

        </div>
      </div>
    </section>
  )
}

export default HeroBanner
