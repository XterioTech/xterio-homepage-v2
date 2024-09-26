import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import ParallaxImage from '@/components/parallaxing-image'

/**
 * Props for `Image`.
 */
export type ImageProps = SliceComponentProps<Content.ImageSlice>

/**
 * Component for "Image" Slices.
 */
const Image = ({ slice }: ImageProps): JSX.Element => {
  const { image } = slice.primary

  return (
    <section
      className="parallax-image-section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour={"image"}
    >
      <ParallaxImage
        image={image}
        className="parallax-image-section__image objFit"
        sizes="(min-width: 63.75em) 48vw, 95vw"
      />
    </section>
  )
}

export default Image
