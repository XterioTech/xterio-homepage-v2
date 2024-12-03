import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { NotFoundError } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'
import { notFound } from 'next/navigation'
import {EcosystemPageDocument} from "../../../../prismicio-types";
import { getMetadata } from '@/utils/metadata'

export async function generateMetadata({
  params,
}: {
  params: { lang: string }
}) {
  const client = createClient()

  try {
    const page = await client.getSingle('ecosystem_page', {
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

export const dynamic = 'force-static'
export const dynamicParams = false

export async function generateStaticParams() {
  const client = createClient()
  const docs = await client.getAllByType('ecosystem_page', {
    lang: '*',
  })

  return docs.map((page) => ({
    uid: page.uid,
    lang: page.lang,
  }))
}

export default async function Page({ params }: { params: { lang: string } }) {
  const client = createClient()

  try {
    const page = (await client.getSingle('ecosystem_page', {
      lang: params.lang,
    })) as EcosystemPageDocument

    return (
      <section className="ecosystem-page">
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
