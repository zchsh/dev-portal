import { ReactElement } from 'react'
import VaultIoLayout from 'layouts/_proxied-dot-io/vault'

/**
 * Note: we've switched from `/docs/[[...page]].tsx`, an "optional catch-all",
 * to `/docs/[...page].tsx`, a "catch-all" route. As mentioned in the NextJS
 * docs, the main difference is that the latter will not match the route
 * without parameters - ie the landing page. This allows us to avoid
 * conflicting page files.
 * ref: https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes
 */

function VaultDocsLandingPage(): ReactElement {
  return <div>Hello Vault Landing page!</div>
}

// Export view with layout
VaultDocsLandingPage.layout = VaultIoLayout
export default VaultDocsLandingPage
