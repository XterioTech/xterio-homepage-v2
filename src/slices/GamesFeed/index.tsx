import {asLink, Content} from '@prismicio/client'
import {PrismicRichText, SliceComponentProps} from '@prismicio/react'
import {Button, Image} from "@superrb/next-addons/components";
import {ButtonVariant} from "@/components/button";

/**
 * Props for `GamesFeed`.
 */
export type GamesFeedProps = SliceComponentProps<Content.GamesFeedSlice>

/**
 * Component for "GamesFeed" Slices.
 */
const GamesFeed = ({ slice }: GamesFeedProps): JSX.Element => {

  const {
    title,
    text,
    button_1_url,
    button_1_text,
    game_block_button_text
  } = slice.primary

  return (
    <section
      className="games-feed"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="games-feed__container">
        <h2 className="games-feed__title">{title}</h2>
        <div className="games-feed__text"><PrismicRichText field={text} /></div>
        <Button
          href={button_1_url}
          label={button_1_text}
          variants={[ButtonVariant.round]}
          className="games-feed__button"
        />
      </div>

    </section>
  )
}
export default GamesFeed
