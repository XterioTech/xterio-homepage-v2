'use client'

import {PrismicRichText, SliceComponentProps} from '@prismicio/react'
import Button, { ButtonVariant } from '@/components/button'
import GameBlock from "@/components/game-block";
import {Content} from '@prismicio/client';
import Flickity from "react-flickity-component";

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

  const flickityOptions = {
    initialIndex: 2,
    wrapAround: true,
    prevNextButtons: false,
    adaptiveHeight: true
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
        <header className="games-feed__header games-feed-header">
          <div className="games-feed-header__container">
            <h2 className="games-feed-header__title">{title}</h2>
            <div className="games-feed-header__text"><PrismicRichText field={text} /></div>
            <Button
              href={button_1_url}
              label={button_1_text}
              variants={[buttonColour as ButtonVariant]}
              className="games-feed-header__button"
            />
          </div>
        </header>

        <Flickity
          className={'games-feed__blocks carousel'} // default ''
          elementType={'div'} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          {slice.primary.block.map(({ image, type, url }, index) => (
            <div className="games-feed__block carousel-block" key={index}>
              <GameBlock
                image={image}
                blockType={type}
                buttonText={game_block_button_text}
                buttonUrl={url}
              />
            </div>
          ))}
        </Flickity>

      </div>

    </section>
  )
}
export default GamesFeed
