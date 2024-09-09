import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `SectionIntro`.
 */
export type SectionIntroProps = SliceComponentProps<Content.SectionIntroSlice>

/**
 * Component for "SectionIntro" Slices.
 */
const SectionIntro = ({ slice }: SectionIntroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for section_intro (variation: {slice.variation})
      Slices
    </section>
  )
}

export default SectionIntro
