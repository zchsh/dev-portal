import { ReactElement } from 'react'
import VaultIoLayout from 'layouts/_proxied-dot-io/vault'
import { isVersionedDocsEnabled } from 'lib/env-checks'
import productData from 'data/vault.json'

// const product = { name: productData.name, slug: productData.slug }
const basePath = 'docs'
const navDataFile = `../data/${basePath}-nav-data.json`
const localContentDir = `../content/${basePath}`
const localPartialsDir = `../content/partials`
const enableVersionedDocs = isVersionedDocsEnabled(productData.slug)
// const additionalComponents = { Columns, Tag }

/**
 * Note: we've switched from `/docs/[[...page]].tsx`, an "optional catch-all",
 * to `/docs/[...page].tsx`, a "catch-all" route. As mentioned in the NextJS
 * docs, the main difference is that the latter will not match the route
 * without parameters - ie the landing page. This allows us to avoid
 * conflicting page files.
 * ref: https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes
 */

function VaultDocsLandingPage(props): ReactElement {
  return (
    <div>
      Hello Vault Landing page!
      <pre>
        <code>{JSON.stringify({ props }, null, 2)}</code>
      </pre>
    </div>
  )
}

// Imports below are used in getStatic functions only
import { getStaticGenerationFunctions } from 'lib/_proxied-dot-io/get-static-generation-functions'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'

const {
  getStaticProps: generatedGetStaticProps,
} = getStaticGenerationFunctions(
  enableVersionedDocs
    ? {
        strategy: 'remote',
        basePath,
        fallback: 'blocking',
        product: productData.slug,
      }
    : {
        strategy: 'fs',
        localContentDir,
        navDataFile,
        localPartialsDir,
        product: productData.slug,
      }
)

// Export getStaticProps function
export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<$TSFixMe>> {
  const params = { page: [] }
  return await generatedGetStaticProps({ ...context, params })
}

// Export view with layout
VaultDocsLandingPage.layout = VaultIoLayout
export default VaultDocsLandingPage
