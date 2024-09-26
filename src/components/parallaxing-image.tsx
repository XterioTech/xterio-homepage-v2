'use client'

import { Image } from '@superrb/next-addons/components'
import { ImageProps } from '@superrb/next-addons/components/image'
import { useEventListener } from '@superrb/react-addons/hooks'
import { MutableRefObject, useRef } from 'react'

const ParallaxingImage = (props: ImageProps) => {
  const imgRef =
    useRef<HTMLImageElement>() as MutableRefObject<HTMLImageElement>
  useEventListener(
    'scroll',
    () => {
      requestAnimationFrame(() => {
        if (!imgRef.current) {
          return
        }

        const image = imgRef.current.querySelector('img')

        if (!image) {
          return
        }

        const { top } = imgRef.current?.getBoundingClientRect()

        if (!top) {
          image.style.transform = 'translateY(0)'
          return
        }

        image.style.transform = `translateY(${(top / window.innerHeight) * -10}%)`
      })
    },
    { passive: true },
  )

  return (
    <Image
      ref={imgRef}
      {...props}
      className={`${props.className} parallaxing-image`}
    />
  )
}

export default ParallaxingImage
