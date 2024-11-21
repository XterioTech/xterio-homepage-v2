import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { NotFoundError } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'
import { notFound } from 'next/navigation'
import {BuildPageDocument} from "../../../../prismicio-types";
import { getMetadata } from '@/utils/metadata'

export async function generateMetadata({
  params,
}: {
  params: { lang: string }
}) {
  const client = createClient()

  try {
    const page = await client.getSingle('build_page', {
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
    const page = (await client.getSingle('build_page', {
      lang: params.lang,
    })) as BuildPageDocument

    return (
      <section className="build-page">
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
