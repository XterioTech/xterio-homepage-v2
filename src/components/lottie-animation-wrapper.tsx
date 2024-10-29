'use client'

import { useIsInViewport } from '@superrb/react-addons/hooks'
import { LottieProps } from 'react-lottie-player'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('react-lottie-player'))

const LottieAnimationWrapper = ({ animation_ratio = 'Square', ...props }: LottieProps & { animation_ratio?: string })  => {
  const { isInViewport, setRef } = useIsInViewport()
  const [ready, setReady] = useState<boolean>(false)

  props.play = isInViewport

  useEffect(() => {
    setReady(true)
  }, [])

  if (!ready) {
    return null
  }

  return (
    <div className="lottie-animation" data-animation-ratio={animation_ratio || "Square"} ref={setRef}>
      <Lottie
        renderer="svg"
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        {...props}
      />
    </div>
  )
}

export default LottieAnimationWrapper
