'use client'

import {asLink, Content} from '@prismicio/client'
import {PrismicRichText, SliceComponentProps} from '@prismicio/react'
import Button, { ButtonVariant } from '@/components/button'
import GameBlock from "@/components/game-block";
import {MutableRefObject, useEffect, useRef, useState} from "react";
import { useSlideshow } from '@superrb/react-addons/hooks'
import {SlideshowPagination} from "@superrb/react-addons/components";
import {isCentered} from "@superrb/react-addons/hooks/use-slideshow";

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

  const [ready, setReady] = useState(false)
  const slideshowRef =
    useRef<HTMLElement>() as MutableRefObject<HTMLUListElement>
  const slideshow = useSlideshow(slideshowRef)

  useEffect(() => {
    setReady(true)
  }, [])

  const slides = [...slice.primary.block]

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
              variants={[buttonColour as ButtonVariant, ButtonVariant.round]}
              className="games-feed-header__button"
            />
          </div>
        </header>


        <ul className="games-feed__slides" ref={slideshowRef}>
          {slides.map((item, i) => (
            <li
              className="games-feed__slide"
              key={`games-feed-item-${i}`}
              aria-current={i === slideshow.currentSlide}
            >
              <GameBlock
                image={item.image}
                blockType={item.type}
                buttonText={game_block_button_text}
                buttonUrl={item.button_1_url}
              />
            </li>
          ))}
        </ul>

        <SlideshowPagination slideshow={slideshow} />

      </div>

    </section>
  )
}
export default GamesFeed
