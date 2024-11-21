import { createClient } from '@/prismicio'
import { Content } from '@prismicio/client'

export async function getLocales() {
  const client = createClient()
  const repository = await client.getRepository()
  return repository.languages
}

export async function getDefaultLocale() {
  return (await getLocales())[0]
}

export type Alternate = {
  lang: string
  url: string
  lang_name: string
}

export async function getAlternateDocuments(
  doc: Content.AllDocumentTypes,
): Promise<Alternate[]> {
  const client = createClient()
  const locales = await getLocales()
  const defaultLocale = await getDefaultLocale()

  const altDocs = await client.getAllByIDs(
    doc.alternate_languages.map((altLang) => altLang.id),
    {
      lang: '*',
      // Exclude all fields to speed up the query.
      fetch: `${doc.type}.__nonexistent-field__`,
    },
  )

  return [doc, ...altDocs]
    .map((page) => {
      const lang = locales.find((locale) => locale.id === page.lang)

      return {
        lang: lang?.id || '',
        url: page?.url || '',
        lang_name: lang?.name || '',
      }
    })
    .sort((a, b) =>
      a.lang_name === b.lang_name ? 0 : a.lang_name > b.lang_name ? 1 : -1,
    )
}

export async function getDefaultDocument(doc: Content.AllDocumentTypes) {
  const locales = await getAlternateDocuments(doc)
  const defaultLocale = await getDefaultLocale()
  return locales.find((locale) => locale.lang === defaultLocale.id)
}
