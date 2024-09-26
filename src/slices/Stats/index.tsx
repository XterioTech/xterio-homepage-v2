import {Content} from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import TextLink from "@/components/text-link";

/**
 * Props for `Stats`.
 */
export type StatsProps = SliceComponentProps<Content.StatsSlice>

/**
 * Component for "Stats" Slices.
 */
const Stats = ({ slice }: StatsProps): JSX.Element => {
  const {
    url,
    link_text
  } = slice.primary

  return (
    <section
      className="stats"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour={"light"}
    >
      <div className="stats__container">
        <div className="stats__blocks">
          {slice.primary.stats.map(({ title, text }, index) => (
            <div className="stats__block" key={index}>
              <h3 className="stats__title">{title}</h3>
              <div className="stats__text"><PrismicRichText field={text} /></div>
            </div>
          ))}
        </div>
        <div className="stats__button">
          {url && link_text && (
            <TextLink
              href={url}
              label={link_text}
              className="stats__text-link"
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default Stats
