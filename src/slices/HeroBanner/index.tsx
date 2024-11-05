'use client'

import {asLink, Content} from '@prismicio/client'
import Button, {ButtonVariant} from "@/components/button";
import {PrismicRichText, SliceComponentProps} from '@prismicio/react'
import {useIsInViewport, useIsMobile, useMotionAllowed} from '@superrb/react-addons/hooks'
import {useEffect, useState} from "react";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import {Image} from "@superrb/next-addons/components";
import GameBlock from "@/components/game-block";
import HeaderGradient from "@/components/header-gradient";

/**
 * Props for `HeroBanner`.
 */
export type HeroBannerProps = SliceComponentProps<Content.HeroBannerSlice>

/**
 * Component for "HeroBanner" Slices.
 */
const HeroBanner = ({ slice }: HeroBannerProps): JSX.Element => {
  const {
    title,
    text,
    button_1_url,
    button_1_text,
    button_2_url,
    button_2_text,
    theme,
    animation_direction,
    game_block_button_text
  } = slice.primary
  
  let button1Colour = 'black'
  if (theme == 'Dark') {
    button1Colour = 'white'
  }

  let button2Colour = 'white'
  if (theme == 'Dark') {
    button2Colour = 'outline'
  }

  let carouselDirection = animation_direction.toLowerCase() as string

  const isMotionAllowed = useMotionAllowed()
  const { isInViewport, setRef } = useIsInViewport()
  const [imagesReady, setImagesReady] = useState<boolean>(false)
  const isMobile = useIsMobile(true)

  if (isMobile) {
    carouselDirection = "horizontal"
  } else {
    carouselDirection = animation_direction.toLowerCase() as string
  }

  useEffect(() => {
    if (isInViewport) {
      setImagesReady(true)
    }
  }, [isInViewport])

  const gamesCount = slice.primary.block.length
  const gamesCountHalf = Math.round(gamesCount / 2)
  const leftSide = slice.primary.block.slice(0,gamesCountHalf)
  const rightSide = slice.primary.block.slice(gamesCountHalf,gamesCount)

  return (
    <section
      className="hero-banner banner"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-carouseldirection={animation_direction}
      data-slice-backgroundcolour={theme
        .toLowerCase()
        .split(' ')
        .join('')}
    >
     <HeaderGradient />
      <div className="hero-banner__container banner__container">
        <div className="hero-banner__content banner__content">
          <div className="hero-banner__inner">
            <h1 className="hero-banner__title banner__title">{title}</h1>
            <div className="hero-banner__text banner__text">
              <PrismicRichText field={text} />
            </div>
            {asLink(button_1_url) && button_1_text && (
              <Button
                href={button_1_url}
                label={button_1_text}
                variants={[button1Colour as ButtonVariant]}
                className="hero-banner__button banner__button"
              />
            )}
            {asLink(button_2_url) && button_2_text && (
              <Button
                href={button_2_url}
                label={button_2_text}
                variants={[button2Colour as ButtonVariant]}
                className="hero-banner__button banner__button"
              />
            )}
          </div>
        </div>
        <div className="hero-banner__media banner__media">
          <div className="hero-banner__swiper" ref={setRef}>
            <>
              {imagesReady ?
                <>
                  <Swiper
                    modules={[Autoplay]}
                    allowTouchMove={false}
                    simulateTouch={false}
                    direction={carouselDirection === 'vertical' ? 'vertical' : 'horizontal'}
                    height={900}
                    spaceBetween={17}
                    slidesPerView={'auto'}
                    speed={14000}
                    loop={true}
                    autoplay={isMotionAllowed ? {
                        delay: 0
                      } :
                      false}
                  >
                    {leftSide.map(({ image, type, url }, index) => {
                      return (
                        <SwiperSlide key={`hero-banner__left-slide--${index}`}>
                          <GameBlock
                            image={image}
                            blockType={type}
                            buttonText={game_block_button_text}
                            buttonUrl={url}
                          />
                        </SwiperSlide>
                      )
                    })}
                    {leftSide.map(({ image, type, url }, index) => {
                      return (
                        <SwiperSlide key={`hero-banner__left-slide--${index}`}>
                          <GameBlock
                            image={image}
                            blockType={type}
                            buttonText={game_block_button_text}
                            buttonUrl={url}
                          />
                        </SwiperSlide>
                      )
                    })}
                    {leftSide.map(({ image, type, url }, index) => {
                      return (
                        <SwiperSlide key={`hero-banner__left-slide--${index}`}>
                          <GameBlock
                            image={image}
                            blockType={type}
                            buttonText={game_block_button_text}
                            buttonUrl={url}
                          />
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>
                  {animation_direction === 'Vertical' && (
                    <Swiper
                      modules={[Autoplay]}
                      allowTouchMove={false}
                      simulateTouch={false}
                      direction={carouselDirection === 'vertical' ? 'vertical' : 'horizontal'}
                      height={900}
                      spaceBetween={17}
                      slidesPerView={'auto'}
                      speed={14000}
                      loop={true}
                      autoplay={isMotionAllowed ? {
                          delay: 0,
                          reverseDirection: true
                        } :
                        false}

                    >
                      {rightSide.map(({ image, type, url }, index) => {
                        return (
                          <SwiperSlide key={`hero-banner__left-slide--${index}`}>
                            <GameBlock
                              image={image}
                              blockType={type}
                              buttonText={game_block_button_text}
                              buttonUrl={url}
                            />
                          </SwiperSlide>
                        )
                      })}
                      {rightSide.map(({ image, type, url }, index) => {
                        return (
                          <SwiperSlide key={`hero-banner__left-slide--${index}`}>
                            <GameBlock
                              image={image}
                              blockType={type}
                              buttonText={game_block_button_text}
                              buttonUrl={url}
                            />
                          </SwiperSlide>
                        )
                      })}
                      {rightSide.map(({ image, type, url }, index) => {
                        return (
                          <SwiperSlide key={`hero-banner__left-slide--${index}`}>
                            <GameBlock
                              image={image}
                              blockType={type}
                              buttonText={game_block_button_text}
                              buttonUrl={url}
                            />
                          </SwiperSlide>
                        )
                      })}
                    </Swiper>
                  )}

                </>
                : ''}
            </>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
