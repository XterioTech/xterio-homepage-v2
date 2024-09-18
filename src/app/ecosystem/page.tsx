import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { NotFoundError } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'
import { notFound } from 'next/navigation'
import {EcosystemPageDocument} from "../../../prismicio-types";

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

    return {

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
    const page = (await client.getSingle('ecosystem_page', {
      lang: params.lang,
    })) as EcosystemPageDocument

    return (
      <section className="ecosystem-page" data-slice-backgroundcolour="offwhite">

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
