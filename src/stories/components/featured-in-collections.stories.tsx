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
