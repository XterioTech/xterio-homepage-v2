'use client'

import { Content } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import {Image} from "@superrb/next-addons/components";
import {animator} from "@superrb/react-addons/utils";
import {LegacyRef, MutableRefObject, useEffect, useState} from "react";

/**
 * Props for `MeetTheTeam`.
 */
export type MeetTheTeamProps = SliceComponentProps<Content.MeetTheTeamSlice>

/**
 * Component for "MeetTheTeam" Slices.
 */
const MeetTheTeam = ({ slice }: MeetTheTeamProps): JSX.Element => {

  const {
    title,
    text
  } = slice.primary

  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  return (
    <section
      className="meet-the-team"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      data-slice-backgroundcolour={"dark"}
    >
      <div className="meet-the-team__container">
        <header className="meet-the-team__header team-header">
          <h3 className="team-header__title" ref={animator as LegacyRef<HTMLHeadingElement>}>{title}</h3>
          <div className="team-header__text"><PrismicRichText field={text} /></div>
        </header>
        <div className="meet-the-team__team">
          {slice.primary.employee.map(({ name, role, image }, index) => (
            <div className="meet-the-team__block employee" key={index}>
              <Image
                image={image}
                className="employee__image"
                sizes=""
              />
              <h3 className="employee__name">{name}</h3>
              <p className="employee__role">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MeetTheTeam
