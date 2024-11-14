import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { NotFoundError } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'
import { notFound } from 'next/navigation'
import {BuyPageDocument} from "../../../prismicio-types";
import SocialShare from "@/components/social-share";

export async function generateMetadata({
 params,
}: {
  params: { lang: string }
}) {

  const client = createClient()

  try {
    const page = await client.getSingle('buy_page', {
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
    const page = (await client.getSingle('buy_page', {
      lang: params.lang,
    })) as BuyPageDocument

    return (
      <section className="buy-page">
        <SliceZone slices={page.data?.slices} components={components} />
        {/*<SocialShare />*/}
      </section>
    )
  } catch (error) {
    if (error instanceof NotFoundError) {
      notFound()
    }

    throw error
  }
}
