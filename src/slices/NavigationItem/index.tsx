'use client'

import { Button } from '@superrb/next-addons/components'
import { Content, asLink } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import { SliceComponentProps } from '@prismicio/react'
import { useEventListener } from '@superrb/react-addons/hooks'
import { useContext, useState } from 'react'
import { kebabCase } from 'change-case'
import { NavContext } from '@superrb/react-addons/context'

/**
 * Props for `NavigationItem`.
 */
export type NavigationItemProps =
  SliceComponentProps<Content.NavigationItemSlice>

/**
 * Component for "NavigationItem" Slices.
 */
const NavigationItem = ({
  slice: {
    primary: { link, label },
    items,
  },
}: NavigationItemProps): JSX.Element => {
  const { closeNav } = useContext(NavContext)
  const [subnavOpen, setSubnavOpen] = useState<boolean>(false)

  useEventListener(
    'click',
    () => {
      setSubnavOpen(false)
    },
    undefined,
    typeof document !== 'undefined' ? document : undefined,
  )

  const href = asLink(link) as string

  return (
    <li
      className={`nav__item ${
        items.length > 0 ? 'nav__item--has-children' : ''
      }`}
    >
      {href ? (
        <PrismicNextLink
          href={href}
          className="nav__link"
          onClick={() => closeNav()}
        >
          {label}
        </PrismicNextLink>
      ) : (
        <span className="nav__link">{label}</span>
      )}

      {items.length > 0 && (
        <button
          className="nav__expand"
          onClick={() => setSubnavOpen((open) => !open)}
          aria-expanded={subnavOpen}
          aria-controls={`sub-nav-${kebabCase(label as string)}`}
        >
          V
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
                <Button
                  onClick={() => closeNav()}
                  href={link}
                  className="nav__sub-link"
                  label={label as string}
                />
              </li>
            )
          })}
        </ul>
      )}
    </li>
  )
}

export default NavigationItem
