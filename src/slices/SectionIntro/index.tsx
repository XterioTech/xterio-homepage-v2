'use client'

import {asLink, Content} from '@prismicio/client'
import {PrismicRichText, SliceComponentProps} from '@prismicio/react'
import Button, {ButtonVariant} from "@/components/button";
import TextLink from '@/components/text-link'
import Anchor from "@/components/anchor";
import {animator} from "@superrb/react-addons/utils";
import {LegacyRef, MutableRefObject, useEffect, useState} from "react";
import {read} from "fs";

/**
 * Props for `SectionIntro`.
 */
export type SectionIntroProps =
  SliceComponentProps<Content.SectionIntroSlice>

/**
 * Component for "SectionIntro" Slices.
 */
const SectionIntro = ({ slice }: SectionIntroProps): JSX.Element => {
  const {
    title,
    text,
    button_url,
    button_text,
    link_url,
    link_text
  } = slice.primary

  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  return (
    <section
      className="section-intro"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour={"light"}
    >
      <Anchor anchorName={title} />
      <div className="section-intro__container">
        <h2 className="section-intro__title" ref={animator as LegacyRef<HTMLHeadingElement>}>{title}</h2>
        <div className="section-intro__text"><PrismicRichText field={text} /></div>

        {(asLink(button_url) || asLink(link_url)) && (
          <div className="section-intro__buttons">
            {asLink(button_url) && button_text && (
              <Button
                href={button_url}
                label={button_text}
                variants={[ButtonVariant.white]}
                className="section-intro__button"
              />
            )}

            {link_url && link_text && (
              <TextLink
                href={link_url}
                label={link_text}
                className="section-intro__text-link"
              />
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default SectionIntro
