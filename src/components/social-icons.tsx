import { createClient } from '@/prismicio'

import Instagram from './icons/instagram'
import { asLink } from '@prismicio/client'
import {SiteConfigDocumentData} from '../../prismicio-types'

const icons = {
  instagram: Instagram,
}

const SocialIcons = async ({ className = '' }: { className?: string }) => {
  const client = createClient()
  const siteConfig = await client.getSingle('site_config')

  return (
    <nav className={`social-icons ${className}`}>
      {Object.entries(icons).map(([name, Icon]) => (
        <a
          href={
            asLink(
              siteConfig.data[
                `${name}_profile_url` as keyof SiteConfigDocumentData
                ],
            ) as string
          }
          key={name}
        >
          <Icon />
        </a>
      ))}
    </nav>
  )
}

export default SocialIcons
