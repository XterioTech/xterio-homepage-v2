import { Image } from '@superrb/next-addons/components'
import { ImageProps } from '@superrb/next-addons/components/image'
import TextLink from '@/components/text-link'
import { KeyTextField, LinkField } from '@prismicio/client'

type Props = ImageProps & {
  blockType: KeyTextField
  buttonText: KeyTextField
  buttonUrl: LinkField
}

const GameBlock = ({
  image,
  blockType,
  buttonText,
  buttonUrl,
}: Props) => {
  return (
    <div className="game-block">
      <div className="game-block__type">{blockType}</div>
      <Image
        image={image}
        className="game-block__image objFit"
        sizes="(min-width: 63.75em) 33.333vw, 100vw"
      />
      {buttonUrl && buttonText && (
        <TextLink
          href={buttonUrl}
          label={buttonText}
          className="game-block__text-link"
        />
      )}
    </div>
  )
}

export default GameBlock
