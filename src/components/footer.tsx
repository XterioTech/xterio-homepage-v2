import Logo from './logo'
import { PrismicNextLink } from '@prismicio/next'
import dynamic from 'next/dynamic'

const Navigation = dynamic(() => import('./navigation'))
const SocialIcons = dynamic(() => import('./social-icons'))

const Footer = () => {
  return (

    <footer className="footer">
      <div className="footer__container">
        <div className="footer__columns">
          <PrismicNextLink href="/" className="footer__logo">
            <Logo />
          </PrismicNextLink>
          <div className="footer__menus">
            <Navigation className="footer-nav" name={'footer-menu-one'} />
            <Navigation className="footer-nav" name={'footer-menu-two'} />
          </div>
        </div>
        <div className="footer__row">
          <div className="footer__info">© Copyright 2024 - Xterio Limited. All rights reserved. <a href="https://www.superrb.com" target="_blank" rel="noopener nofollow" title="Website by Superrb">Website by Superrb</a></div>
          <SocialIcons className="footer__social" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
