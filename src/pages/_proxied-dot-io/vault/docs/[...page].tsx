import VaultIoLayout from 'layouts/_proxied-dot-io/vault'
import Columns from 'components/_proxied-dot-io/vault/columns'
import Tag from 'components/_proxied-dot-io/vault/inline-tag'
import DocsPage from '@hashicorp/react-docs-page'
import productData from 'data/vault.json'
import { isVersionedDocsEnabled } from 'lib/env-checks'
// Imports below are used in getStatic functions only
import { getStaticGenerationFunctions } from 'lib/_proxied-dot-io/get-static-generation-functions'

const product = { name: productData.name, slug: productData.slug }
const basePath = 'docs'
const navDataFile = `../data/${basePath}-nav-data.json`
const localContentDir = `../content/${basePath}`
const localPartialsDir = `../content/partials`
const enableVersionedDocs = isVersionedDocsEnabled(productData.slug)
const additionalComponents = { Columns, Tag }

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function DocsView(props) {
  return (
    <DocsPage
      product={product}
      baseRoute={basePath}
      staticProps={props}
      additionalComponents={additionalComponents}
      showVersionSelect={enableVersionedDocs}
      algoliaConfig={productData.algoliaConfig}
    />
  )
}

const { getStaticPaths, getStaticProps } = getStaticGenerationFunctions(
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

// Export getStatic functions
export { getStaticPaths, getStaticProps }
// Export view with layout
DocsView.layout = VaultIoLayout
export default DocsView
