import type { Metadata } from 'next'
import '@/stylesheets/style.sass'
import Navigation from '@/components/navigation'
import { CookieBanner } from '@superrb/react-addons/components'
import Scripts from '@/components/scripts'
import Footer from '@/components/footer'
import Header from '@/components/header'
import SocialIcons from '@/components/social-icons'
import { createClient } from '@/prismicio'
import { PropsWithChildren } from 'react'
import { setTranslationLanguage } from '@/utils/translate'

type Props = {
  params: {
    lang: string
  }
}

export const generateMetadata = async ({
  params: { lang },
}: Props): Promise<Metadata> => {
  const client = createClient()
  const siteConfig = await client.getSingleWithFallback('site_config', { lang })

  return {
    title: {
      default: 'Xterio',
      template: siteConfig?.data?.title_template || '%s | Xterio',
    },
  }
}

const TranslatedLayout = async ({
  children,
  params: { lang },
}: PropsWithChildren<Props>) => {
  const navigation = (
    <>
      <Navigation name={'navigation'} />
      <Navigation name={'secondary'} />
    </>
  )

  setTranslationLanguage(lang)
  const socialIcons = <SocialIcons className="header__social" />

  return (
    <>
      <Header navigation={navigation} socialIcons={socialIcons} />
      {children}
      <Footer />
      <CookieBanner
        customiseLabel="Customize"
        policyLink="/legal/privacy-policy"
        policyLabel="Privacy Policy"
        tracking={{
          title: 'Optional Cookies',
          description:
            'These cookies are set by third-parties to track browsing habits in order to personalize your experience.',
        }}
      />
      <Scripts />
    </>
  )
}

export default TranslatedLayout
