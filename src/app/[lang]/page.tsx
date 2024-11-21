import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { NotFoundError } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'
import { notFound } from 'next/navigation'
import { getMetadata } from '@/utils/metadata'

export async function generateMetadata({
  params,
}: {
  params: { lang: string }
}) {
  const client = createClient()

  try {
    const page = await client.getSingle('home_page', {
      lang: params.lang,
    })

    return getMetadata(page)
  } catch (error) {
    if (error instanceof NotFoundError) {
      notFound()
    }

    throw error
  }
}

export default async function Page({ params }: { params: { lang: string } }) {
  const client = createClient()

  try {
    const page = await client.getSingle('home_page', {
      lang: params.lang,
    })

    return (
        <section className="homepage">
          <SliceZone slices={page.data.slices} components={components} />
        </section>
    )
  } catch (error) {
    if (error instanceof NotFoundError) {
      notFound()
    }

    throw error
  }
}
