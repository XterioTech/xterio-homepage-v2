import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import Button, {ButtonVariant} from "@/components/button";

/**
 * Props for `HeroBanner`.
 */
export type HeroBannerProps = SliceComponentProps<Content.HeroBannerSlice>

/**
 * Component for "HeroBanner" Slices.
 */
const HeroBanner = ({ slice }: HeroBannerProps): JSX.Element => {
  const {
    button_1_url,
    button_1_text,
    button_2_url,
    button_2_text,
    theme
  } = slice.primary

  return (
    <section
      className="hero-banner"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour={theme
        .toLowerCase()
        .split(' ')
        .join('')}
    >
      Placeholder component for hero_banner (variation: {slice.variation})
      Slices
      <Button
        href={button_1_url}
        label={button_1_text}
        variants={[ButtonVariant.black, ButtonVariant.round]}
        className="hero-banner__button"
      />
      <Button
        href={button_2_url}
        label={button_2_text}
        variants={[ButtonVariant.white, ButtonVariant.round]}
        className="hero-banner__button"
      />
    </section>
  )
}

export default HeroBanner
