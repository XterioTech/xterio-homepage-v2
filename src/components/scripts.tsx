'use client'

import { CookiesContext } from '@superrb/react-addons/context'
import Script from 'next/script'
import { useContext } from 'react'
import {useCookieStore} from "@superrb/react-addons/store";

interface WindowWithTypekit extends Window {
  Typekit: {
    load(options: { async: boolean }): void
  }
}

const Scripts = () => {
  const { cookiesAccepted, trackingCookiesAccepted } =
    useCookieStore()

  return (
    <>
      {cookiesAccepted && (
        <>
          <h1>Cookies Accepted</h1>
        </>
      )}
      {trackingCookiesAccepted && (
          <>
            <h1>Tracking Accepted</h1>
          </>
      )}
    </>
  )
}

export default Scripts
