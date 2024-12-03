import Footer from '@/components/footer'
import Header from '@/components/header'
import Navigation from '@/components/navigation'
import Scripts from '@/components/scripts'
import SocialIcons from '@/components/social-icons'
import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { SliceZone } from '@prismicio/react'
import { CookieBanner } from '@superrb/react-addons/components'

export default async function Page() {
  const client = createClient()
  const page = await client.getByUID('error_page', '404')

  const navigation = (
    <>
      <Navigation name={'navigation'} />
      <Navigation name={'secondary'} />
    </>
  )

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
