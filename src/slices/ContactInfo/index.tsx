import { Content } from '@prismicio/client'
import {PrismicRichText, SliceComponentProps} from '@prismicio/react'

/**
 * Props for `ContactInfo`.
 */
export type ContactInfoProps = SliceComponentProps<Content.ContactInfoSlice>

/**
 * Component for "ContactInfo" Slices.
 */
const ContactInfo = ({ slice }: ContactInfoProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h1>{slice.primary.title}</h1>
      <PrismicRichText field={slice.primary.content} />
      <p>{slice.primary.email}</p>
    </section>
  )
}

export default ContactInfo
