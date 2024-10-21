import { createClient } from '@/prismicio'

import Instagram from './icons/instagram'
import { asLink } from '@prismicio/client'
import { SiteConfigDocumentData } from '../../prismicio-types'
import Twitter from '@/components/icons/twitter'
import Linkedin from '@/components/icons/linkedin'
import Discord from '@/components/icons/discord'
import Youtube from '@/components/icons/youtube'
import Reddit from '@/components/icons/reddit'
import Medium from '@/components/icons/medium'
import { LinkBase } from '@superrb/next-addons/components'

const icons = {
  discord: Discord,
  twitter: Twitter,
  reddit: Reddit,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  medium: Medium
}

const SocialIcons = async ({ className = '' }: { className?: string }) => {
  const client = createClient()
  const siteConfig = await client.getSingle('site_config')

  return (
    <nav className={`social-icons ${className}`}>
      {Object.entries(icons).map(([name, Icon]) => {
        const url = 
          siteConfig.data[
            `${name}_profile_url` as keyof SiteConfigDocumentData
          ]

        return (
          <LinkBase href={url} key={name}>
            <Icon />
          </LinkBase>
        )
      })}
    </nav>
  )
}

export default SocialIcons
