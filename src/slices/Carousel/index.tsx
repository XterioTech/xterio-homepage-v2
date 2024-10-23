'use client'

import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import {CarouselSliceDefaultPrimaryBlockItem} from "../../../prismicio-types";
import {useEffect, useState} from "react";
import {useEventListener} from "@superrb/react-addons/hooks";
import {Image} from "@superrb/next-addons/components";

/**
 * Props for `Carousel`.
 */
export type CarouselProps = SliceComponentProps<Content.CarouselSlice>

const Marquee = ({
  items,
  minVisible = 1,
}: {
  items: CarouselSliceDefaultPrimaryBlockItem[]
  minVisible?: number
}) => {
  minVisible = Math.max(minVisible, items.length * 2)

  const displayedItems = []
  let totalLength = 0
  while (totalLength < minVisible) {
    displayedItems.push(items)
    totalLength += items.length
  }

  return displayedItems.map((items, i) => (
    <div className="carousel__marquee" key={i}>
      {items.map(({ image, name, owner_handle }, j) => (
        <div className="carousel__block carousel-block" key={j}>
          <Image
            image={image}
            className="carousel-block__image objFit"
            sizes="25vw"
          />
          {name && (
            <p className="carousel-block__name">{name}</p>
          )}
          {owner_handle && (
            <p className="carousel-block__handle">{owner_handle}</p>
          )}
        </div>
      ))}
    </div>
  ))
}

/**
 * Component for "Carousel" Slices.
 */
const Carousel = ({ slice }: CarouselProps): JSX.Element => {
  const [ready, setReady] = useState(false)
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    setScreenWidth(window.innerWidth)
    setReady(true)
  }, [])

  useEventListener('resize', () => {
    setScreenWidth(window.innerWidth)
  })

  return (
    <section
      className="carousel"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour="light"
    >
      <div className="carousel__container">
        <div className="carousel__inner" data-slice-backgroundcolour="dark">
          <Marquee
            items={slice.primary.block}
            minVisible={!ready ? 6 : Math.ceil(screenWidth / 150)}
          />
        </div>
      </div>
    </section>
  )
}

export default Carousel
