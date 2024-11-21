import { PrismicDocument } from '@prismicio/client'
import { Metadata } from 'next'
import {
  getAlternateDocuments,
  getDefaultDocument,
} from '@/utils/locales'
import { AllDocumentTypes } from '../../prismicio-types'
import { AlternateURLs } from 'next/dist/lib/metadata/types/alternative-urls-types'

export async function getMetadata(page: PrismicDocument): Promise<Metadata> {
  const alternates = await getAlternateDocuments(page as AllDocumentTypes)
  const defaultDocument = await getDefaultDocument(page as AllDocumentTypes)

  return {
    title: page.data.meta_title as string,
    description: page.data.meta_description as string,
    openGraph: {
      title: (page.data.meta_title as string) || undefined,
      description: (page.data.meta_description as string) || undefined,
      images: [
        {
          url: page.data.meta_image ? (page.data.meta_image.url as string) : '',
        },
      ],
    },
    alternates: {
      canonical: defaultDocument?.url || page.url,
      languages: {
        ...alternates.reduce<AlternateURLs['languages']>(
          (languages, locale) => {
            let returnedLanguages = languages ?? {}
            returnedLanguages[locale.lang as keyof AlternateURLs['languages']] =
              locale.url
            return returnedLanguages
          },
          {},
        ),
        'x-default': defaultDocument?.url,
      },
    },
  }
}
