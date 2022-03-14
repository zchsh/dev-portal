import { ReactElement } from 'react'
import VaultIoLayout from 'layouts/_proxied-dot-io/vault'

function VaultDocsLandingPage(): ReactElement {
  return <div>Hello Vault Landing page!</div>
}

// Export view with layout
VaultDocsLandingPage.layout = VaultIoLayout
export default VaultDocsLandingPage
