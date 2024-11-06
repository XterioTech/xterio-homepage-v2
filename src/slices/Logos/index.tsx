'use client'

import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import {LogosSliceDefaultPrimaryLogosItem} from "../../../prismicio-types";
import {useEffect, useState} from "react";
import {useEventListener} from "@superrb/react-addons/hooks";
import {Image} from "@superrb/next-addons/components";

/**
 * Props for `Logos`.
 */
export type LogosProps = SliceComponentProps<Content.LogosSlice>

const Marquee = ({
   items,
   minVisible = 1,
 }: {
  items: LogosSliceDefaultPrimaryLogosItem[]
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
    <div className="logos__marquee" key={i}>
      {items.map(({ image }, j) => (
        <div className="logos__block" key={j}>
          <Image
            image={image}
            className="logos__image objFit"
            sizes="20vw"
          />
        </div>
      ))}
    </div>
  ))
}

/**
 * Component for "Logos" Slices.
 */
const Logos = ({ slice }: LogosProps): JSX.Element => {
  const {
    title,
    title_position,
    theme
  } = slice.primary

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
      className="logos"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour={theme
        .toLowerCase()
        .split(' ')
        .join('')}
    >
      {title && (
        <header className="logos__header logos-header" data-text-align={title_position.toLowerCase()}>
          <div className="logos-header__container">
            <h2 className="logos-header__title">{title}</h2>
          </div>
        </header>
      )}
      <div className="logos__container">
        <Marquee
          items={slice.primary.logos}
          minVisible={!ready ? 6 : Math.ceil(screenWidth / 150)}
        />
      </div>
    </section>
  )
}

export default Logos
