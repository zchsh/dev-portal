import React from 'react'
import { ComponentMeta } from '@storybook/react'
import createLiveComponent from '__swingset-components/live-component'
import FeaturedInCollections from 'views/tutorial-view/components/featured-in-collections'

export default {
  title: 'Components/FeaturedInCollections',
  component: FeaturedInCollections,
  parameters: {
    docs: {
      components: {
        FeaturedInCollections,
        LiveComponent: createLiveComponent({ FeaturedInCollections }),
      },
    },
  },
} as ComponentMeta<typeof FeaturedInCollections>

export const Playground = (args) => <FeaturedInCollections {...args} />
Playground.args = {
  collections: [
    {
      id: 'd45efe06-a716-4922-8571-25b5a659526f',
      slug: 'vault/cross-products',
      numTutorials: 12,
      name: 'HashiCorp Product Integrations',
      description:
        'Vault can manage secrets associated with other HashiCorp products.',
      theme: 'vault',
    },
    {
      id: 'b0e74d7f-b7aa-497d-8314-5bf334862f3e',
      slug: 'consul/vault-secure',
      numTutorials: 7,
      name: 'Secure Consul with Vault Integrations',
      description: 'Integrate with Vault to enforce security best practices.',
      theme: 'consul',
    },
  ],
}

export const TwoUp = (args) => <FeaturedInCollections {...args} />
TwoUp.args = {
  collections: [
    {
      id: 'd45efe06-a716-4922-8571-25b5a659526f',
      slug: 'vault/cross-products',
      numTutorials: 12,
      name: 'HashiCorp Product Integrations',
      description:
        'Vault can manage secrets associated with other HashiCorp products.',
      theme: 'vault',
    },
    {
      id: 'b0e74d7f-b7aa-497d-8314-5bf334862f3e',
      slug: 'consul/vault-secure',
      numTutorials: 7,
      name: 'Secure Consul with Vault Integrations',
      description: 'Integrate with Vault to enforce security best practices.',
      theme: 'consul',
    },
  ],
}

export const ThreeUp = (args) => <FeaturedInCollections {...args} />
ThreeUp.args = {
  collections: [
    {
      id: 'd45efe06-a716-4922-8571-25b5a659526f',
      slug: 'vault/cross-products',
      numTutorials: 12,
      name: 'HashiCorp Product Integrations',
      description:
        'Vault can manage secrets associated with other HashiCorp products.',
      theme: 'vault',
    },
    {
      id: 'b0e74d7f-b7aa-497d-8314-5bf334862f3e',
      slug: 'consul/vault-secure',
      numTutorials: 7,
      name: 'Secure Consul with Vault Integrations',
      description: 'Integrate with Vault to enforce security best practices.',
      theme: 'consul',
    },
    {
      id: 'a0120d29-8aec-4cd1-a881-f58a85952edc',
      slug: 'vault/getting-started',
      numTutorials: 13,
      name: 'Getting Started',
      description:
        'Vault secures, stores, and tightly controls access to tokens, passwords, certificates, API keys, and other secrets in modern computing. Get started here.',
      theme: 'vault',
    },
  ],
}
