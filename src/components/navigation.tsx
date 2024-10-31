import { SliceZone } from '@prismicio/react'
import { createClient } from '@/prismicio'
import NavigationItem from '@/slices/NavigationItem'

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
    <nav className={`${className} nav nav--${name}`}>
      <ul className="nav__list">
        <SliceZone slices={items} components={components} context={{ menuName: name }} />
      </ul>
    </nav>
  )
}

export default Navigation
