import { createClient } from '@/prismicio'

import Instagram from './icons/instagram'
import { SiteConfigDocumentData } from '../../prismicio-types'
import Twitter from '@/components/icons/twitter'
import Linkedin from '@/components/icons/linkedin'
import Email from '@/components/icons/email'
import Youtube from '@/components/icons/youtube'
import Reddit from '@/components/icons/reddit'
import Medium from '@/components/icons/medium'
import Telegram from '@/components/icons/telegram'
import { LinkBase } from '@superrb/next-addons/components'

const icons: { name: string; icon: React.FC; field: keyof SiteConfigDocumentData }[] = [
  { name: 'email', icon: Email, field: 'email_link_url' },
  { name: 'twitter', icon: Twitter, field: 'twitter_profile_url' },
  { name: 'reddit', icon: Reddit, field: 'reddit_profile_url' },
  { name: 'instagram', icon: Instagram, field: 'instagram_profile_url' },
  { name: 'linkedin', icon: Linkedin, field: 'linkedin_profile_url' },
  { name: 'youtube', icon: Youtube, field: 'youtube_profile_url' },
  { name: 'medium', icon: Medium, field: 'medium_profile_url' },
  { name: 'telegram', icon: Telegram, field: 'telegram_profile_url' },
]

const SocialIcons = async ({ className = '' }: { className?: string }) => {
  const client = createClient()
  const siteConfig = await client.getSingle('site_config')

  return (
    <nav className={`social-icons ${className}`}>
      {icons.map(({ name, icon: Icon, field }) => {
        const url = siteConfig.data[field]

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
