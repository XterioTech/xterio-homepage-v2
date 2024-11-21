import { createClient } from '@/prismicio'
import { TranslationsDocument } from '../../prismicio-types'

let dictionaries: Record<string, Record<string, string>> = {}

const client = createClient()
const allTranslations = await client.getAllByType('translations', {
  lang: '*',
})

allTranslations.forEach((dictionary: TranslationsDocument) => {
  dictionaries[dictionary.lang] = {}
  dictionary.data.items.forEach(({ key, value }) => {
    dictionaries[dictionary.lang][key as string] = value as string
  })
})

let language: string
export const setTranslationLanguage = (lang: string) => {
  language = lang
}

const translate = (key: string, params?: any) => {
  return (
    dictionaries[params?.lang || language]?.[key] ||
    `Missing translation: ${key}`
  )
}

export default translate
