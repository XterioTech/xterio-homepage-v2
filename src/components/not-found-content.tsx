'use client'

import { SliceZone } from '@prismicio/react'
import { ErrorPageDocument } from '../../prismicio-types'
import { components } from '@/slices'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { NotFoundError } from '@prismicio/client'
import {createClient} from '@/prismicio'

const NotFoundContent = ({
  page: defaultPage,
}: {
  page: ErrorPageDocument
}) => {
  const [page, setPage] = useState<ErrorPageDocument>(defaultPage)
  const pathname = usePathname()

  useEffect(() => {
    ;(async () => {
      const client = createClient()
      const repository = await client.getRepository()
      const languages = repository?.languages.map((lang) => lang.id) || []

      const lang = languages.find((lang) => pathname.startsWith(`/${lang}`))
      if (lang) {
        try {
          const page = await client.getByUID('error_page', '404', { lang })
          if (page) {
            setPage(page)
          }
        } catch (error) {
          if (error instanceof NotFoundError) {
            // Gracefully ignore
            return
          }

          throw error
        }
      }
    })()
  }, [pathname])

  return (
    <section className="four-oh-four-page">
      <SliceZone slices={page.data.slices} components={components} />
    </section>
  )
}

export default NotFoundContent
