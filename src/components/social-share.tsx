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
  name: string,
  currentPath: string
}) => {

  let url = ""
  switch (name) {
    case 'twitter':
      url ='https://twitter.com/share?url=';
      break;
    case 'facebook':
      url = 'https://www.facebook.com/sharer/sharer.php?u=';
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

return (

  <li className="social-share__item">
    <LinkBase
      href={url}
      className="social-share__link"
    >
      Share on {name}
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
      <header className="social-share__header">
        <h3 className="social-share__title">
          Social Share
        </h3>
        <ul className="social-share__list">

          {Object.entries(icons).map(([name, Icon]) => {
            return (
              <ShareOnSocial
                key={name}
                name={name}
                currentPath={currentPath}
              />
            )
          })}
        </ul>
      </header>
    </section>
  )
}

export default SocialShare
