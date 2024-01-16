import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { NotFoundError } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'
import { notFound } from 'next/navigation'

export async function generateMetadata({
  params,
  }: {
    params: { lang: string }
  }) {
  const client = createClient()

  try {
    const page = await client.getSingle('contact_page', {
      lang: params.lang,
    })

    return {
      title: page.data.meta_title,
      description: page.data.meta_description,
      image: page.data.meta_image,
    }
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
    const page = await client.getSingle('contact_page', {
      lang: params.lang,
    })

    return (
        <section className="contact-page">
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
