import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { NotFoundError } from '@prismicio/client'
import { PrismicRichText, SliceZone } from '@prismicio/react'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: { uid: string } }) {
  try {
    const client = createClient()
    const page = await client.getByUID('legal_page', params.uid)

    const { title, content } = page?.data

    return (
      <section className="legal-page">
        <div className="legal-page__container container">
          <h1 className="legal-page__title">{title}</h1>

          <div className="legal-page__content">
            <PrismicRichText field={content} />
          </div>
        </div>

        <SliceZone slices={page.data?.slices} components={components} />
      </section>
    )
  } catch (error) {
    if (error instanceof NotFoundError) {
      notFound()
    }

    throw error
  }
}
