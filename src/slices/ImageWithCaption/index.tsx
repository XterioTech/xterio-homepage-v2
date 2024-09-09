import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `ImageWithCaption`.
 */
export type ImageWithCaptionProps =
  SliceComponentProps<Content.ImageWithCaptionSlice>

/**
 * Component for "ImageWithCaption" Slices.
 */
const ImageWithCaption = ({ slice }: ImageWithCaptionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for image_with_caption (variation: {slice.variation}
      ) Slices
    </section>
  )
}

export default ImageWithCaption
