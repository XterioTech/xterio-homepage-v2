import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { NotFoundError } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'
import { notFound } from 'next/navigation'
import {HomepagetestDocument} from "../../../prismicio-types";

export async function generateMetadata({
 params,
}: {
  params: { lang: string }
}) {

  const client = createClient()

  try {
    const page = await client.getSingle('homepagetest', {
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
    const page = (await client.getSingle('homepagetest', {
      lang: params.lang,
    })) as HomepagetestDocument

    return (
      <section className="homepagetest-page">
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
