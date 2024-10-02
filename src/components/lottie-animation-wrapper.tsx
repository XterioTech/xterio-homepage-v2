'use client'

import { useIsInViewport } from '@superrb/react-addons/hooks'
import Lottie, { LottieProps } from 'react-lottie-player'
import LottiePlayer from 'lottie-web'

LottiePlayer.setQuality(2)

const LottieAnimationWrapper = (props: LottieProps) => {
  const { isInViewport, setRef } = useIsInViewport()

  props.play = isInViewport

  return (
    <div className="lottie-animation" ref={setRef}>
      <Lottie renderer="svg" {...props} />
    </div>
  )
}

export default LottieAnimationWrapper
