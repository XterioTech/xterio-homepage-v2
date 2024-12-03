import Footer from '@/components/footer'
import Header from '@/components/header'
import Navigation from '@/components/navigation'
import Scripts from '@/components/scripts'
import SocialIcons from '@/components/social-icons'
import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { setTranslationLanguage } from '@/utils/translate'
import { Language } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'
import { CookieBanner } from '@superrb/react-addons/components'
import { headers } from 'next/headers'

export default async function Page() {
  const client = createClient()

  const pathname = headers().get('x-pathname') as string
  const repository = await client.getRepository()

  const locales = repository.languages.map((lang: Language) => lang.id)
  const defaultLocale = locales[0]

  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  let locale = defaultLocale
  // Redirect to default locale if there is no supported locale prefix
  if (!pathnameIsMissingLocale) {
    locale = pathname.split('/')[1]
  }

  const page = await client.getByUID('error_page', '404', {
    lang: locale,
  })

  const navigation = (
    <>
      <Navigation name={'navigation'} />
      <Navigation name={'secondary'} />
    </>
  )

  setTranslationLanguage('en-gb')
  const socialIcons = <SocialIcons className="header__social" />

  return (
    <>
      <Header navigation={navigation} socialIcons={socialIcons} />
      <section className="four-oh-four-page">
        <SliceZone slices={page.data.slices} components={components} />
      </section>
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
