'use client'

import LiveNodeList from 'live-node-list'
import { MutableRefObject, ReactNode, useEffect, useRef, useState } from 'react'
import FullLogo from './full-logo'
import {
  useEventListener,
  useLockBodyScroll,
} from '@superrb/react-addons/hooks'
import { MenuToggle } from '@superrb/react-addons/components'
import { useNavStore } from '@superrb/react-addons/store'
import { PrismicNextLink } from '@prismicio/next'
import { usePathname } from 'next/navigation'

const Header = ({ navigation, socialIcons }: { navigation: ReactNode, socialIcons: ReactNode }) => {
  const [sticky, setSticky] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const sections = useRef<LiveNodeList>() as MutableRefObject<LiveNodeList>
  const navOpen = useNavStore((state) => state.navOpen)
  const pathname = usePathname()

  useLockBodyScroll(navOpen)

  useEffect(() => {
    sections.current = new LiveNodeList('[data-slice-backgroundcolour]')
  }, [])

  useEventListener('scroll', () => {
    setSticky(window.scrollY > 50)
    updateHeaderTheme()
  })

  useEffect(() => {
    updateHeaderTheme()
  }, [pathname])

  const updateHeaderTheme = () => {
    for (const section of [...sections.current?.items]?.reverse()) {
      const { top } = section.getBoundingClientRect()

      if (top < 50) {
        setTheme(
          (section.dataset.sliceBackgroundcolour || 'light') as
            | 'light'
            | 'dark',
        )

        break
      }
    }
  }

  return (
    <header
      className={`header header--${theme} ${navOpen ? 'header--nav-open' : ''} ${sticky ? 'header--sticky' : ''}`}
    >
      <PrismicNextLink href="/">
        <FullLogo className="header__logo" />
      </PrismicNextLink>

      <div className="header__nav" id="nav" aria-hidden={!navOpen}>
        {navigation}
        {socialIcons}
      </div>

      <MenuToggle aria-controls="nav" />
    </header>
  )
}

export default Header
