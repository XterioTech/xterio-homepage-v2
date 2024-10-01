'use client'
import {asLink, Content} from '@prismicio/client'
import {PrismicRichText, SliceComponentProps} from '@prismicio/react'
import Button, {ButtonVariant} from "@/components/button";
import {Image} from "@superrb/next-addons/components";

import React, { useEffect, useContext, useState, LegacyRef } from 'react'
import ReactPlayer from 'react-player/lazy'
import { usePathname } from 'next/navigation'
import {
  useIsMobile,
  useMotionAllowed,
  useIsInViewport,
} from '@superrb/react-addons/hooks'

/**
 * Props for `TwoColCta`.
 */
export type TwoColCtaProps = SliceComponentProps<Content.TwoColCtaSlice>

/**
 * Component for "TwoColCta" Slices.
 */
const TwoColCta = ({ slice }: TwoColCtaProps): JSX.Element => {
  const {
    title,
    text,
    button_url,
    button_text,
    image,
    video
  } = slice.primary

  const isMobile = useIsMobile(true)
  const isMotionAllowed = useMotionAllowed()
  const [ready, setReady] = useState<boolean>(false)
  const [videoPlaying, setVideoPlaying] = useState<boolean>(false)
  const [playButton, setPlayButton] = useState<boolean>(true)
  const { isInViewport, setRef } = useIsInViewport(true)
  const pathname = usePathname()

  useEffect(() => {
    setReady(true)

    return () => {
      setReady(false)
    }
  }, [])

  return (
    <section
      className="two-col-cta"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour={"dark"}
    >
      <div className="two-col-cta__container">
        <div className="two-col-cta__col two-col-cta-col--text">
          <h2 className="two-col-cta__title">{title}</h2>
          <div className="two-col-cta__text"><PrismicRichText field={text} /></div>
          {asLink(button_url) && button_text && (
            <Button
              href={button_url}
              label={button_text}
              variants={[ButtonVariant.white]}
              className="two-col-cta__button"
            />
          )}
        </div>
        <div className="two-col-cta__col two-col-cta-col--image">
          {ready && !isMobile && video && (
            <ReactPlayer
              url={asLink(video) as string}
              muted={true}
              playsinline={true}
              playing={isMotionAllowed && playButton}
              autoPlay={true}
              loop={true}
              className="two-col-cta__video"
              light={false}
              height={'100%'}
              width={'100%'}
              onPlay={() => setVideoPlaying(true)}
              config={{
                vimeo: {
                  playerOptions: {
                    responsive: true,
                  },
                },
              }}
            />
          )}
          <Image
            image={image}
            className="two-col-cta__image objFit"
            sizes=""
          />
        </div>
      </div>
    </section>
  )
}

export default TwoColCta
