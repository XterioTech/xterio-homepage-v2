'use client'

import {
  FilledContentRelationshipField,
  FilledLinkToMediaField,
} from '@prismicio/client'
import { LottieAnimationDocumentData } from '../../prismicio-types'
import { LottieAnimationDocument } from '../../prismicio-types'
import { createClient } from '@/prismicio'
import LottieAnimationWrapper from './lottie-animation-wrapper'
import { useEffect, useState } from 'react'

const Animation = ({
  animation,
}: {
  animation:
    | LottieAnimationDocument
    | FilledContentRelationshipField<'lottie_animation'>
}) => {
  const [animationData, setAnimationData] =
    useState<LottieAnimationDocument | null>(null)

  useEffect(() => {
    ;(async () => {
      if (!(animation?.data || animation?.uid)) {
        return null
      }

      const client = createClient()
      const animationDocument = await client.getByUID(
        'lottie_animation',
        animation?.uid as string,
      )

      const jsonUrl: string = (
        (animationDocument?.data as LottieAnimationDocumentData)
          ?.animation_json as FilledLinkToMediaField
      )?.url

      if (!jsonUrl) return null

      const response = await fetch(jsonUrl)
      const animationData = await response.json()

      setAnimationData(animationData)
    })()
  }, [animation])

  if (!animationData) return null

  return (
    <LottieAnimationWrapper
      animationData={animationData}
      animation_ratio={
        (animation?.data as LottieAnimationDocumentData)?.animation_ratio
      }
      play={true}
      loop={true}
    />
  )
}

export default Animation
