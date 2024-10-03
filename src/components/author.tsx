import { Image } from '@superrb/next-addons/components'
import {
  ContentRelationshipField,
  FilledContentRelationshipField,
  ImageFieldImage,
} from '@prismicio/client'
import { createClient } from '@/prismicio'

const Author = async ({
  author,
  className = '',
}: {
  author: ContentRelationshipField<'author'>
  className?: string
}) => {
  if (
    !('uid' in author || (author as FilledContentRelationshipField<'author'>)?.uid)
  ) {
    return null
  }

  const client = createClient()
  const authorDocument = await client.getByUID(
    'author',
    (author as FilledContentRelationshipField<'author'>).uid as string,
  )

  return (
    <div className={`author ${className}`}>
      <Image
        image={authorDocument?.data?.image as ImageFieldImage}
        className="author__image objFit"
        sizes="100vw"
      />
      <p className="author__name">{authorDocument?.data?.name}</p>
    </div>
  )
}

export default Author
