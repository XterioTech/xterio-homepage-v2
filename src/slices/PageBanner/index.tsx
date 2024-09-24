import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `PageBanner`.
 */
export type PageBannerProps = SliceComponentProps<Content.PageBannerSlice>

/**
 * Component for "PageBanner" Slices.
 */
const PageBanner = ({ slice }: PageBannerProps): JSX.Element => {
  return (
    <section
      className="page-banner"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour={"light"}
    >
      Placeholder component for page_banner (variation: {slice.variation})
      Slices
    </section>
  )
}

export default PageBanner
