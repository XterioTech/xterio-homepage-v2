import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { SliceZone } from '@prismicio/react'

export default async function Page() {
  const client = createClient()

  const page = await client.getByUID('error_page', '404')

  return (
    <section className="homepage">
      <SliceZone slices={page.data.slices} components={components} />
    </section>
  )
}
