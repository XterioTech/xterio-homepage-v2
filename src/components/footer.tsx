import Logo from './logo'
import { PrismicNextLink } from '@prismicio/next'
import dynamic from 'next/dynamic'
const LatestNews = dynamic(() => import('./latest-news'))
const Navigation = dynamic(() => import('./navigation'))
const SocialIcons = dynamic(() => import('./social-icons'))
const ContactCta = dynamic(() => import('./contact-cta'))

const Footer = () => {
  return (
    <footer className="footer">
      {/* <LatestNews /> */}

      <div className="footer__container" data-slice-backgroundcolour={"dark"}>
        <div className="footer__inner">
          <div className="footer__columns">
            <div className="footer__col">
              <PrismicNextLink href="/" className="footer__logo">
                <Logo />
              </PrismicNextLink>
              <ContactCta />
            </div>

            <div className="footer__menus">
              <Navigation className="footer-nav" name={'footer-menu-one'} />
              <Navigation className="footer-nav" name={'footer-menu-two'} />
            </div>
          </div>
          <div className="footer__row">
            <p className="footer__info">© Copyright 2024 - Xterio Limited. All rights reserved. <a href="https://www.superrb.com" target="_blank" rel="noopener nofollow" title="Website by Superrb">Website by Superrb</a></p>
            <SocialIcons className="footer__social" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
