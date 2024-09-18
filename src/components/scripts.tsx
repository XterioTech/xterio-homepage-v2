'use client'

import { useCookieStore } from '@superrb/react-addons/store'

interface WindowWithTypekit extends Window {
  Typekit: {
    load(options: { async: boolean }): void
  }
}

const Scripts = () => {
  const { cookiesAccepted, trackingCookiesAccepted } = useCookieStore()

  return (
    <>
      {cookiesAccepted && <></>}
      {trackingCookiesAccepted && <></>}
    </>
  )
}

export default Scripts
