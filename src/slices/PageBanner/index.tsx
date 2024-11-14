import {asLink, Content, FilledContentRelationshipField} from '@prismicio/client'
import {PrismicRichText, SliceComponentProps} from '@prismicio/react'
import Button, {ButtonVariant} from "@/components/button";
import {Image} from "@superrb/next-addons/components";
import HeaderGradient from "@/components/header-gradient";
import Animation from "@/components/animation";
import React, {useEffect, useState} from "react";
import ReactPlayer from "react-player/lazy";

/**
 * Props for `PageBanner`.
 */
export type PageBannerProps = SliceComponentProps<Content.PageBannerSlice>

/**
 * Component for "PageBanner" Slices.
 */
const PageBanner = ({ slice, className = '' }: PageBannerProps & { className?: string }): JSX.Element => {
  const {
    title,
    text,
    button_1_url,
    button_1_text,
    button_2_url,
    button_2_text,
    image,
    lottie_animation
  } = slice.primary

  const [ready, setReady] = useState<boolean>(false)

  let media = "image"
  if ((lottie_animation as FilledContentRelationshipField<"lottie_animation">)?.uid) {
    media = "lottie"
  }

  useEffect(() => {
    setReady(true)

    return () => {
      setReady(false)
    }
  }, [])

  return (
    <section
      className="page-banner banner"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour={"light"}
    >
      <HeaderGradient />
      <div className="page-banner__container banner__container">
        <div className="page-banner__content banner__content">
          <h1 className="page-banner__title banner__title">{title}</h1>
          <div className="page-banner__text banner__text">
            <PrismicRichText field={text} />
          </div>
          {asLink(button_1_url) && button_1_text && (
            <Button
              href={button_1_url}
              label={button_1_text}
              variants={[ButtonVariant.black]}
              className="page-banner__button"
            />
          )}
          {asLink(button_2_url) && button_2_text && (
            <Button
              href={button_2_url}
              label={button_2_text}
              variants={[ButtonVariant.white]}
              className="page-banner__button"
            />
          )}
        </div>
        <div className="page-banner__media banner__media">
          {ready && (
            <>
              {media === "lottie" ? (
                <Animation
                  animation={
                    lottie_animation as FilledContentRelationshipField<'lottie_animation'>
                  }
                />
              ) : (
                <Image
                  image={image}
                  className="page-banner__image objFit"
                  sizes=""
                />
              )}
            </>
          )}
        </div>
      </div>


    </section>
  )
}

export default PageBanner
