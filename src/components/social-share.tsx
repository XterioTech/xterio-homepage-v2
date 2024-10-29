'use client'

import {Image, LinkBase} from "@superrb/next-addons/components";
import Twitter from "@/components/icons/twitter";
import Reddit from "@/components/icons/reddit";
import Linkedin from "@/components/icons/linkedin";
import {useEffect, useState} from "react";
import {LogosSliceDefaultPrimaryLogosItem} from "../../prismicio-types";

const icons = {
  twitter: Twitter,
  reddit: Reddit,
  linkedin: Linkedin
}

const ShareOnSocial = ({
   name,
   currentPath
 }: {
  name: keyof typeof icons,
  currentPath: string
}) => {

  let url = ""
  switch (name) {
    case 'twitter':
      url ='https://twitter.com/share?url=';
      break;
    case 'linkedin':
      url = 'https://www.linkedin.com/shareArticle?url=';
      break;
    case 'reddit':
      url = 'https://reddit.com/submit?url=';
      break;
    default:
      url = '';
      break;
  }

  url = url + currentPath
  const Icon = icons[name]

return (

  <li className="social-share__item">
    <LinkBase
      href={url}
      className="social-share__link"
    >
      Share on {name}
      <Icon />
    </LinkBase>
  </li>
  )
}

const SocialShare = () => {

  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  if (!ready) {
    return null
  }

  const currentPath = window.location.href

  return (
    <section className="social-share">
      <div className="social-share__container">
        <header className="social-share__header">
          <h3 className="social-share__title">
            Share this post
          </h3>
        </header>
        <ul className="social-share__list">

          {Object.entries(icons).map(([name, Icon]) => {
            return (
              <ShareOnSocial
                key={name}
                name={name as keyof typeof icons}
                currentPath={currentPath}
              />
            )
          })}
        </ul>
      </div>

    </section>
  )
}

export default SocialShare
