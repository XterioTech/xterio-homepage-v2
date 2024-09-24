import {asLink, Content} from '@prismicio/client'
import {PrismicRichText, SliceComponentProps} from '@prismicio/react'
import Button, { ButtonVariant } from '@/components/button'

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
    game_block_button_text,
    theme
  } = slice.primary

  let buttonColour = 'outline'
  if (theme == 'Light') {
    buttonColour = 'black'
  }

  return (
    <section
      className="games-feed"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour={theme
        .toLowerCase()
        .split(' ')
        .join('')}
    >
      <div className="games-feed__container">
        <h2 className="games-feed__title">{title}</h2>
        <div className="games-feed__text"><PrismicRichText field={text} /></div>
        <Button
          href={button_1_url}
          label={button_1_text}
          variants={[buttonColour as ButtonVariant, ButtonVariant.round]}
          className="games-feed__button"
        />
        <div className="games-feed__blocks">
          {slice.primary.block.map(({ image }, index) => (
            <div className="games-feed__block games-feed-block" key={index}>
              <Button
                href={button_1_url}
                label={game_block_button_text}
                variants={[ButtonVariant.outline, ButtonVariant.square]}
                className="games-feed-block__button"
              />
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
export default GamesFeed
