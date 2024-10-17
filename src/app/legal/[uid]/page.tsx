import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { NotFoundError } from '@prismicio/client'
import { PrismicRichText, SliceZone } from '@prismicio/react'
import { notFound } from 'next/navigation'
import HeaderGradient from "@/components/header-gradient";

export async function generateMetadata({
  params,
}: {
  params: { lang: string; uid: string }
}) {
  const client = createClient()

  try {
    const page = await client.getByUID('legal_page', params.uid, {
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

export default async function Page({
  params,
}: {
  params: { lang: string; uid: string }
}) {
  try {
    const client = createClient()
    const page = await client.getByUID('legal_page', params.uid, {
      lang: params.lang,
    })

    const { title, content } = page?.data

    return (
      <section className="legal-page" data-slice-backgroundcolour={"light"}>
        <HeaderGradient />
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
