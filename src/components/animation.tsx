import {
  FilledContentRelationshipField,
  FilledLinkToMediaField,
} from '@prismicio/client'
import { LottieAnimationDocumentData } from '../../prismicio-types'
import { LottieAnimationDocument } from '../../prismicio-types'
import { createClient } from '@/prismicio'
import LottieAnimationWrapper from './lottie-animation-wrapper'

const Animation = async ({
  animation,
}: {
  animation:
    | LottieAnimationDocument
    | FilledContentRelationshipField<'lottie_animation'>
}) => {
  console.log(animation)
  if (animation?.data === undefined) {
    const client = createClient()
    animation = await client.getByUID('lottie_animation', animation.uid)
  }

  const jsonUrl: string = (
    (animation?.data as LottieAnimationDocumentData)
      ?.animation_json as FilledLinkToMediaField
  )?.url

  if (!jsonUrl) return null

  const response = await fetch(jsonUrl)
  const animationData = await response.json()

  if (!animationData) return null

  return (
    <LottieAnimationWrapper
      animationData={animationData}
      play={true}
      loop={true}
    />
  )
}

export default Animation
