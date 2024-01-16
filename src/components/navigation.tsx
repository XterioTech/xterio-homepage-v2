import { useEffect, useState } from 'react'
import { SliceZone } from '@prismicio/react'
import { createClient } from '@/prismicio'
import NavigationItem from '@/slices/NavigationItem'
import { NavigationItemSlice } from '../../prismicio-types'

const components = {
  navigation_item: NavigationItem,
}

const Navigation = async ({
  name,
  className = '',
}: {
  name: string
  className?: string
}) => {
  const client = createClient()
  const navigation = await client.getByUID('navigation', name)
  const items = navigation?.data?.slices

  return (
    <nav className={`${className} nav`}>
      <ul className="nav__list">
        <SliceZone slices={items} components={components} />
      </ul>
    </nav>
  )
}

export default Navigation
