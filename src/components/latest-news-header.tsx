'use client'

import { animator } from '@superrb/react-addons/utils'
import { LegacyRef, ReactNode } from 'react'

const LatestNewsHeader = ({
  title,
  socialIcons,
}: {
  title: string
  socialIcons: ReactNode
}) => (
  <header className="latest-news__header news-header">
    <h3
      className="news-header__title"
      ref={animator as LegacyRef<HTMLHeadingElement>}
    >
      {title}
    </h3>
    {socialIcons}
  </header>
)

export default LatestNewsHeader
