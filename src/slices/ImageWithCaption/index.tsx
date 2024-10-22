import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import {Image} from "@superrb/next-addons/components";

/**
 * Props for `ImageWithCaption`.
 */
export type ImageWithCaptionProps =
  SliceComponentProps<Content.ImageWithCaptionSlice>

/**
 * Component for "ImageWithCaption" Slices.
 */
const ImageWithCaption = ({ slice }: ImageWithCaptionProps): JSX.Element => {
  const {
    image,
    caption,
    width
  } = slice.primary

  return (
    <section
      className="image-with-caption"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour={"light"}
      data-slice-width={width.replace(/[\W_]+/g," ")
        .toLowerCase()
        .split(' ')
        .join('')}
    >
      <div className="image-with-caption__container">
        <div className="image-with-caption__inner">
          <Image
            image={image}
            className="image-with-caption__image"
            sizes=""
          />
          {caption && (
            <div className="image-with-caption__footer">
              <div className="image-with-caption__footer-container">
                <p className="image-with-caption__caption">{caption}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ImageWithCaption
