import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import config from '../slicemachine.config.json'
import { NotFoundError } from '@prismicio/client'
import { getDefaultLocale } from './utils/locales'
import { Client as PrismicClient } from '@prismicio/client'
import { AllDocumentTypes } from '../prismicio-types'

/**
 * The project's Prismic repository name.
 */
export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || config.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
// TODO: Update the routes array to match your project's route structure.
const routes: prismic.ClientConfig["routes"] = [
  {
  	type: "home_page",
  	path: "/:lang?",
  },
  {
    type: 'legal_page',
    path: '/:lang?/legal/:uid',
  },
  {
    type: 'buy_page',
    path: '/:lang?/buy',
  },
  {
    type: 'build_page',
    path: '/:lang?/build',
  },
  {
    type: 'homepagetest',
    path: '/:lang?/homepagetest',
  },
  {
    type: 'ecosystem_page',
    path: '/:lang?/ecosystem',
  }
];

type Client = PrismicClient<AllDocumentTypes>

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === 'production'
        ? { next: { tags: ['prismic'] }, cache: 'force-cache' }
        : { next: { revalidate: 5 } },
    ...config,
  })

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return new Proxy(client, {
    get(target: any, prop: any) {
      if (typeof prop === 'string' && prop.endsWith('WithFallback')) {
        return async (...args: any[]) => {
          const correctProp = prop.replace('WithFallback', '')
          const defaultLocale = await getDefaultLocale()
          const params = args.pop()

          let response: any

          try {
            response = await target[correctProp](...args, params)
          } catch (error) {
            if (
              error instanceof NotFoundError &&
              params.lang !== defaultLocale.id
            ) {
              params.lang = defaultLocale.id
              response = await target[correctProp](...args, params)
            }
          }

          return response
        }
      }

      return target[prop]
    },
  }) as Client & {
    getWithFallback: Client['get']
    getFirstWithFallback: Client['getFirst']
    dangerouslyGetAllWithFallback: Client['dangerouslyGetAll']
    getByIDWithFallback: Client['getByID']
    getByIDsWithFallback: Client['getByIDs']
    getAllByIDsWithFallback: Client['getAllByIDs']
    getByUIDWithFallback: Client['getByUID']
    getByUIDsWithFallback: Client['getByUIDs']
    getAllByUIDsWithFallback: Client['getAllByUIDs']
    getSingleWithFallback: Client['getSingle']
    getByTypeWithFallback: Client['getByType']
    getAllByTypeWithFallback: Client['getAllByType']
    getByTagWithFallback: Client['getByTag']
    getAllByTagWithFallback: Client['getAllByTag']
    getByEveryTagWithFallback: Client['getByEveryTag']
    getAllByEveryTagWithFallback: Client['getAllByEveryTag']
    getBySomeTagsWithFallback: Client['getBySomeTags']
    getAllBySomeTagsWithFallback: Client['getAllBySomeTags']
    getTagsWithFallback: Client['getTags']
  }
}
