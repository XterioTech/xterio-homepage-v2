'use client'

import Button from '@/components/button'
import { Content, asLink } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import { useEventListener } from '@superrb/react-addons/hooks'
import { useState } from 'react'
import { kebabCase } from 'change-case'
import DropdownArrow from '@/components/icons/dropdown-arrow'
import { LinkBase } from '@superrb/next-addons/components'
import { useNavStore } from '@superrb/react-addons/store'

/**
 * Props for `NavigationItem`.
 */
export type NavigationItemProps =
  SliceComponentProps<Content.NavigationItemSlice> & {
    context: {
      menuName: string
    }
  }

/**
 * Component for "NavigationItem" Slices.
 */
const NavigationItem = ({
  slice: {
    primary: { link, label },
    items,
  },
  context: { menuName },
}: NavigationItemProps): JSX.Element => {
  const closeNav = useNavStore((state) => state.closeNav)
  const [subnavOpen, setSubnavOpen] = useState<boolean>(false)

  useEventListener(
    'click',
    () => {
      setSubnavOpen(false)
    },
    undefined,
    typeof document !== 'undefined' ? document : undefined,
  )

  const closeSubnav = () => {
    setSubnavOpen(false)
  }

  const href = asLink(link) as string

  let LinkComponent: typeof LinkBase | typeof Button = LinkBase
  if (menuName === 'secondary' || menuName === 'landing-page') {
    LinkComponent = Button
  }

  return (
    <li
      className={`nav__item ${
        items.length > 0 ? 'nav__item--has-children' : ''
      }`}
      onClick={() => setSubnavOpen((open) => !open)}
      aria-expanded={subnavOpen}
      aria-controls={`sub-nav-${kebabCase(label as string)}`}
    >
      {href ? (
        <LinkComponent
          href={href}
          className="nav__link"
          onClick={() => closeNav()}
        >
          {label}
        </LinkComponent>
      ) : (
        <span className="nav__link">{label}</span>
      )}

      {items.length > 0 && (
        <button
          className="nav__expand"
          onClick={(event) => {
            event.stopPropagation()
            setSubnavOpen((open) => !open)
          }}
          aria-expanded={subnavOpen}
          aria-controls={`sub-nav-${kebabCase(label as string)}`}
        >
          <DropdownArrow />
        </button>
      )}

      {items.length > 0 && (
        <ul
          className="nav__sub-list"
          aria-hidden={!subnavOpen}
          id={`sub-nav-${kebabCase(label as string)}`}
        >
          {items.map(({ link, label }, index) => {
            if (!asLink(link)) {
              return null
            }

            return (
              <li className="nav__sub-item" key={index}>
                <LinkBase
                  onClick={() => {
                    closeSubnav()
                    closeNav()
                  }}
                  href={link}
                  className="nav__sub-link"
                >
                  {label}
                </LinkBase>
              </li>
            )
          })}
        </ul>
      )}
    </li>
  )
}

export default NavigationItem
