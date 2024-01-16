'use client'

import { CookiesContext } from '@superrb/react-addons/context'
import Script from 'next/script'
import { useContext } from 'react'

interface WindowWithTypekit extends Window {
  Typekit: {
    load(options: { async: boolean }): void
  }
}

const Scripts = () => {
  const { cookiesAccepted, trackingCookiesAccepted } =
    useContext(CookiesContext)

  return (
    <>
      {cookiesAccepted && (
        <>
        </>
      )}
      {trackingCookiesAccepted && (
          <>
          </>
      )}
    </>
  )
}

export default Scripts
